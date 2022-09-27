!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{PaDb:function(t,a,r){"use strict";r.r(a),r.d(a,"VoucherBrandMonitoringModule",(function(){return B}));var i=r("ofXK"),o=r("tyNb"),l=r("M9IT"),d=r("Dh3D"),m=r("+0xr"),c=r("M0ag"),u=r("fXoL"),s=r("dJ3e"),p=r("jhN1"),f=r("TMp0"),h=r("3Pt+"),v=r("kmnG"),y=r("NFeN"),S=r("qFsG");function g(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"th",18),u["\u0275\u0275text"](1," Brand Name "),u["\u0275\u0275elementEnd"]())}function b(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"td",19),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",null==n||null==n.brand?null:n.brand.description,"")}}function w(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"th",18),u["\u0275\u0275text"](1," Amount"),u["\u0275\u0275elementEnd"]())}function E(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"td",19),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate"](null==n?null:n.amount)}}function C(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"th",18),u["\u0275\u0275text"](1," Remarks"),u["\u0275\u0275elementEnd"]())}function x(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"td",19),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate"](null==n?null:n.remarks)}}function I(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"th",18),u["\u0275\u0275text"](1," Status"),u["\u0275\u0275elementEnd"]())}function M(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"td",19),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate"](null==n?null:n.status)}}function D(e,t){1&e&&u["\u0275\u0275element"](0,"tr",20)}function P(e,t){1&e&&u["\u0275\u0275element"](0,"tr",21)}var j,k,N,R=function(){return[5,10,20]},L=[{path:"",component:(j=function(){function t(n,a,r,i,o,l){e(this,t),this.router=n,this.apiService=a,this.sweetAlertService=r,this.sanitizer=i,this.fileStorageService=o,this.route=l,this.displayedColumns=["brand","amount","remarks","status"],this.companyList=[],this.brandPenalizedList=[],this.voucherList=[]}return n(t,[{key:"ngOnInit",value:function(){this.brandPenalty=String(this.route.snapshot.paramMap.get("brand")),void 0!==this.brandPenalty?(console.log("+++++++",this.brandPenalty),this.title="Brand Penalty Monitoring",this.getBrandPenaltyMonitoring()):(console.log("-----",this.brandPenalty),this.title="Voucher Penalty Monitoring",this.getVocherMonitoring())}},{key:"getVocherMonitoring",value:function(){var e=this;console.log("VOUCHER MONITORING"),this.apiService.findAll(c.n.voucherMonitoring+"?page=1&size=30").subscribe((function(t){e.voucherList=t.data,e.dataSource=new m.p(e.voucherList),e.dataSource.paginator=e.paginator,e.dataSource.sort=e.sort}))}},{key:"getBrandPenaltyMonitoring",value:function(){var e=this;console.log("BRAND MONITORING"),this.apiService.findAll(c.n.penalizedBrandMonitoring+"/monitoring?page=1&size=30").subscribe((function(t){e.brandPenalizedList=t.data,e.dataSource=new m.p(e.brandPenalizedList),e.dataSource.paginator=e.paginator,e.dataSource.sort=e.sort}))}}]),t}(),j.\u0275fac=function(e){return new(e||j)(u["\u0275\u0275directiveInject"](o.b),u["\u0275\u0275directiveInject"](s.b),u["\u0275\u0275directiveInject"](s.e),u["\u0275\u0275directiveInject"](p.b),u["\u0275\u0275directiveInject"](f.a),u["\u0275\u0275directiveInject"](o.a))},j.\u0275cmp=u["\u0275\u0275defineComponent"]({type:j,selectors:[["app-voucher-brand-monitoring"]],viewQuery:function(e,t){var n;1&e&&(u["\u0275\u0275viewQuery"](l.a,!0),u["\u0275\u0275viewQuery"](d.a,!0),u["\u0275\u0275viewQuery"](m.o,!0)),2&e&&(u["\u0275\u0275queryRefresh"](n=u["\u0275\u0275loadQuery"]())&&(t.paginator=n.first),u["\u0275\u0275queryRefresh"](n=u["\u0275\u0275loadQuery"]())&&(t.sort=n.first),u["\u0275\u0275queryRefresh"](n=u["\u0275\u0275loadQuery"]())&&(t.table=n.first))},decls:33,vars:7,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12","title"],["fxLayout","","fxLayoutAlign","center center",1,"col-md-12"],["appearance","outline",1,"col-md-12"],["matInput","","type","text","placeholder","Company Name"],[1,"mat-elevation-z8","fields"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","brand"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","amount"],["matColumnDef","remarks"],["matColumnDef","status"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"no-record",3,"hidden"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"form"),u["\u0275\u0275elementStart"](1,"div",0),u["\u0275\u0275elementStart"](2,"div",1),u["\u0275\u0275elementStart"](3,"div",2),u["\u0275\u0275elementStart"](4,"mat-label"),u["\u0275\u0275elementStart"](5,"mat-icon"),u["\u0275\u0275text"](6,"view_list"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](7),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](8,"hr"),u["\u0275\u0275element"](9,"br"),u["\u0275\u0275elementStart"](10,"div",3),u["\u0275\u0275elementStart"](11,"mat-form-field",4),u["\u0275\u0275element"](12,"input",5),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](13,"div",6),u["\u0275\u0275elementStart"](14,"table",7),u["\u0275\u0275elementContainerStart"](15,8),u["\u0275\u0275template"](16,g,2,0,"th",9),u["\u0275\u0275template"](17,b,2,1,"td",10),u["\u0275\u0275elementContainerEnd"](),u["\u0275\u0275elementContainerStart"](18,11),u["\u0275\u0275template"](19,w,2,0,"th",9),u["\u0275\u0275template"](20,E,2,1,"td",10),u["\u0275\u0275elementContainerEnd"](),u["\u0275\u0275elementContainerStart"](21,12),u["\u0275\u0275template"](22,C,2,0,"th",9),u["\u0275\u0275template"](23,x,2,1,"td",10),u["\u0275\u0275elementContainerEnd"](),u["\u0275\u0275elementContainerStart"](24,13),u["\u0275\u0275template"](25,I,2,0,"th",9),u["\u0275\u0275template"](26,M,2,1,"td",10),u["\u0275\u0275elementContainerEnd"](),u["\u0275\u0275template"](27,D,1,0,"tr",14),u["\u0275\u0275template"](28,P,1,0,"tr",15),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](29,"div",16),u["\u0275\u0275text"](30," No record found. "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](31,"mat-paginator",17),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](32,"br"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](7),u["\u0275\u0275textInterpolate1"](" ",t.title," "),u["\u0275\u0275advance"](7),u["\u0275\u0275property"]("dataSource",t.dataSource),u["\u0275\u0275advance"](13),u["\u0275\u0275property"]("matHeaderRowDef",t.displayedColumns),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("matRowDefColumns",t.displayedColumns),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("hidden",t.dataSource&&(null==t.dataSource||null==t.dataSource.data?null:t.dataSource.data.length)>0),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("pageSizeOptions",u["\u0275\u0275pureFunction0"](6,R)))},directives:[h.J,h.u,h.v,v.g,y.a,v.c,S.b,m.o,d.a,m.c,m.i,m.b,m.k,m.n,l.a,m.h,m.a,m.j,m.m],styles:[""]}),j)}],z=((k=n((function t(){e(this,t)}))).\u0275mod=u["\u0275\u0275defineNgModule"]({type:k}),k.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||k)},imports:[[o.f.forChild(L)],o.f]}),k),O=r("tk/3"),B=((N=n((function t(){e(this,t)}))).\u0275mod=u["\u0275\u0275defineNgModule"]({type:N}),N.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||N)},imports:[[i.c,z,O.b,h.D,h.n,c.k]]}),N)}}])}();