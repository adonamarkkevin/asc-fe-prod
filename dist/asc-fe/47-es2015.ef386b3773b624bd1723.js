(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"0uvy":function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var o=n("+0xr"),a=n("sKXY"),r=n("M0ag"),l=n("3Pt+"),i=n("3swC"),c=n("PSD3"),s=n.n(c),m=n("fXoL"),d=n("dJ3e"),u=n("kmnG"),p=n("NFeN"),f=n("qFsG"),h=n("ofXK"),y=n("1jcm"),g=n("TPGS"),b=n("DeKZ"),O=n("d3UM"),E=n("FKr1");function v(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"mat-option",19),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;m["\u0275\u0275property"]("value",e.status),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",e.status," ")}}function D(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"mat-form-field",16),m["\u0275\u0275elementStart"](1,"mat-label"),m["\u0275\u0275text"](2,"Status"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"mat-select",17),m["\u0275\u0275listener"]("ngModelChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().typeOfDocument.status=t})),m["\u0275\u0275template"](4,v,2,2,"mat-option",18),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("ngModel",e.typeOfDocument.status),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngForOf",e.statusList)}}let S=(()=>{class e{constructor(e,t,n){this.apiService=e,this.formBuilder=t,this.sweetAlertService=n,this.displayedColumns=["typeOfDocumentDesc","dateOfLaunchEnable","expiresOnEnable","basedOnEnable","variantEnable","remarksEnable","inputEnable","status"],this.typeOfDocument=new a.u,this.typeOfDocumentList=[],this.statusList=[...r.B],this.isChecked=!1,this.hasInput=!1}ngOnInit(){this.getList(),this.setFormValidator()}getList(){this.apiService.findAll(r.n.typeOfDocument).subscribe(e=>{this.typeOfDocumentList=e.responseData.data,this.dataSource=new o.p(e.responseData.data),this.dataSource.paginator=this.formListComponent.paginator,this.dataSource.sort=this.formListComponent.sort})}save(){this.apiService.save(r.n.typeOfDocument,this.typeOfDocument).subscribe(e=>{void 0!==e&&this.sweetAlertService.success(e)},e=>{this.sweetAlertService.error(e)},()=>{this.resetFormValidator(),this.getList()})}getTypeOfDocument(){this.apiService.findById(r.n.typeOfDocument,this.formListComponent.idForUpdate).subscribe(e=>{e&&(this.typeOfDocument=e.responseData.data)})}update(){this.apiService.update(r.n.typeOfDocument,this.typeOfDocument).subscribe(e=>{void 0!==e&&this.sweetAlertService.success(e)},e=>{this.sweetAlertService.error(e)},()=>{this.resetFormValidator(),this.getList()})}setCheckboxValue(){this.isChecked=!this.isChecked}setFormValidator(){this.typeOfDocument.status=r.m.ACTIVE,this.typeOfDocumentForm=this.formBuilder.group({description:["",l.H.required],dateOfLaunchEnable:[""],expiresOnEnable:[""],basedOnEnable:[""],variantEnable:[""],remarksEnable:[""],inputEnable:[""],status:[""]})}resetFormValidator(){this.typeOfDocument=new a.u,this.typeOfDocument.status=r.m.ACTIVE,this.typeOfDocumentForm.markAsUntouched(),this.typeOfDocumentForm.markAsPristine()}delete(){s.a.fire({text:"Are you sure you want to delete this type of document?",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Confirm"}).then(e=>{e.value&&this.apiService.deleteById(r.n.typeOfDocument,this.typeOfDocument.id).subscribe(()=>{this.sweetAlertService.customSuccessMessage("Type of document successfully deleted."),this.resetFormValidator(),this.getList()})})}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](d.b),m["\u0275\u0275directiveInject"](l.g),m["\u0275\u0275directiveInject"](d.e))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["app-type-of-document"]],viewQuery:function(e,t){var n;1&e&&m["\u0275\u0275viewQuery"](i.a,!0),2&e&&m["\u0275\u0275queryRefresh"](n=m["\u0275\u0275loadQuery"]())&&(t.formListComponent=n.first)},decls:42,vars:19,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12","title"],[3,"formGroup"],["appearance","outline",1,"col-md-8"],[1,"required-field"],["matInput","","name","description","formControlName","description",3,"ngModel","ngModelChange"],["class","col-md-4","appearance","outline",4,"ngIf"],["color","warn","formControlName","dateOfLaunchEnable",1,"col-md-5",3,"ngModel","checked","ngModelChange"],["color","warn","formControlName","expiresOnEnable",1,"col-md-5",3,"ngModel","checked","ngModelChange"],["color","warn","formControlName","basedOnEnable",1,"col-md-5",3,"ngModel","checked","ngModelChange"],["color","warn","formControlName","variantEnable",1,"col-md-5",3,"ngModel","checked","ngModelChange"],["color","warn","formControlName","remarksEnable",1,"col-md-5",3,"ngModel","checked","ngModelChange"],["color","warn","formControlName","inputEnable",1,"col-md-5",3,"ngModel","checked","ngModelChange"],[3,"childObject","childForm","saveFunction","updateFunction","cancelFunction","deleteFunction"],[3,"dataSource","displayedColumns","selectInListFunction"],["appearance","outline",1,"col-md-4"],["name","status","formControlName","status",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"form"),m["\u0275\u0275elementStart"](1,"div",0),m["\u0275\u0275elementStart"](2,"div",1),m["\u0275\u0275elementStart"](3,"div",2),m["\u0275\u0275elementStart"](4,"mat-label"),m["\u0275\u0275elementStart"](5,"mat-icon"),m["\u0275\u0275text"](6,"file_present"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](7," Type of Document "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](8,"hr"),m["\u0275\u0275elementStart"](9,"form",3),m["\u0275\u0275elementStart"](10,"div",1),m["\u0275\u0275elementStart"](11,"mat-form-field",4),m["\u0275\u0275elementStart"](12,"mat-label"),m["\u0275\u0275text"](13,"Type of Document:"),m["\u0275\u0275elementStart"](14,"span",5),m["\u0275\u0275text"](15,"*"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](16,"input",6),m["\u0275\u0275listener"]("ngModelChange",(function(e){return t.typeOfDocument.description=e})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](17,D,5,2,"mat-form-field",7),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](18,"div",1),m["\u0275\u0275elementStart"](19,"mat-slide-toggle",8),m["\u0275\u0275listener"]("ngModelChange",(function(e){return t.typeOfDocument.dateOfLaunchEnable=e})),m["\u0275\u0275elementStart"](20,"b"),m["\u0275\u0275text"](21,"Has Date of Launch"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](22,"mat-slide-toggle",9),m["\u0275\u0275listener"]("ngModelChange",(function(e){return t.typeOfDocument.expiresOnEnable=e})),m["\u0275\u0275elementStart"](23,"b"),m["\u0275\u0275text"](24,"Has Expiration Date"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](25,"br"),m["\u0275\u0275elementStart"](26,"mat-slide-toggle",10),m["\u0275\u0275listener"]("ngModelChange",(function(e){return t.typeOfDocument.basedOnEnable=e})),m["\u0275\u0275elementStart"](27,"b"),m["\u0275\u0275text"](28,"Has Basis"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](29,"mat-slide-toggle",11),m["\u0275\u0275listener"]("ngModelChange",(function(e){return t.typeOfDocument.variantEnable=e})),m["\u0275\u0275elementStart"](30,"b"),m["\u0275\u0275text"](31,"Has Variant"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](32,"br"),m["\u0275\u0275elementStart"](33,"mat-slide-toggle",12),m["\u0275\u0275listener"]("ngModelChange",(function(e){return t.typeOfDocument.remarksEnable=e})),m["\u0275\u0275elementStart"](34,"b"),m["\u0275\u0275text"](35,"Has Remarks"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](36,"mat-slide-toggle",13),m["\u0275\u0275listener"]("ngModelChange",(function(e){return t.typeOfDocument.inputEnable=e})),m["\u0275\u0275elementStart"](37,"b"),m["\u0275\u0275text"](38,"Has Input"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](39,"app-form-action-buttons",14),m["\u0275\u0275listener"]("saveFunction",(function(){return t.save()}))("updateFunction",(function(){return t.update()}))("cancelFunction",(function(){return t.resetFormValidator()}))("deleteFunction",(function(){return t.delete()})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](40,"br"),m["\u0275\u0275elementStart"](41,"app-form-list",15),m["\u0275\u0275listener"]("selectInListFunction",(function(){return t.getTypeOfDocument()})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](9),m["\u0275\u0275property"]("formGroup",t.typeOfDocumentForm),m["\u0275\u0275advance"](7),m["\u0275\u0275property"]("ngModel",t.typeOfDocument.description),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",t.typeOfDocument.id),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("ngModel",t.typeOfDocument.dateOfLaunchEnable)("checked",t.typeOfDocument.dateOfLaunchEnable),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("ngModel",t.typeOfDocument.expiresOnEnable)("checked",t.typeOfDocument.expiresOnEnable),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("ngModel",t.typeOfDocument.basedOnEnable)("checked",t.typeOfDocument.basedOnEnable),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("ngModel",t.typeOfDocument.variantEnable)("checked",t.typeOfDocument.variantEnable),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("ngModel",t.typeOfDocument.remarksEnable)("checked",t.typeOfDocument.remarksEnable),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("ngModel",t.typeOfDocument.inputEnable)("checked",t.typeOfDocument.inputEnable),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("childObject",t.typeOfDocument)("childForm",t.typeOfDocumentForm),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("dataSource",t.dataSource)("displayedColumns",t.displayedColumns))},directives:[l.J,l.u,l.v,u.g,p.a,l.l,u.c,f.b,l.d,l.t,l.j,h.t,y.a,g.a,b.a,O.a,h.s,E.m],styles:[""]}),e})()},"y+NH":function(e,t,n){"use strict";n.r(t),n.d(t,"TypeOfDocumentModule",(function(){return p}));var o=n("ofXK"),a=n("tyNb"),r=n("0uvy"),l=n("fXoL");const i=[{path:"",component:r.a}];let c=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.f.forChild(i)],a.f]}),e})();var s=n("M0ag"),m=n("3Pt+"),d=n("tk/3"),u=n("7Tf7");let p=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,c,d.b,m.D,s.k,u.a]]}),e})()}}]);