(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"L/mX":function(e,r,t){"use strict";t.r(r),t.d(r,"ScreenerReviewerPairModule",(function(){return E}));var n=t("ofXK"),i=t("tyNb"),s=t("3Pt+"),a=t("+0xr"),o=t("3swC"),c=t("M0ag"),l=t("+iQW"),m=t("PSD3"),d=t.n(m),u=t("fXoL"),v=t("dJ3e"),p=t("kmnG"),h=t("d3UM"),w=t("TPGS"),f=t("DeKZ"),S=t("FKr1");function R(e,r){if(1&e&&(u["\u0275\u0275elementStart"](0,"mat-option",10),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&e){const e=r.$implicit;u["\u0275\u0275property"]("value",e),u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate2"](" ",null==e?null:e.firstName," ",null==e?null:e.lastName," ")}}function g(e,r){if(1&e&&(u["\u0275\u0275elementStart"](0,"mat-option",10),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&e){const e=r.$implicit;u["\u0275\u0275property"]("value",e),u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate2"](" ",null==e?null:e.firstName," ",null==e?null:e.lastName," ")}}const F=[{path:"",component:(()=>{class e{constructor(e,r,t){this.apiService=e,this.formBuilder=r,this.sweetAlertService=t,this.displayedColumns=["screenerName","reviewerName"],this.screenerList=[],this.reviewerList=[],this.screenerReviewerPair=new l.a,this.screenerReviewerPairList=[]}ngOnInit(){this.getList(),this.setFormValidator(),this.getScreenerAndReviewerForList()}getList(){this.apiService.findAll(c.n.screenerReviewerPairs).subscribe(e=>{this.screenerReviewerPairList=e.responseData.data,this.dataSource=new a.p(e.responseData.data),this.dataSource.paginator=this.formListComponent.paginator,this.dataSource.sort=this.formListComponent.sort}),this.getScreenerAndReviewerForList()}save(){this.apiService.save(c.n.screenerReviewerPairs,this.screenerReviewerPair).subscribe(e=>{void 0!==e&&(console.log(e),this.sweetAlertService.success(e))},e=>{this.sweetAlertService.error(e)},()=>{this.resetFormValidator(),this.getList(),this.getScreenerAndReviewerForList()})}getScreenerReviewerPair(){this.apiService.findById(c.n.screenerReviewerPairs,this.formListComponent.idForUpdate).subscribe(e=>{e&&(this.screenerReviewerPair=e.responseData.data,console.log(this.screenerReviewerPair),console.log(this.screenerList.filter(e=>e.username===this.screenerReviewerPair.screener.username)[0]),console.log(this.screenerReviewerPair.screener))})}update(){this.apiService.update(c.n.screenerReviewerPairs,this.screenerReviewerPair).subscribe(e=>{void 0!==e&&this.sweetAlertService.success(e)},e=>{this.sweetAlertService.error(e)},()=>{this.resetFormValidator(),this.getList(),this.getScreenerAndReviewerForList()})}setFormValidator(){this.screenerReviewerPairForm=this.formBuilder.group({screenerName:["",s.H.required],reviewerName:["",s.H.required]})}resetFormValidator(){this.screenerReviewerPair=new l.a,this.screenerReviewerPairForm.markAsUntouched(),this.screenerReviewerPairForm.markAsPristine()}getScreenerAndReviewerForList(){this.apiService.findAll(c.n.userAccount).subscribe(e=>{this.screenerList=e.responseData.data.filter(e=>e.userRole.name===c.F.ROLE_SCREENER&&e.status===c.m.ACTIVE),this.reviewerList=e.responseData.data.filter(e=>e.userRole.name===c.F.ROLE_REVIEWER&&e.status===c.m.ACTIVE)})}compareUser(e,r){if(e&&r)return e.username===r.username}delete(){d.a.fire({text:"Are you sure you want to delete this screener reviewer pairing?",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Confirm"}).then(e=>{e.value&&this.apiService.deleteById(c.n.screenerReviewerPairs,this.screenerReviewerPair.id).subscribe(()=>{this.sweetAlertService.customSuccessMessage("Screener reviewer pairing successfully deleted."),this.resetFormValidator(),this.getList()})})}}return e.\u0275fac=function(r){return new(r||e)(u["\u0275\u0275directiveInject"](v.b),u["\u0275\u0275directiveInject"](s.g),u["\u0275\u0275directiveInject"](v.e))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["app-screener-reviewer-pair"]],viewQuery:function(e,r){var t;1&e&&u["\u0275\u0275viewQuery"](o.a,!0),2&e&&u["\u0275\u0275queryRefresh"](t=u["\u0275\u0275loadQuery"]())&&(r.formListComponent=t.first)},decls:22,vars:11,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12","title"],[3,"formGroup"],["appearance","outline",1,"col-md-6"],["name","screenerName","formControlName","screenerName",3,"ngModel","compareWith","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["name","reviewerName","formControlName","reviewerName",3,"ngModel","compareWith","ngModelChange"],[3,"childObject","childForm","saveFunction","updateFunction","cancelFunction","deleteFunction"],[3,"dataSource","displayedColumns","selectInListFunction"],[3,"value"]],template:function(e,r){1&e&&(u["\u0275\u0275elementStart"](0,"form"),u["\u0275\u0275elementStart"](1,"div",0),u["\u0275\u0275elementStart"](2,"div",1),u["\u0275\u0275elementStart"](3,"div",2),u["\u0275\u0275elementStart"](4,"mat-label"),u["\u0275\u0275text"](5," Screener-Reviewer Pair "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](6,"hr"),u["\u0275\u0275elementStart"](7,"form",3),u["\u0275\u0275elementStart"](8,"div",1),u["\u0275\u0275elementStart"](9,"mat-form-field",4),u["\u0275\u0275elementStart"](10,"mat-label"),u["\u0275\u0275text"](11,"Screener Name"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](12,"mat-select",5),u["\u0275\u0275listener"]("ngModelChange",(function(e){return r.screenerReviewerPair.screener=e})),u["\u0275\u0275template"](13,R,2,3,"mat-option",6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](14,"mat-form-field",4),u["\u0275\u0275elementStart"](15,"mat-label"),u["\u0275\u0275text"](16,"Reviewer Name"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](17,"mat-select",7),u["\u0275\u0275listener"]("ngModelChange",(function(e){return r.screenerReviewerPair.reviewer=e})),u["\u0275\u0275template"](18,g,2,3,"mat-option",6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](19,"app-form-action-buttons",8),u["\u0275\u0275listener"]("saveFunction",(function(){return r.save()}))("updateFunction",(function(){return r.update()}))("cancelFunction",(function(){return r.resetFormValidator()}))("deleteFunction",(function(){return r.delete()})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](20,"br"),u["\u0275\u0275elementStart"](21,"app-form-list",9),u["\u0275\u0275listener"]("selectInListFunction",(function(){return r.getScreenerReviewerPair()})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](7),u["\u0275\u0275property"]("formGroup",r.screenerReviewerPairForm),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("ngModel",r.screenerReviewerPair.screener)("compareWith",r.compareUser),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngForOf",r.screenerList),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("ngModel",r.screenerReviewerPair.reviewer)("compareWith",r.compareUser),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngForOf",r.reviewerList),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("childObject",r.screenerReviewerPair)("childForm",r.screenerReviewerPairForm),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("dataSource",r.dataSource)("displayedColumns",r.displayedColumns))},directives:[s.J,s.u,s.v,p.g,s.l,p.c,h.a,s.t,s.j,n.s,w.a,f.a,S.m],styles:[""]}),e})()}];let P=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(r){return new(r||e)},imports:[[i.f.forChild(F)],i.f]}),e})();var y=t("7Tf7"),L=t("tk/3");let E=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(r){return new(r||e)},imports:[[n.c,P,L.b,s.D,c.k,y.a]]}),e})()}}]);