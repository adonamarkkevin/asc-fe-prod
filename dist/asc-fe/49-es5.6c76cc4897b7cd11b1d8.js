!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){s=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{thCm:function(n,r,o){"use strict";o.r(r),o.d(r,"CompanyVoucherEnrollmentModule",(function(){return J}));var s=o("ofXK"),l=o("tyNb"),c=o("3Pt+"),u=o("+0xr"),m=o("3swC"),d=o("sKXY"),p=o("M0ag"),h=o("piSE"),f=i((function e(){a(this,e)})),v=o("Inok"),g=o("PSD3"),S=o.n(g),y=o("fXoL"),b=o("dJ3e"),E=o("jhN1"),C=o("TMp0"),w=o("kmnG"),L=o("NFeN"),x=o("DeKZ"),F=o("d3UM"),I=o("qFsG"),D=o("iadO"),k=o("bTqV"),A=o("FKr1"),M=function(){return{standalone:!0}};function V(e,t){if(1&e){var n=y["\u0275\u0275getCurrentView"]();y["\u0275\u0275elementStart"](0,"div"),y["\u0275\u0275elementStart"](1,"mat-label"),y["\u0275\u0275text"](2,"Voucher: \xa0\xa0\xa0"),y["\u0275\u0275elementStart"](3,"span"),y["\u0275\u0275text"](4,"PDF file only!"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](5,"br"),y["\u0275\u0275elementStart"](6,"input",32),y["\u0275\u0275listener"]("ngModelChange",(function(e){return y["\u0275\u0275restoreView"](n),y["\u0275\u0275nextContext"]().attachment=e}))("change",(function(e){return y["\u0275\u0275restoreView"](n),y["\u0275\u0275nextContext"]().selectFile(e)})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()}if(2&e){var r=y["\u0275\u0275nextContext"]();y["\u0275\u0275advance"](6),y["\u0275\u0275property"]("ngModel",r.attachment)("ngModelOptions",y["\u0275\u0275pureFunction0"](2,M))}}function N(e,t){if(1&e&&(y["\u0275\u0275elementStart"](0,"div"),y["\u0275\u0275elementStart"](1,"div",33),y["\u0275\u0275elementStart"](2,"object",34),y["\u0275\u0275elementStart"](3,"iframe",35),y["\u0275\u0275elementStart"](4,"p"),y["\u0275\u0275text"](5,"This browser does not support PDF!"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()),2&e){var n=y["\u0275\u0275nextContext"]();y["\u0275\u0275advance"](2),y["\u0275\u0275property"]("data",n.safeURL,y["\u0275\u0275sanitizeResourceUrl"]),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("src",n.safeURL,y["\u0275\u0275sanitizeResourceUrl"])}}function U(e,t){if(1&e){var n=y["\u0275\u0275getCurrentView"]();y["\u0275\u0275elementStart"](0,"mat-option",36),y["\u0275\u0275listener"]("click",(function(){y["\u0275\u0275restoreView"](n);var e=t.$implicit;return y["\u0275\u0275nextContext"]().getCompanyDetails(e)})),y["\u0275\u0275text"](1),y["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit;y["\u0275\u0275property"]("value",r),y["\u0275\u0275advance"](1),y["\u0275\u0275textInterpolate1"](" ",r.companyName," ")}}function j(e,t){if(1&e&&(y["\u0275\u0275elementStart"](0,"mat-form-field",37),y["\u0275\u0275elementStart"](1,"mat-label"),y["\u0275\u0275text"](2,"Company Name"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](3,"input",38),y["\u0275\u0275elementEnd"]()),2&e){var n=y["\u0275\u0275nextContext"]();y["\u0275\u0275advance"](3),y["\u0275\u0275property"]("value",n.company.companyName)}}function R(e,t){if(1&e&&(y["\u0275\u0275elementStart"](0,"mat-form-field",15),y["\u0275\u0275elementStart"](1,"mat-label"),y["\u0275\u0275text"](2,"Company TelephoneNo"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](3,"input",38),y["\u0275\u0275elementEnd"]()),2&e){var n=y["\u0275\u0275nextContext"]();y["\u0275\u0275advance"](3),y["\u0275\u0275property"]("value",n.company.companyTelephoneNo)}}function T(e,t){if(1&e&&(y["\u0275\u0275elementStart"](0,"mat-form-field",15),y["\u0275\u0275elementStart"](1,"mat-label"),y["\u0275\u0275text"](2,"Company Tin "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](3,"input",38),y["\u0275\u0275elementEnd"]()),2&e){var n=y["\u0275\u0275nextContext"]();y["\u0275\u0275advance"](3),y["\u0275\u0275property"]("value",n.company.companyTin)}}function P(e,t){if(1&e&&(y["\u0275\u0275elementStart"](0,"mat-form-field",37),y["\u0275\u0275elementStart"](1,"mat-label"),y["\u0275\u0275text"](2,"Company Address"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](3,"input",38),y["\u0275\u0275elementEnd"]()),2&e){var n=y["\u0275\u0275nextContext"]();y["\u0275\u0275advance"](3),y["\u0275\u0275property"]("value",n.company.completeAddress)}}var B,O,q,z=[{path:"",component:(B=function(){function n(e,r,o,i,s,l,c){a(this,n),this.apiService=e,this.formBuilder=r,this.sanitizer=o,this.dataStorage=i,this.fileStorageService=s,this.sweetAlertService=l,this.router=c,this.displayedColumns=["company","fundAmount","voucherDate"],this.displayedColumnsSignatories=["name","position","voucherActionItems"],this.voucher=new v.a,this.company=new d.k,this.voucherSignatories=new f,this.paymentMethod=new h.a,this.voucherList=[],this.companyList=[],this.statusList=t(p.A),this.signatoriesList=[],this.process="save",this.previewDocument=!1,this.currentDate=new Date,this.disabledWeekEnds=function(e){var t=(e||new Date).getDay();return 0!==t&&6!==t}}return i(n,[{key:"ngOnInit",value:function(){this.setFormValidator(),this.setSignatoriesForm(),this.getVoucherList(),this.getCompanyList()}},{key:"ngOnDestroy",value:function(){}},{key:"setFormValidator",value:function(){this.voucher.status=p.m.ACTIVE,this.voucherForm=this.formBuilder.group({company:["",[c.H.required]],fundAmount:["",[c.H.required]],voucherDate:["",[c.H.required]]})}},{key:"setSignatoriesForm",value:function(){this.voucherSignatoriesForm=this.formBuilder.group({voucherSignatoriesName:["",[c.H.required]],voucherSignatoriesPosition:["",[c.H.required]]})}},{key:"resetsetSignatoriesForm",value:function(){this.voucher.status=p.m.ACTIVE,this.voucherSignatories=new f,this.voucherSignatoriesForm.markAsUntouched(),this.voucherSignatoriesForm.markAsPristine()}},{key:"resetFormValidatorVoucher",value:function(){this.voucher.status=p.m.ACTIVE,this.voucher=new v.a,this.attachment=null,this.voucherForm.markAsUntouched(),this.voucherForm.markAsPristine()}},{key:"selectFile",value:function(t){var n=t.target.files[0].size;if("application/pdf"!==t.target.files[0].type)return this.sweetAlertService.customErrorMessage("Attachment should be in PDF format only."),void(t.target.value="");if(n>15e6)return this.sweetAlertService.customErrorMessage("Attachments' total file size should not exceed 15MB."),void(t.target.value="");var r=URL.createObjectURL(t.target.files[0]);this.safeURL=this.sanitizer.bypassSecurityTrustResourceUrl(r),this.previewDocument=!0;var o=new FileReader,i=e(t.target.files,1)[0];o.readAsDataURL(i),o.onload=function(){},this.selectedFiles=t.target.files}},{key:"uploadVoucher",value:function(){var e=this;S.a.fire({text:"Are you sure you want to submit this VOUCHER?",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Confirm"}).then((function(t){var n;t.value&&(e.dataStorage.setDisplayProgressbar(!0),n="?&attachmentType="+p.j.VOUCHER_FUND+"&submissionType="+p.B.ORIGINAL,e.fileStorageService.pushFileToStorage(p.n.attachmentDocument,e.selectedFiles.item(0),n).subscribe((function(t){e.voucher.voucherAttachmentReference=t.responseData.data.voucherAttachmentReference,e.voucher.company=e.company,e.voucher.voucherSignatories=e.signatoriesList,e.saveVoucher(),e.selectedFiles=void 0}),(function(t){e.sweetAlertService.error(t)}),(function(){e.dataStorage.setDisplayProgressbar(!1)})))}))}},{key:"viewAttachmentFile",value:function(){var e=this;this.apiService.findByParam(p.n.attachmentDocument,"voucher-attachment-reference/"+this.voucher.voucherAttachmentReference).subscribe((function(t){t&&(e.previewDocument=!0,e.attachmentDocuments=t.responseData.data,e.safeURL=e.sanitizer.bypassSecurityTrustResourceUrl(e.attachmentDocuments.fileURL))}),(function(t){e.attachmentDocuments=[]}))}},{key:"reset",value:function(){this.process="save",this.resetFormValidatorVoucher(),this.resetsetSignatoriesForm(),this.attachmentDocuments=[],this.previewDocument=!1,this.dataSourceSignatories=null,this.signatoriesList=[]}},{key:"saveVoucher",value:function(){var e=this;this.apiService.save(p.n.voucherFundEnrollment,this.voucher).subscribe((function(t){e.sweetAlertService.success(t),e.setFormValidator(),e.getVoucherList(),e.router.navigateByUrl("asc/page/accounting/voucher-enrollment"),e.reset()}),(function(t){e.sweetAlertService.error(t)}))}},{key:"getCompanyList",value:function(){var e=this;this.apiService.findAll(p.n.company).subscribe((function(t){e.companyList=t.responseData.data}))}},{key:"getCompanyDetails",value:function(e){this.company=e}},{key:"getVoucherDetails",value:function(){var e=this;this.process="update",this.apiService.findById(p.n.voucher,this.formListComponent.idForUpdate).subscribe((function(t){t&&(e.voucher=t.responseData.data,e.signatoriesList=e.voucher.voucherSignatories,e.dataSourceSignatories=new u.p(e.signatoriesList),e.dataSourceSignatories.paginator=e.formListComponent.paginator,e.dataSourceSignatories.sort=e.formListComponent.sort,e.getCompanyDetails(e.voucher.company),e.viewAttachmentFile())}))}},{key:"onUpdateSignatory",value:function(e){var t=this;e.id&&"update"===this.process&&this.voucher.id?this.apiService.update(p.n.voucherSignatories,{id:e.id,name:e.name,position:e.position,voucherId:this.voucher.id}).subscribe((function(n){t.signatoriesList.splice(t.signatoriesList.findIndex((function(t){return t.id===e.id})),1,n.responseData.data),t.dataSourceSignatories=new u.p(t.signatoriesList),t.dataSourceSignatories.paginator=t.formListComponent.paginator})):(this.signatoriesList=e,this.dataSourceSignatories=new u.p(this.signatoriesList),this.dataSourceSignatories.paginator=this.formListComponent.paginator)}},{key:"onDeleteSignatory",value:function(e){var t=this;S.a.fire({text:"Are you sure you want to delete this SIGNATORY?",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Confirm"}).then((function(n){n.value&&(t.signatoriesList=t.signatoriesList.filter((function(t){return t!==e})),t.dataSourceSignatories=new u.p(t.signatoriesList),"update"===t.process&&e.id&&t.voucher.id&&t.apiService.deleteById(p.n.voucherSignatories,e.id).subscribe((function(n){t.signatoriesList.splice(t.signatoriesList.findIndex((function(t){return t.id===e.id})),1),t.dataSourceSignatories.paginator=t.formListComponent.paginator})))}))}},{key:"setSignatoriesList",value:function(e){var t=this;this.signatoriesList.push(e),this.dataSourceSignatories=new u.p(this.signatoriesList),this.dataSourceSignatories.paginator=this.formListComponent.paginator,this.dataSourceSignatories.sort=this.formListComponent.sort,"update"===this.process&&this.voucher.id&&this.apiService.save(p.n.voucherSignatories,{name:e.name,position:e.position,voucherId:this.voucher.id}).subscribe((function(e){t.dataSourceSignatories.paginator=t.formListComponent.paginator})),this.resetsetSignatoriesForm()}},{key:"getVoucherList",value:function(){var e=this;this.apiService.findAll(p.n.voucherMonitoring+"?page=1&size=30").subscribe((function(t){e.voucherList=t.data,e.dataSource=new u.p(t.data),e.dataSource.paginator=e.formListComponent.paginator,e.dataSource.sort=e.formListComponent.sort}))}}]),n}(),B.\u0275fac=function(e){return new(e||B)(y["\u0275\u0275directiveInject"](b.b),y["\u0275\u0275directiveInject"](c.g),y["\u0275\u0275directiveInject"](E.b),y["\u0275\u0275directiveInject"](b.c),y["\u0275\u0275directiveInject"](C.a),y["\u0275\u0275directiveInject"](b.e),y["\u0275\u0275directiveInject"](l.b))},B.\u0275cmp=y["\u0275\u0275defineComponent"]({type:B,selectors:[["app-company-voucher-enrollment"]],viewQuery:function(e,t){var n;1&e&&y["\u0275\u0275viewQuery"](m.a,!0),2&e&&y["\u0275\u0275queryRefresh"](n=y["\u0275\u0275loadQuery"]())&&(t.formListComponent=n.first)},inputs:{safeURL:"safeURL"},decls:88,vars:26,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12","title"],[3,"dataSource","displayedColumns","selectInListFunction"],[1,"col-md-12","information-title"],[1,"row","col-md-12"],[1,"row","col-md-5"],[4,"ngIf"],[1,"row","col-md-7"],[3,"formGroup"],["appearance","outline",1,"col-md-12",3,"hidden"],["name","company","formControlName","company",3,"ngModel","ngModelChange"],[3,"value","click",4,"ngFor","ngForOf"],["class","col-md-12","appearance","outline",4,"ngIf"],["class","col-md-6","appearance","outline",4,"ngIf"],["appearance","outline",1,"col-md-6"],[1,"required-field"],["matInput","","name","fundAmount","formControlName","fundAmount","type","number",3,"ngModel","readonly","ngModelChange"],["matInput","","placeholder","Date","readonly","","name","voucherDate","formControlName","voucherDate",3,"matDatepicker","ngModel","ngModelChange"],["matSuffix","",3,"for","hidden"],["color","warn","disabled","false"],["voucherDate",""],["matInput","","name","voucherSignatoriesName","formControlName","voucherSignatoriesName",3,"ngModel","ngModelChange"],["matInput","","name","voucherSignatoriesPosition","formControlName","voucherSignatoriesPosition",3,"ngModel","ngModelChange"],[1,"col-md-9"],[1,"col-md-3"],["mat-raised-button","",1,"button-red",3,"disabled","click"],[1,"material-icons","color__white"],[3,"dataSource","displayedColumns","deleteInListFunction","updateListFunction"],[1,"col-md-6"],["mat-raised-button","",1,"button-red",3,"hidden","disabled","click"],["mat-raised-button","",1,"button-red",3,"click"],["type","file","accept",".pdf",1,"file-upload",3,"ngModel","ngModelOptions","ngModelChange","change"],[1,"file-upload"],["type","application/pdf","width","100%","height","500",3,"data"],["width","100%","height","500",3,"src"],[3,"value","click"],["appearance","outline",1,"col-md-12"],["matInput","","readonly","",3,"value"]],template:function(e,t){if(1&e&&(y["\u0275\u0275elementStart"](0,"form"),y["\u0275\u0275elementStart"](1,"div",0),y["\u0275\u0275elementStart"](2,"div",1),y["\u0275\u0275elementStart"](3,"div",2),y["\u0275\u0275elementStart"](4,"mat-label"),y["\u0275\u0275elementStart"](5,"mat-icon"),y["\u0275\u0275text"](6,"view_list"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275text"](7," Company Voucher Enrollment "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](8,"hr"),y["\u0275\u0275element"](9,"br"),y["\u0275\u0275elementStart"](10,"app-form-list",3),y["\u0275\u0275listener"]("selectInListFunction",(function(){return t.getVoucherDetails()})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](11,"br"),y["\u0275\u0275elementStart"](12,"div",0),y["\u0275\u0275elementStart"](13,"div",1),y["\u0275\u0275elementStart"](14,"div",4),y["\u0275\u0275elementStart"](15,"mat-label"),y["\u0275\u0275text"](16," Company Information "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](17,"hr"),y["\u0275\u0275element"](18,"br"),y["\u0275\u0275elementStart"](19,"div",5),y["\u0275\u0275elementStart"](20,"div",6),y["\u0275\u0275template"](21,V,7,3,"div",7),y["\u0275\u0275template"](22,N,6,2,"div",7),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](23,"div",8),y["\u0275\u0275elementStart"](24,"form",9),y["\u0275\u0275elementStart"](25,"div",1),y["\u0275\u0275elementStart"](26,"mat-form-field",10),y["\u0275\u0275elementStart"](27,"mat-label"),y["\u0275\u0275text"](28," Company Name "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](29,"mat-select",11),y["\u0275\u0275listener"]("ngModelChange",(function(e){return t.voucher.company=e})),y["\u0275\u0275template"](30,U,2,2,"mat-option",12),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275template"](31,j,4,1,"mat-form-field",13),y["\u0275\u0275template"](32,R,4,1,"mat-form-field",14),y["\u0275\u0275template"](33,T,4,1,"mat-form-field",14),y["\u0275\u0275template"](34,P,4,1,"mat-form-field",13),y["\u0275\u0275elementStart"](35,"mat-form-field",15),y["\u0275\u0275elementStart"](36,"mat-label"),y["\u0275\u0275text"](37,"Fund Amount "),y["\u0275\u0275elementStart"](38,"span",16),y["\u0275\u0275text"](39,"*"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](40,"input",17),y["\u0275\u0275listener"]("ngModelChange",(function(e){return t.voucher.fundAmount=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](41,"mat-form-field",15),y["\u0275\u0275elementStart"](42,"mat-label"),y["\u0275\u0275text"](43,"Voucher Date"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](44,"input",18),y["\u0275\u0275listener"]("ngModelChange",(function(e){return t.voucher.voucherDate=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](45,"mat-datepicker-toggle",19),y["\u0275\u0275element"](46,"mat-datepicker",20,21),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](48,"div",5),y["\u0275\u0275elementStart"](49,"form",9),y["\u0275\u0275elementStart"](50,"div",1),y["\u0275\u0275elementStart"](51,"mat-form-field",15),y["\u0275\u0275elementStart"](52,"mat-label"),y["\u0275\u0275text"](53,"Voucher Signatories Name "),y["\u0275\u0275elementStart"](54,"span",16),y["\u0275\u0275text"](55,"*"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](56,"input",22),y["\u0275\u0275listener"]("ngModelChange",(function(e){return t.voucherSignatories.name=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](57,"mat-form-field",15),y["\u0275\u0275elementStart"](58,"mat-label"),y["\u0275\u0275text"](59,"Voucher Signatories Position "),y["\u0275\u0275elementStart"](60,"span",16),y["\u0275\u0275text"](61,"*"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](62,"input",23),y["\u0275\u0275listener"]("ngModelChange",(function(e){return t.voucherSignatories.position=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](63,"div",1),y["\u0275\u0275element"](64,"div",24),y["\u0275\u0275elementStart"](65,"div",25),y["\u0275\u0275elementStart"](66,"button",26),y["\u0275\u0275listener"]("click",(function(){return t.setSignatoriesList(t.voucherSignatories)})),y["\u0275\u0275elementStart"](67,"i",27),y["\u0275\u0275text"](68,"task_alt"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275text"](69," Add Signatory "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](70,"br"),y["\u0275\u0275element"](71,"br"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](72,"app-form-list",28),y["\u0275\u0275listener"]("deleteInListFunction",(function(e){return t.onDeleteSignatory(e)}))("updateListFunction",(function(e){return t.onUpdateSignatory(e)})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](73,"div",1),y["\u0275\u0275element"](74,"div",29),y["\u0275\u0275elementStart"](75,"div",25),y["\u0275\u0275element"](76,"br"),y["\u0275\u0275elementStart"](77,"button",30),y["\u0275\u0275listener"]("click",(function(){return t.uploadVoucher()})),y["\u0275\u0275elementStart"](78,"i",27),y["\u0275\u0275text"](79,"task_alt"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275text"](80," SUBMIT "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](81,"div",25),y["\u0275\u0275element"](82,"br"),y["\u0275\u0275elementStart"](83,"button",31),y["\u0275\u0275listener"]("click",(function(){return t.reset()})),y["\u0275\u0275elementStart"](84,"i",27),y["\u0275\u0275text"](85,"task_alt"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275text"](86," RESET "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](87,"br"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()),2&e){var n=y["\u0275\u0275reference"](47);y["\u0275\u0275advance"](10),y["\u0275\u0275property"]("dataSource",t.dataSource)("displayedColumns",t.displayedColumns),y["\u0275\u0275advance"](11),y["\u0275\u0275property"]("ngIf","save"===t.process),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf",!0===t.previewDocument),y["\u0275\u0275advance"](2),y["\u0275\u0275property"]("formGroup",t.voucherForm),y["\u0275\u0275advance"](2),y["\u0275\u0275property"]("hidden","update"===t.process),y["\u0275\u0275advance"](3),y["\u0275\u0275property"]("ngModel",t.voucher.company),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngForOf",t.companyList),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf",t.voucher.company&&"update"===t.process),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf",t.voucher.company),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf",t.voucher.company),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf",t.voucher.company),y["\u0275\u0275advance"](6),y["\u0275\u0275property"]("ngModel",t.voucher.fundAmount)("readonly","update"===t.process),y["\u0275\u0275advance"](4),y["\u0275\u0275property"]("matDatepicker",n)("ngModel",t.voucher.voucherDate),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("for",n)("hidden","update"===t.process),y["\u0275\u0275advance"](4),y["\u0275\u0275property"]("formGroup",t.voucherSignatoriesForm),y["\u0275\u0275advance"](7),y["\u0275\u0275property"]("ngModel",t.voucherSignatories.name),y["\u0275\u0275advance"](6),y["\u0275\u0275property"]("ngModel",t.voucherSignatories.position),y["\u0275\u0275advance"](4),y["\u0275\u0275property"]("disabled",(null==t.voucherSignatoriesForm.controls.voucherSignatoriesPosition||null==t.voucherSignatoriesForm.controls.voucherSignatoriesPosition.errors?null:t.voucherSignatoriesForm.controls.voucherSignatoriesPosition.errors.required)||(null==t.voucherSignatoriesForm.controls.voucherSignatoriesName||null==t.voucherSignatoriesForm.controls.voucherSignatoriesName.errors?null:t.voucherSignatoriesForm.controls.voucherSignatoriesName.errors.required)),y["\u0275\u0275advance"](6),y["\u0275\u0275property"]("dataSource",t.dataSourceSignatories)("displayedColumns",t.displayedColumnsSignatories),y["\u0275\u0275advance"](5),y["\u0275\u0275property"]("hidden","update"===t.process)("disabled",t.voucherForm.invalid||0===(null==t.signatoriesList?null:t.signatoriesList.length)||!t.attachment)}},directives:[c.J,c.u,c.v,w.g,L.a,x.a,s.t,c.l,w.c,F.a,c.t,c.j,s.s,I.b,c.d,c.z,D.h,D.j,w.j,D.f,k.b,c.w,A.m],styles:[".button-green[_ngcontent-%COMP%]{background-color:green;color:#fff}.information-title[_ngcontent-%COMP%]{text-align:center;font-weight:700;font-size:24px}"]}),B)}],_=((O=i((function e(){a(this,e)}))).\u0275mod=y["\u0275\u0275defineNgModule"]({type:O}),O.\u0275inj=y["\u0275\u0275defineInjector"]({factory:function(e){return new(e||O)},imports:[[l.f.forChild(z)],l.f]}),O),G=o("tk/3"),H=o("7Tf7"),J=((q=i((function e(){a(this,e)}))).\u0275mod=y["\u0275\u0275defineNgModule"]({type:q}),q.\u0275inj=y["\u0275\u0275defineInjector"]({factory:function(e){return new(e||q)},imports:[[s.c,_,G.b,c.D,c.n,p.k,H.a]]}),q)}}])}();