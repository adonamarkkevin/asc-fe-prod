!function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{C7lX:function(e,i,a){"use strict";a.r(i),a.d(i,"ApplicationsModule",(function(){return g}));var r,o,l=a("ylsH"),p=a("ofXK"),s=a("tyNb"),c=a("M0ag"),d=a("fXoL"),u=[{path:c.E.S1_APPLICATION,loadChildren:function(){return Promise.all([a.e(1),a.e(53)]).then(a.bind(null,"J91h")).then((function(e){return e.S1ApplicationModule}))}},{path:c.E.S2_APPLICATION,loadChildren:function(){return a.e(54).then(a.bind(null,"A0SB")).then((function(e){return e.S2ApplicationModule}))}},{path:c.E.SCHEDULE_OF_FEES_SINGLE_APPLICATION,loadChildren:function(){return a.e(23).then(a.bind(null,"T30m")).then((function(e){return e.SingleApplicationModule}))}},{path:c.E.SCHEDULE_OF_FEES_SINGLE_APPLICATION+"/:id",loadChildren:function(){return a.e(23).then(a.bind(null,"T30m")).then((function(e){return e.SingleApplicationModule}))}},{path:c.E.SCHEDULE_OF_FEES_MULTIPLE_APPLICATIONS,loadChildren:function(){return a.e(18).then(a.bind(null,"VOEw")).then((function(e){return e.MultipleApplicationsModule}))}},{path:c.E.SCHEDULE_OF_FEES_MULTIPLE_APPLICATIONS+"/:id",loadChildren:function(){return a.e(18).then(a.bind(null,"VOEw")).then((function(e){return e.MultipleApplicationsModule}))}},{path:c.E.SCHEDULE_OF_FEES_SPECIAL_APPLICATIONS,loadChildren:function(){return a.e(24).then(a.bind(null,"Bysl")).then((function(e){return e.SpecialApplicationsModule}))}},{path:c.E.ACCOUNTS_PAYABLE,loadChildren:function(){return a.e(55).then(a.bind(null,"UcjW")).then((function(e){return e.AccountsPayableModule}))}},{path:c.E.SCHEDULE_OF_FEES_SPECIAL_APPLICATIONS+"/:id",loadChildren:function(){return a.e(24).then(a.bind(null,"Bysl")).then((function(e){return e.SpecialApplicationsModule}))}},{path:c.E.APPLICATION_REASSIGNMENT,loadChildren:function(){return Promise.resolve().then(a.bind(null,"zdBp")).then((function(e){return e.ReassignmentModule}))}}],m=((r=t((function e(){n(this,e)}))).\u0275mod=d["\u0275\u0275defineNgModule"]({type:r}),r.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||r)},imports:[[s.f.forChild(u)],s.f]}),r),f=a("Wf2x"),A=a("zdBp"),g=((o=t((function e(){n(this,e)}))).\u0275mod=d["\u0275\u0275defineNgModule"]({type:o}),o.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||o)},imports:[[p.c,m,c.k,f.a,A.ReassignmentModule,l.a]]}),o)},Wf2x:function(e,t,n){"use strict";n("tlev"),n("N5VM");var i=n("9Ls8");n.d(t,"a",(function(){return i.AddPaymentModule})),n("5iOt"),n("O1SJ")},zdBp:function(e,i,a){"use strict";a.r(i),a.d(i,"ReassignmentModule",(function(){return K}));var r=a("ofXK"),o=a("tyNb"),l=a("+0xr"),p=a("3swC"),s=a("sKXY"),c=a("M0ag"),d=a("fXoL"),u=a("dJ3e"),m=a("3Pt+"),f=a("JqCM"),A=a("kmnG"),g=a("NFeN"),S=a("wZkO"),C=a("qFsG"),h=a("d3UM"),E=a("TPGS"),v=a("FKr1"),y=a("DeKZ");function w(e,t){1&e&&d["\u0275\u0275elementContainer"](0)}function x(e,t){1&e&&d["\u0275\u0275elementContainer"](0)}function L(e,t){1&e&&d["\u0275\u0275elementContainer"](0)}function I(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"span"),d["\u0275\u0275template"](1,L,1,0,"ng-container",5),d["\u0275\u0275elementEnd"]()),2&e){d["\u0275\u0275nextContext"]();var n=d["\u0275\u0275reference"](21);d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngTemplateOutlet",n)}}function b(e,t){1&e&&d["\u0275\u0275elementContainer"](0)}function O(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"span"),d["\u0275\u0275template"](1,b,1,0,"ng-container",5),d["\u0275\u0275elementEnd"]()),2&e){d["\u0275\u0275nextContext"]();var n=d["\u0275\u0275reference"](23);d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngTemplateOutlet",n)}}function F(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"input",22),d["\u0275\u0275listener"]("ngModelChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"](3).s1Application.referenceCode=e})),d["\u0275\u0275elementEnd"]()}if(2&e){var i=d["\u0275\u0275nextContext"](3);d["\u0275\u0275property"]("ngModel",i.s1Application.referenceCode)}}function M(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"input",22),d["\u0275\u0275listener"]("ngModelChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"](3).s1Application.referenceCodeRejected=e})),d["\u0275\u0275elementEnd"]()}if(2&e){var i=d["\u0275\u0275nextContext"](3);d["\u0275\u0275property"]("ngModel",i.s1Application.referenceCodeRejected)}}function N(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"mat-option",23),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;d["\u0275\u0275property"]("value",n),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate2"](" ",null==n?null:n.firstName," ",null==n?null:n.lastName," ")}}function T(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"form",13),d["\u0275\u0275elementStart"](1,"div",1),d["\u0275\u0275elementStart"](2,"mat-form-field",14),d["\u0275\u0275elementStart"](3,"mat-label"),d["\u0275\u0275text"](4,"Reference Code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](5,F,1,1,"input",15),d["\u0275\u0275template"](6,M,1,1,"input",15),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"mat-form-field",14),d["\u0275\u0275elementStart"](8,"mat-label"),d["\u0275\u0275text"](9,"Application Owner"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"input",16),d["\u0275\u0275listener"]("ngModelChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"](2).applicationOwnerName=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"mat-form-field",17),d["\u0275\u0275elementStart"](12,"mat-label"),d["\u0275\u0275text"](13,"AD Title"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"input",18),d["\u0275\u0275listener"]("ngModelChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"](2).s1Application.adTitle=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](15,"mat-form-field",14),d["\u0275\u0275elementStart"](16,"mat-label"),d["\u0275\u0275text"](17,"Assigned User"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](18,"mat-select",19),d["\u0275\u0275listener"]("ngModelChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"](2).s1Application.assignedUser=e})),d["\u0275\u0275template"](19,N,2,3,"mat-option",20),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](20,"app-form-action-buttons",21),d["\u0275\u0275listener"]("updateFunction",(function(){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"](2).update()}))("cancelFunction",(function(){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"](2).resetFormValidator()})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){var i=d["\u0275\u0275nextContext"](2);d["\u0275\u0275property"]("formGroup",i.s1ApplicationForm),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("ngIf","S1_APPLICATION_REJECTED"!==(null==i.s1Application?null:i.s1Application.internalStatus)),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf","S1_APPLICATION_REJECTED"===(null==i.s1Application?null:i.s1Application.internalStatus)),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("ngModel",i.applicationOwnerName),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("ngModel",i.s1Application.adTitle),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("ngModel",i.s1Application.assignedUser)("compareWith",i.compareAssignedUser),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",i.userList),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("childObject",i.s1Application)("childForm",i.s1ApplicationForm)}}function P(e,t){if(1&e&&d["\u0275\u0275template"](0,T,21,10,"form",12),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("ngIf",null==n.s1Application?null:n.s1Application.id)}}function _(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"input",22),d["\u0275\u0275listener"]("ngModelChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"](3).s2Application.applicationForm.referenceCode=e})),d["\u0275\u0275elementEnd"]()}if(2&e){var i=d["\u0275\u0275nextContext"](3);d["\u0275\u0275property"]("ngModel",i.s2Application.applicationForm.referenceCode)}}function U(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"input",22),d["\u0275\u0275listener"]("ngModelChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"](3).s1Application.referenceCodeRejected=e})),d["\u0275\u0275elementEnd"]()}if(2&e){var i=d["\u0275\u0275nextContext"](3);d["\u0275\u0275property"]("ngModel",i.s1Application.referenceCodeRejected)}}function D(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"mat-option",23),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;d["\u0275\u0275property"]("value",n),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate2"](" ",null==n?null:n.firstName," ",null==n?null:n.lastName," ")}}function V(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"form",13),d["\u0275\u0275elementStart"](1,"div",1),d["\u0275\u0275elementStart"](2,"mat-form-field",14),d["\u0275\u0275elementStart"](3,"mat-label"),d["\u0275\u0275text"](4,"Reference Code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](5,_,1,1,"input",15),d["\u0275\u0275template"](6,U,1,1,"input",15),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"mat-form-field",14),d["\u0275\u0275elementStart"](8,"mat-label"),d["\u0275\u0275text"](9,"Application Owner"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"input",16),d["\u0275\u0275listener"]("ngModelChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"](2).applicationOwnerName=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"mat-form-field",17),d["\u0275\u0275elementStart"](12,"mat-label"),d["\u0275\u0275text"](13,"AD Title"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"input",18),d["\u0275\u0275listener"]("ngModelChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"](2).s2Application.applicationForm.adTitle=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](15,"mat-form-field",14),d["\u0275\u0275elementStart"](16,"mat-label"),d["\u0275\u0275text"](17,"Assigned User"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](18,"mat-select",19),d["\u0275\u0275listener"]("ngModelChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"](2).s2Application.assignedUser=e})),d["\u0275\u0275template"](19,D,2,3,"mat-option",20),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](20,"app-form-action-buttons",21),d["\u0275\u0275listener"]("updateFunction",(function(){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"](2).update()}))("cancelFunction",(function(){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"](2).resetFormValidator()})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){var i=d["\u0275\u0275nextContext"](2);d["\u0275\u0275property"]("formGroup",i.s1ApplicationForm),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("ngIf","S1_APPLICATION_REJECTED"!==(null==i.s2Application?null:i.s2Application.internalStatus)),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf","S1_APPLICATION_REJECTED"===(null==i.s2Application?null:i.s2Application.internalStatus)),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("ngModel",i.applicationOwnerName),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("ngModel",i.s2Application.applicationForm.adTitle),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("ngModel",i.s2Application.assignedUser)("compareWith",i.compareAssignedUser),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",i.userList),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("childObject",i.s2Application)("childForm",i.s1ApplicationForm)}}function R(e,t){if(1&e&&d["\u0275\u0275template"](0,V,21,10,"form",12),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("ngIf",null==n.s2Application?null:n.s2Application.id)}}function j(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275element"](0,"br"),d["\u0275\u0275elementStart"](1,"app-form-list",24),d["\u0275\u0275listener"]("selectInListFunction",(function(){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().getS1Application()})),d["\u0275\u0275elementEnd"]()}if(2&e){var i=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("dataSource",i.s1ApplicationDataSource)("displayedColumns",i.s1ApplicationDisplayedColumns)}}function k(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275element"](0,"br"),d["\u0275\u0275elementStart"](1,"app-form-list",24),d["\u0275\u0275listener"]("selectInListFunction",(function(){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().getS2Application()})),d["\u0275\u0275elementEnd"]()}if(2&e){var i=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("dataSource",i.s2ApplicationDataSource)("displayedColumns",i.s2ApplicationDisplayedColumns)}}var G,B,J,H=[{path:"",component:(G=function(){function e(t,i,a,r){n(this,e),this.apiService=t,this.formBuilder=i,this.sweetAlertService=a,this.spinner=r,this.s1Application=new s.q,this.s2Application=new s.r,this.userList=[],this.s1ApplicationList=[],this.s1ApplicationDisplayedColumns=["referenceCode","adTitle","applicationOwner","assignedEncoder","assignedAdSpecialist","assignedScreener","assignedReviewer","assignedUser"],this.s2ApplicationList=[],this.s2ApplicationDisplayedColumns=["referenceCode","adTitle","applicationOwner","assignedEncoder","assignedAdSpecialist","assignedUser"],this.applicationOwnerName="",this.displayedContent="S1"}return t(e,[{key:"ngOnInit",value:function(){this.getS1ApplicationList(),this.setFormValidator(),this.getUserList()}},{key:"getS1ApplicationList",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"S1";this.spinner.show(),"S1"===t?this.apiService.findAll(c.n.admin).subscribe((function(t){e.s1ApplicationList=t.responseData.data,e.s1ApplicationList=e.s1ApplicationList.filter((function(e){return!e.appliedS2})),e.s1ApplicationDataSource=new l.p(e.s1ApplicationList),e.s1ApplicationDataSource.paginator=e.formListComponent.paginator,e.s1ApplicationDataSource.sort=e.formListComponent.sort}),(function(t){console.error(t),e.spinner.hide()}),(function(){e.spinner.hide()})):"S2"===t&&this.apiService.findAll(c.n.s2Application).subscribe((function(t){e.s2ApplicationList=t.responseData.data,e.s2ApplicationDataSource=new l.p(e.s2ApplicationList),e.s2ApplicationDataSource.paginator=e.formListComponent.paginator,e.s2ApplicationDataSource.sort=e.formListComponent.sort}),(function(t){console.error(t),e.spinner.hide()}),(function(){e.spinner.hide()}))}},{key:"getS1Application",value:function(){var e=this;this.apiService.findById(c.n.applicationForm,this.formListComponent.idForUpdate).subscribe((function(t){t&&(e.s1Application=t.responseData.data,e.applicationOwnerName=e.s1Application.applicationOwner?e.s1Application.applicationOwner.lastName+", "+e.s1Application.applicationOwner.firstName:"",e.getUserList(e.s1Application.assignedUser?e.s1Application.assignedUser.userRole.name:"N/A"))}))}},{key:"getS2Application",value:function(){var e=this;this.apiService.findById(c.n.applicationFormS2,this.formListComponent.idForUpdate).subscribe((function(t){t&&(e.s2Application=t.responseData.data,e.s2Application.applicationForm&&(e.applicationOwnerName=e.s2Application.applicationForm.applicationOwner?e.s2Application.applicationForm.applicationOwner.lastName+", "+e.s2Application.applicationForm.applicationOwner.firstName:""),e.getUserList(e.s2Application.assignedUser?e.s2Application.assignedUser.userRole.name:"N/A"))}))}},{key:"update",value:function(){var e=this;this.spinner.show();var t,n="";"S1"===this.displayedContent?(n=c.n.applicationReassignment,t=this.s1Application):"S2"===this.displayedContent&&(n=c.n.s2ApplicationReassignment,"ASSIGN_TO_ENCODER"===this.s2Application.actionStatus?this.s2Application.assignedEncoder=this.s2Application.assignedUser:"ASSIGN_TO_ADSPE"===this.s2Application.actionStatus&&(this.s2Application.assignedAdSpecialist=this.s2Application.assignedUser),t=this.s2Application),this.apiService.save(n,t).subscribe((function(t){t&&(e.spinner.hide(),e.sweetAlertService.success(t))}),(function(t){e.spinner.hide(),e.sweetAlertService.error(t)}),(function(){e.spinner.hide(),e.getUserList(),e.resetFormValidator(),"S1"===e.displayedContent?e.getS1ApplicationList():"S2"===e.displayedContent&&e.getS1ApplicationList("S2")}))}},{key:"setFormValidator",value:function(){this.s1ApplicationForm=this.formBuilder.group({referenceCode:[""],adTitle:[""],applicationOwner:[""],assignedAdSpecialist:[""],assignedEncoder:[""],assignedReviewer:[""],assignedScreener:[""],assignedUser:[""]})}},{key:"resetFormValidator",value:function(){this.s1Application=new s.q,this.s2Application=new s.r,this.s1ApplicationForm.markAsUntouched(),this.s1ApplicationForm.markAsPristine()}},{key:"getUserList",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.apiService.findAll(c.n.userAccount).subscribe((function(n){e.userList=n.responseData.data,e.userList=e.userList.filter((function(e){var t;return(null===(t=null==e?void 0:e.userRole)||void 0===t?void 0:t.name)!==c.F.ROLE_APPLICANT})),t&&(e.userList=e.userList.filter((function(e){var n;return(null===(n=null==e?void 0:e.userRole)||void 0===n?void 0:n.name)===t})))}))}},{key:"compareAssignedUser",value:function(e,t){if(e&&t)return e.id===t.id}},{key:"changeTab",value:function(e){e.tab&&(this.displayedContent=e.tab.textLabel),0===e.index?this.getS1ApplicationList():1===e.index&&this.getS1ApplicationList("S2")}}]),e}(),G.\u0275fac=function(e){return new(e||G)(d["\u0275\u0275directiveInject"](u.b),d["\u0275\u0275directiveInject"](m.g),d["\u0275\u0275directiveInject"](u.e),d["\u0275\u0275directiveInject"](f.c))},G.\u0275cmp=d["\u0275\u0275defineComponent"]({type:G,selectors:[["app-reassignment"]],viewQuery:function(e,t){var n;1&e&&d["\u0275\u0275viewQuery"](p.a,!0),2&e&&d["\u0275\u0275queryRefresh"](n=d["\u0275\u0275loadQuery"]())&&(t.formListComponent=n.first)},decls:24,vars:4,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12","title"],["mat-align-tabs","start",3,"selectedTabChange"],["label","S1"],[4,"ngTemplateOutlet"],["label","S2"],[4,"ngIf"],["s1ApplicationFormDisplay",""],["s2ApplicationFormDisplay",""],["s1ApplicationList",""],["s2ApplicationList",""],[3,"formGroup",4,"ngIf"],[3,"formGroup"],["appearance","outline",1,"col-md-6"],["matInput","","name","referenceCode","formControlName","referenceCode","readonly","",3,"ngModel","ngModelChange",4,"ngIf"],["matInput","","name","applicationOwner","formControlName","applicationOwner","readonly","",3,"ngModel","ngModelChange"],["appearance","outline",1,"col-md-12"],["matInput","","name","adTitle","formControlName","adTitle","readonly","",3,"ngModel","ngModelChange"],["name","assignedUser","formControlName","assignedUser",3,"ngModel","compareWith","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"childObject","childForm","updateFunction","cancelFunction"],["matInput","","name","referenceCode","formControlName","referenceCode","readonly","",3,"ngModel","ngModelChange"],[3,"value"],[3,"dataSource","displayedColumns","selectInListFunction"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"form"),d["\u0275\u0275elementStart"](1,"div",0),d["\u0275\u0275elementStart"](2,"div",1),d["\u0275\u0275elementStart"](3,"div",2),d["\u0275\u0275elementStart"](4,"mat-label"),d["\u0275\u0275elementStart"](5,"mat-icon"),d["\u0275\u0275text"](6,"view_list"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](7," Application Reassignment "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](8,"hr"),d["\u0275\u0275elementStart"](9,"mat-tab-group",3),d["\u0275\u0275listener"]("selectedTabChange",(function(e){return t.changeTab(e)})),d["\u0275\u0275elementStart"](10,"mat-tab",4),d["\u0275\u0275template"](11,w,1,0,"ng-container",5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"mat-tab",6),d["\u0275\u0275template"](13,x,1,0,"ng-container",5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](14,I,2,1,"span",7),d["\u0275\u0275template"](15,O,2,1,"span",7),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](16,P,1,1,"ng-template",null,8,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275template"](18,R,1,1,"ng-template",null,9,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275template"](20,j,2,2,"ng-template",null,10,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275template"](22,k,2,2,"ng-template",null,11,d["\u0275\u0275templateRefExtractor"])),2&e){var n=d["\u0275\u0275reference"](17),i=d["\u0275\u0275reference"](19);d["\u0275\u0275advance"](11),d["\u0275\u0275property"]("ngTemplateOutlet",n),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngTemplateOutlet",i),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf","S1"===t.displayedContent),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf","S2"===t.displayedContent)}},directives:[m.J,m.u,m.v,A.g,g.a,S.c,S.a,r.A,r.t,m.l,A.c,C.b,m.d,m.t,m.j,h.a,r.s,E.a,v.m,y.a],styles:[""]}),G)}],W=((B=t((function e(){n(this,e)}))).\u0275mod=d["\u0275\u0275defineNgModule"]({type:B}),B.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||B)},imports:[[o.f.forChild(H)],o.f]}),B),X=a("tk/3"),q=a("7Tf7"),K=((J=t((function e(){n(this,e)}))).\u0275mod=d["\u0275\u0275defineNgModule"]({type:J}),J.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||J)},imports:[[r.c,W,X.b,m.D,c.k,q.a]]}),J)}}])}();