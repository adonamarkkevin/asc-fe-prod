(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"1f37":function(e,t,i){"use strict";i.r(t),i.d(t,"AffiliationModule",(function(){return u}));var n=i("ofXK"),a=i("tyNb"),o=i("Y9a5"),r=i("fXoL");const s=[{path:"",component:o.a}];let l=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.f.forChild(s)],a.f]}),e})();var m=i("tk/3"),f=i("3Pt+"),c=i("M0ag"),d=i("7Tf7");let u=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.c,l,m.b,f.D,c.k,d.a]]}),e})()},Y9a5:function(e,t,i){"use strict";i.d(t,"a",(function(){return w}));var n=i("M0ag"),a=i("+0xr"),o=i("3Pt+"),r=i("sKXY"),s=i("3swC"),l=i("PSD3"),m=i.n(l),f=i("fXoL"),c=i("dJ3e"),d=i("kmnG"),u=i("NFeN"),p=i("qFsG"),h=i("d3UM"),v=i("ofXK"),g=i("TPGS"),b=i("DeKZ"),S=i("FKr1");function C(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"mat-option",13),f["\u0275\u0275text"](1),f["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;f["\u0275\u0275property"]("value",e),f["\u0275\u0275advance"](1),f["\u0275\u0275textInterpolate1"](" ",e," ")}}function y(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"mat-option",13),f["\u0275\u0275text"](1),f["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;f["\u0275\u0275property"]("value",e.status),f["\u0275\u0275advance"](1),f["\u0275\u0275textInterpolate1"](" ",e.status," ")}}function F(e,t){if(1&e){const e=f["\u0275\u0275getCurrentView"]();f["\u0275\u0275elementStart"](0,"mat-form-field",7),f["\u0275\u0275elementStart"](1,"mat-label"),f["\u0275\u0275text"](2,"Status"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](3,"mat-select",14),f["\u0275\u0275listener"]("ngModelChange",(function(t){return f["\u0275\u0275restoreView"](e),f["\u0275\u0275nextContext"]().affiliation.status=t})),f["\u0275\u0275template"](4,y,2,2,"mat-option",9),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()}if(2&e){const e=f["\u0275\u0275nextContext"]();f["\u0275\u0275advance"](3),f["\u0275\u0275property"]("ngModel",e.affiliation.status),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("ngForOf",e.statusList)}}let w=(()=>{class e{constructor(e,t,i){this.apiService=e,this.formBuilder=t,this.sweetAlertService=i,this.displayedColumns=["affiliationDesc","member","status"],this.statusList=[...n.B],this.yesNoList=[...n.H],this.affiliation=new r.a,this.affiliationList=[]}ngOnInit(){this.getList(),this.setFormValidator()}getList(){this.apiService.findAll(n.n.affiliation).subscribe(e=>{this.affiliationList=e.responseData.data,this.dataSource=new a.p(e.responseData.data),this.dataSource.paginator=this.formListComponent.paginator,this.dataSource.sort=this.formListComponent.sort})}save(){"No"===this.affiliation.member.toString()&&(this.affiliation.member=this.setValue(this.affiliation.member)),this.affiliation.status=n.m.ACTIVE,this.apiService.save(n.n.affiliation,this.affiliation).subscribe(e=>{void 0!==e&&this.sweetAlertService.success(e)},e=>{this.sweetAlertService.error(e)},()=>{this.resetFormValidator(),this.getList()})}getAffiliation(){this.apiService.findById(n.n.affiliation,this.formListComponent.idForUpdate).subscribe(e=>{e&&(this.affiliation=e.responseData.data)})}confirmUpdate(){"INACTIVE"===this.affiliation.status?m.a.fire({text:"Admin should manually change the company's membership affiliation value to its equivalent non member value. Continue?",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Confirm"}).then(e=>{e.value&&this.update()}):this.update()}update(){this.affiliation.member=this.setValue(this.affiliation.member),this.apiService.update(n.n.affiliation,this.affiliation).subscribe(e=>{void 0!==e&&this.sweetAlertService.success(e)},e=>{this.sweetAlertService.error(e)},()=>{this.resetFormValidator(),this.getList()})}setFormValidator(){this.affiliation.status=n.m.ACTIVE,this.affiliation.member=!0,this.affiliationForm=this.formBuilder.group({description:["",o.H.required],member:["",o.H.required],status:[""]})}resetFormValidator(){this.affiliation=new r.a,this.affiliation.status=n.m.ACTIVE,this.affiliation.member=!0,this.affiliationForm.markAsUntouched(),this.affiliationForm.markAsPristine()}setValue(e){return"Yes"===e||!0===e}compareMember(e,t){if(e)return e===(t?"Yes":"No")}delete(){m.a.fire({text:"Are you sure you want to delete this brand?",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Confirm"}).then(e=>{e.value&&this.apiService.deleteById(n.n.affiliation,this.affiliation.id).subscribe(()=>{this.sweetAlertService.customSuccessMessage("Affiliation successfully deleted."),this.resetFormValidator(),this.getList()})})}}return e.\u0275fac=function(t){return new(t||e)(f["\u0275\u0275directiveInject"](c.b),f["\u0275\u0275directiveInject"](o.g),f["\u0275\u0275directiveInject"](c.e))},e.\u0275cmp=f["\u0275\u0275defineComponent"]({type:e,selectors:[["app-affiliation"]],viewQuery:function(e,t){var i;1&e&&f["\u0275\u0275viewQuery"](s.a,!0),2&e&&f["\u0275\u0275queryRefresh"](i=f["\u0275\u0275loadQuery"]())&&(t.formListComponent=i.first)},decls:26,vars:10,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12","title"],[3,"formGroup"],["appearance","outline",1,"col-md-8"],[1,"required-field"],["matInput","","name","description","formControlName","description",3,"ngModel","ngModelChange"],["appearance","outline",1,"col-md-4"],["name","member","formControlName","member",3,"ngModel","compareWith","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["class","col-md-4","appearance","outline",4,"ngIf"],[3,"childObject","childForm","saveFunction","updateFunction","cancelFunction","deleteFunction"],[3,"dataSource","displayedColumns","selectInListFunction"],[3,"value"],["name","status","formControlName","status",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"form"),f["\u0275\u0275elementStart"](1,"div",0),f["\u0275\u0275elementStart"](2,"div",1),f["\u0275\u0275elementStart"](3,"div",2),f["\u0275\u0275elementStart"](4,"mat-label"),f["\u0275\u0275elementStart"](5,"mat-icon"),f["\u0275\u0275text"](6,"groups"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275text"](7," Member's Affiliation "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275element"](8,"hr"),f["\u0275\u0275elementStart"](9,"form",3),f["\u0275\u0275elementStart"](10,"div",1),f["\u0275\u0275elementStart"](11,"mat-form-field",4),f["\u0275\u0275elementStart"](12,"mat-label"),f["\u0275\u0275text"](13,"Member's Affiliation "),f["\u0275\u0275elementStart"](14,"span",5),f["\u0275\u0275text"](15,"*"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](16,"input",6),f["\u0275\u0275listener"]("ngModelChange",(function(e){return t.affiliation.description=e})),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](17,"mat-form-field",7),f["\u0275\u0275elementStart"](18,"mat-label"),f["\u0275\u0275text"](19,"Member"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](20,"mat-select",8),f["\u0275\u0275listener"]("ngModelChange",(function(e){return t.affiliation.member=e})),f["\u0275\u0275template"](21,C,2,2,"mat-option",9),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275template"](22,F,5,2,"mat-form-field",10),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](23,"app-form-action-buttons",11),f["\u0275\u0275listener"]("saveFunction",(function(){return t.save()}))("updateFunction",(function(){return t.confirmUpdate()}))("cancelFunction",(function(){return t.resetFormValidator()}))("deleteFunction",(function(){return t.delete()})),f["\u0275\u0275elementEnd"](),f["\u0275\u0275element"](24,"br"),f["\u0275\u0275elementStart"](25,"app-form-list",12),f["\u0275\u0275listener"]("selectInListFunction",(function(){return t.getAffiliation()})),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()),2&e&&(f["\u0275\u0275advance"](9),f["\u0275\u0275property"]("formGroup",t.affiliationForm),f["\u0275\u0275advance"](7),f["\u0275\u0275property"]("ngModel",t.affiliation.description),f["\u0275\u0275advance"](4),f["\u0275\u0275property"]("ngModel",t.affiliation.member)("compareWith",t.compareMember),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("ngForOf",t.yesNoList),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("ngIf",t.affiliation.id),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("childObject",t.affiliation)("childForm",t.affiliationForm),f["\u0275\u0275advance"](2),f["\u0275\u0275property"]("dataSource",t.dataSource)("displayedColumns",t.displayedColumns))},directives:[o.J,o.u,o.v,d.g,u.a,o.l,d.c,p.b,o.d,o.t,o.j,h.a,v.s,v.t,g.a,b.a,S.m],styles:[""]}),e})()}}]);