!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{Hjha:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i=o((function e(){r(this,e)}))},gSGB:function(t,n,i){"use strict";i.r(n),i.d(n,"TypeOfMediumExecutionModule",(function(){return L}));var a=i("ofXK"),l=i("tyNb"),u=i("3Pt+"),c=i("+0xr"),s=i("3swC"),d=i("M0ag"),p=i("Hjha"),m=i("PSD3"),f=i.n(m),y=i("fXoL"),v=i("dJ3e"),E=i("kmnG"),h=i("qFsG"),x=i("d3UM"),S=i("1jcm"),g=i("TPGS"),O=i("DeKZ"),b=i("FKr1");function F(e,t){if(1&e&&(y["\u0275\u0275elementStart"](0,"mat-option",17),y["\u0275\u0275text"](1),y["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;y["\u0275\u0275property"]("value",n.status),y["\u0275\u0275advance"](1),y["\u0275\u0275textInterpolate1"](" ",n.status," ")}}var w,C,M,A=function(){return{standalone:!0}},T=[{path:"",component:(w=function(){function t(n,o,i){r(this,t),this.apiService=n,this.formBuilder=o,this.sweetAlertService=i,this.displayedColumns=["typeOfExecution","applyForTOA","applyForS2","status"],this.statusList=e(d.A),this.typeOfExecution=new p.a,this.typeOfExecutionList=[]}return o(t,[{key:"ngOnInit",value:function(){this.getList(),this.setFormValidator()}},{key:"getList",value:function(){var e=this;this.apiService.findAll(d.n.typeOfExecutions).subscribe((function(t){e.typeOfExecutionList=t.responseData.data,e.dataSource=new c.p(t.responseData.data),e.dataSource.paginator=e.formListComponent.paginator,e.dataSource.sort=e.formListComponent.sort}))}},{key:"save",value:function(){var e=this;this.apiService.save(d.n.typeOfExecutions,this.typeOfExecution).subscribe((function(t){void 0!==t&&e.sweetAlertService.success(t)}),(function(t){e.sweetAlertService.error(t)}),(function(){e.resetFormValidator(),e.getList()}))}},{key:"getTypeOfExecution",value:function(){var e=this;this.apiService.findById(d.n.typeOfExecutions,this.formListComponent.idForUpdate).subscribe((function(t){t&&(e.typeOfExecution=t.responseData.data,console.log(t.responseData.data))}))}},{key:"update",value:function(){var e=this;this.apiService.update(d.n.typeOfExecutions,this.typeOfExecution).subscribe((function(t){void 0!==t&&e.sweetAlertService.success(t)}),(function(t){e.sweetAlertService.error(t)}),(function(){e.resetFormValidator(),e.getList()}))}},{key:"setFormValidator",value:function(){this.typeOfExecution.status=d.m.ACTIVE,this.typeOfExecutionForm=this.formBuilder.group({typeOfExecution:["",u.H.required],status:[""]})}},{key:"resetFormValidator",value:function(){this.typeOfExecution=new p.a,this.typeOfExecution.status=d.m.ACTIVE,this.typeOfExecutionForm.markAsUntouched(),this.typeOfExecutionForm.markAsPristine()}},{key:"delete",value:function(){var e=this;f.a.fire({text:"Are you sure you want to delete this type of execution?",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Confirm"}).then((function(t){t.value&&e.apiService.deleteById(d.n.typeOfExecutions,e.typeOfExecution.id).subscribe((function(){e.sweetAlertService.customSuccessMessage("Type of execution successfully deleted."),e.resetFormValidator(),e.getList()}))}))}}]),t}(),w.\u0275fac=function(e){return new(e||w)(y["\u0275\u0275directiveInject"](v.b),y["\u0275\u0275directiveInject"](u.g),y["\u0275\u0275directiveInject"](v.e))},w.\u0275cmp=y["\u0275\u0275defineComponent"]({type:w,selectors:[["app-type-of-medium-execution"]],viewQuery:function(e,t){var n;1&e&&y["\u0275\u0275viewQuery"](s.a,!0),2&e&&y["\u0275\u0275queryRefresh"](n=y["\u0275\u0275loadQuery"]())&&(t.formListComponent=n.first)},decls:57,vars:16,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12","title"],[3,"formGroup"],["appearance","outline",1,"col-md-8"],[1,"required-field"],["matInput","","name","typeOfExecution","formControlName","typeOfExecution",3,"ngModel","ngModelChange"],["appearance","outline",1,"col-md-4"],["name","status","formControlName","status",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-2"],[1,"col-md-1"],["name","live","color","warn",3,"ngModel","ngModelOptions","checked","ngModelChange"],[1,"col-md-5"],["name","applyForToa","color","warn",3,"ngModel","ngModelOptions","checked","ngModelChange"],[3,"childObject","childForm","saveFunction","updateFunction","cancelFunction","deleteFunction"],[3,"dataSource","displayedColumns","selectInListFunction"],[3,"value"]],template:function(e,t){1&e&&(y["\u0275\u0275elementStart"](0,"form"),y["\u0275\u0275elementStart"](1,"div",0),y["\u0275\u0275elementStart"](2,"div",1),y["\u0275\u0275elementStart"](3,"div",2),y["\u0275\u0275elementStart"](4,"mat-label"),y["\u0275\u0275text"](5," Type Of Execution "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](6,"hr"),y["\u0275\u0275elementStart"](7,"form",3),y["\u0275\u0275elementStart"](8,"div",1),y["\u0275\u0275elementStart"](9,"mat-form-field",4),y["\u0275\u0275elementStart"](10,"mat-label"),y["\u0275\u0275text"](11,"Type Of Execution "),y["\u0275\u0275elementStart"](12,"span",5),y["\u0275\u0275text"](13,"*"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](14,"input",6),y["\u0275\u0275listener"]("ngModelChange",(function(e){return t.typeOfExecution.typeOfExecution=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](15,"mat-form-field",7),y["\u0275\u0275elementStart"](16,"mat-label"),y["\u0275\u0275text"](17,"Status"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](18,"mat-select",8),y["\u0275\u0275listener"]("ngModelChange",(function(e){return t.typeOfExecution.status=e})),y["\u0275\u0275template"](19,F,2,2,"mat-option",9),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](20,"div",1),y["\u0275\u0275element"](21,"div",10),y["\u0275\u0275elementStart"](22,"div",11),y["\u0275\u0275elementStart"](23,"b"),y["\u0275\u0275text"](24,"Live"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](25,"div",11),y["\u0275\u0275elementStart"](26,"mat-slide-toggle",12),y["\u0275\u0275listener"]("ngModelChange",(function(e){return t.typeOfExecution.live=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](27,"div",13),y["\u0275\u0275elementStart"](28,"b"),y["\u0275\u0275text"](29,"True:"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275text"](30," The application is for S1 only."),y["\u0275\u0275element"](31,"br"),y["\u0275\u0275elementStart"](32,"b"),y["\u0275\u0275text"](33,"False:"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275text"](34," Can apply for Special Clearing Request/S2 Application. "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](35,"div",10),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](36,"div",1),y["\u0275\u0275element"](37,"br"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](38,"div",1),y["\u0275\u0275element"](39,"div",10),y["\u0275\u0275elementStart"](40,"div",11),y["\u0275\u0275elementStart"](41,"b"),y["\u0275\u0275text"](42,"Apply for TOA"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](43,"div",11),y["\u0275\u0275elementStart"](44,"mat-slide-toggle",14),y["\u0275\u0275listener"]("ngModelChange",(function(e){return t.typeOfExecution.applyForToa=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](45,"div",13),y["\u0275\u0275elementStart"](46,"b"),y["\u0275\u0275text"](47,"True:"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275text"](48," The application can only apply for TOA."),y["\u0275\u0275element"](49,"br"),y["\u0275\u0275elementStart"](50,"b"),y["\u0275\u0275text"](51,"False:"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275text"](52," Unable to apply for TOA. "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](53,"div",10),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](54,"app-form-action-buttons",15),y["\u0275\u0275listener"]("saveFunction",(function(){return t.save()}))("updateFunction",(function(){return t.update()}))("cancelFunction",(function(){return t.resetFormValidator()}))("deleteFunction",(function(){return t.delete()})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](55,"br"),y["\u0275\u0275elementStart"](56,"app-form-list",16),y["\u0275\u0275listener"]("selectInListFunction",(function(){return t.getTypeOfExecution()})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()),2&e&&(y["\u0275\u0275advance"](7),y["\u0275\u0275property"]("formGroup",t.typeOfExecutionForm),y["\u0275\u0275advance"](7),y["\u0275\u0275property"]("ngModel",t.typeOfExecution.typeOfExecution),y["\u0275\u0275advance"](4),y["\u0275\u0275property"]("ngModel",t.typeOfExecution.status),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngForOf",t.statusList),y["\u0275\u0275advance"](7),y["\u0275\u0275property"]("ngModel",t.typeOfExecution.live)("ngModelOptions",y["\u0275\u0275pureFunction0"](14,A))("checked",null==t.typeOfExecution?null:t.typeOfExecution.live),y["\u0275\u0275advance"](18),y["\u0275\u0275property"]("ngModel",t.typeOfExecution.applyForToa)("ngModelOptions",y["\u0275\u0275pureFunction0"](15,A))("checked",null==t.typeOfExecution?null:t.typeOfExecution.applyForToa),y["\u0275\u0275advance"](10),y["\u0275\u0275property"]("childObject",t.typeOfExecution)("childForm",t.typeOfExecutionForm),y["\u0275\u0275advance"](2),y["\u0275\u0275property"]("dataSource",t.dataSource)("displayedColumns",t.displayedColumns))},directives:[u.J,u.u,u.v,E.g,u.l,E.c,h.b,u.d,u.t,u.j,x.a,a.s,S.a,u.w,g.a,O.a,b.m],styles:[""]}),w)}],k=((C=o((function e(){r(this,e)}))).\u0275mod=y["\u0275\u0275defineNgModule"]({type:C}),C.\u0275inj=y["\u0275\u0275defineInjector"]({factory:function(e){return new(e||C)},imports:[[l.f.forChild(T)],l.f]}),C),j=i("7Tf7"),I=i("tk/3"),L=((M=o((function e(){r(this,e)}))).\u0275mod=y["\u0275\u0275defineNgModule"]({type:M}),M.\u0275inj=y["\u0275\u0275defineInjector"]({factory:function(e){return new(e||M)},imports:[[a.c,k,I.b,u.D,d.k,j.a]]}),M)}}])}();