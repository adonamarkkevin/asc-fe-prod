(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{nRib:function(e,t,n){"use strict";n.r(t),n.d(t,"TypeOfApplicationModule",(function(){return M}));var i=n("ofXK"),a=n("tyNb"),o=n("3Pt+"),r=n("+0xr"),l=n("3swC"),s=n("sKXY"),p=n("M0ag"),m=n("PSD3"),c=n.n(m),d=n("fXoL"),u=n("dJ3e"),f=n("kmnG"),y=n("qFsG"),g=n("TPGS"),h=n("DeKZ"),S=n("d3UM"),v=n("FKr1");function A(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"mat-option",18),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275property"]("value",e.status),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",e.status," ")}}function E(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"mat-form-field",4),d["\u0275\u0275elementStart"](1,"mat-label"),d["\u0275\u0275text"](2,"Status"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"mat-select",16),d["\u0275\u0275listener"]("ngModelChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().typeOfApplication.status=t})),d["\u0275\u0275template"](4,A,2,2,"mat-option",17),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngModel",e.typeOfApplication.status),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",e.statusList)}}const b=[{path:"",component:(()=>{class e{constructor(e,t,n){this.apiService=e,this.formBuilder=t,this.sweetAlertService=n,this.displayedColumns=["description","clearingReleaseTime","decisionReleaseTime","submissionStartTime","submissionEndTime"],this.statusList=[...p.A],this.typeOfApplication=new s.t,this.typeOfApplicationList=[],this.formTypeList=[...p.q]}ngOnInit(){this.getList(),this.setFormValidator()}getList(){this.apiService.findAll(p.n.applicationType).subscribe(e=>{console.log(e.responseData.data),this.typeOfApplicationList=e.responseData.data,this.dataSource=new r.p(e.responseData.data),this.dataSource.paginator=this.formListComponent.paginator,this.dataSource.sort=this.formListComponent.sort})}save(){this.apiService.save(p.n.applicationType,this.typeOfApplication).subscribe(e=>{void 0!==e&&this.sweetAlertService.success(e)},e=>{this.sweetAlertService.error(e)},()=>{this.resetFormValidator(),this.getList()})}getTypeOfApplication(){this.apiService.findById(p.n.applicationType,this.formListComponent.idForUpdate).subscribe(e=>{e&&(this.typeOfApplication=e.responseData.data)})}update(){this.apiService.update(p.n.applicationType,this.typeOfApplication).subscribe(e=>{void 0!==e&&this.sweetAlertService.success(e)},e=>{this.sweetAlertService.error(e)},()=>{this.resetFormValidator(),this.getList()})}setFormValidator(){new o.h,this.typeOfApplication.status=p.m.ACTIVE,this.typeOfApplicationForm=this.formBuilder.group({clearingReleaseTime:["",[o.H.required]],decisionReleaseTime:["",[o.H.required]],description:["",[o.H.required]],sequenceNo:["",[o.H.required]],status:["",[o.H.required]],submissionEndTime:["",[o.H.required]],submissionStartTime:["",[o.H.required]]})}resetFormValidator(){this.typeOfApplication=new s.t,this.typeOfApplication.status=p.m.ACTIVE,this.typeOfApplicationForm.markAsUntouched(),this.typeOfApplicationForm.markAsPristine()}compareFormType(e,t){if(e&&t)return e.description===t}delete(){c.a.fire({text:"Are you sure you want to delete this type of application?",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Confirm"}).then(e=>{e.value&&this.apiService.deleteById(p.n.applicationType,this.typeOfApplication.id).subscribe(()=>{this.sweetAlertService.customSuccessMessage("Type of application successfully deleted."),this.resetFormValidator(),this.getList()})})}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](u.b),d["\u0275\u0275directiveInject"](o.g),d["\u0275\u0275directiveInject"](u.e))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["app-type-of-application"]],viewQuery:function(e,t){var n;1&e&&d["\u0275\u0275viewQuery"](l.a,!0),2&e&&d["\u0275\u0275queryRefresh"](n=d["\u0275\u0275loadQuery"]())&&(t.formListComponent=n.first)},decls:50,vars:12,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12","title"],[3,"formGroup"],["appearance","outline",1,"col-md-4"],[1,"required-field"],["matInput","","name","description","formControlName","description",3,"ngModel","ngModelChange"],["matInput","","name","sequenceNo","formControlName","sequenceNo",3,"ngModel","ngModelChange"],["class","col-md-4","appearance","outline",4,"ngIf"],["appearance","outline",1,"col-md-6"],["matInput","","name","clearingReleaseTime","formControlName","clearingReleaseTime",3,"ngModel","ngModelChange"],["matInput","","name","decisionReleaseTime","formControlName","decisionReleaseTime",3,"ngModel","ngModelChange"],["matInput","","name","submissionStartTime","formControlName","submissionStartTime",3,"ngModel","ngModelChange"],["matInput","","name","submissionEndTime","formControlName","submissionEndTime",3,"ngModel","ngModelChange"],[3,"childObject","childForm","saveFunction","updateFunction","cancelFunction","deleteFunction"],[3,"dataSource","displayedColumns","selectInListFunction"],["name","status","formControlName","status",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(d["\u0275\u0275element"](0,"br"),d["\u0275\u0275elementStart"](1,"form"),d["\u0275\u0275elementStart"](2,"div",0),d["\u0275\u0275elementStart"](3,"div",1),d["\u0275\u0275elementStart"](4,"div",2),d["\u0275\u0275elementStart"](5,"mat-label"),d["\u0275\u0275text"](6," Type of Application "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](7,"hr"),d["\u0275\u0275elementStart"](8,"form",3),d["\u0275\u0275elementStart"](9,"div",1),d["\u0275\u0275elementStart"](10,"mat-form-field",4),d["\u0275\u0275elementStart"](11,"mat-label"),d["\u0275\u0275text"](12,"Description "),d["\u0275\u0275elementStart"](13,"span",5),d["\u0275\u0275text"](14,"*"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](15,"input",6),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.typeOfApplication.description=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](16,"mat-form-field",4),d["\u0275\u0275elementStart"](17,"mat-label"),d["\u0275\u0275text"](18,"Sequence Number "),d["\u0275\u0275elementStart"](19,"span",5),d["\u0275\u0275text"](20,"*"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](21,"input",7),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.typeOfApplication.sequenceNo=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](22,E,5,2,"mat-form-field",8),d["\u0275\u0275elementStart"](23,"mat-form-field",9),d["\u0275\u0275elementStart"](24,"mat-label"),d["\u0275\u0275text"](25,"Clearing Release Time "),d["\u0275\u0275elementStart"](26,"span",5),d["\u0275\u0275text"](27,"*"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](28,"input",10),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.typeOfApplication.clearingReleaseTime=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](29,"mat-form-field",9),d["\u0275\u0275elementStart"](30,"mat-label"),d["\u0275\u0275text"](31,"Decision Release Time "),d["\u0275\u0275elementStart"](32,"span",5),d["\u0275\u0275text"](33,"*"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](34,"input",11),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.typeOfApplication.decisionReleaseTime=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](35,"mat-form-field",9),d["\u0275\u0275elementStart"](36,"mat-label"),d["\u0275\u0275text"](37,"Submission Start Time "),d["\u0275\u0275elementStart"](38,"span",5),d["\u0275\u0275text"](39,"*"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](40,"input",12),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.typeOfApplication.submissionStartTime=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](41,"mat-form-field",9),d["\u0275\u0275elementStart"](42,"mat-label"),d["\u0275\u0275text"](43,"Submission End Time "),d["\u0275\u0275elementStart"](44,"span",5),d["\u0275\u0275text"](45,"*"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](46,"input",13),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.typeOfApplication.submissionEndTime=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](47,"app-form-action-buttons",14),d["\u0275\u0275listener"]("saveFunction",(function(){return t.save()}))("updateFunction",(function(){return t.update()}))("cancelFunction",(function(){return t.resetFormValidator()}))("deleteFunction",(function(){return t.delete()})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](48,"br"),d["\u0275\u0275elementStart"](49,"app-form-list",15),d["\u0275\u0275listener"]("selectInListFunction",(function(){return t.getTypeOfApplication()})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](8),d["\u0275\u0275property"]("formGroup",t.typeOfApplicationForm),d["\u0275\u0275advance"](7),d["\u0275\u0275property"]("ngModel",t.typeOfApplication.description),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("ngModel",t.typeOfApplication.sequenceNo),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",t.typeOfApplication.id),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("ngModel",t.typeOfApplication.clearingReleaseTime),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("ngModel",t.typeOfApplication.decisionReleaseTime),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("ngModel",t.typeOfApplication.submissionStartTime),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("ngModel",t.typeOfApplication.submissionEndTime),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("childObject",t.typeOfApplication)("childForm",t.typeOfApplicationForm),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("dataSource",t.dataSource)("displayedColumns",t.displayedColumns))},directives:[o.J,o.u,o.v,f.g,o.l,f.c,y.b,o.d,o.t,o.j,i.t,g.a,h.a,S.a,i.s,v.m],styles:[""]}),e})()}];let T=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.f.forChild(b)],a.f]}),e})();var C=n("tk/3"),O=n("7Tf7");let M=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,T,C.b,o.D,p.k,O.a]]}),e})()}}]);