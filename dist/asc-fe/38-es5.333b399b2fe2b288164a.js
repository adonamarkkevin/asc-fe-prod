!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function t(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"7SPu":function(e,i,a){"use strict";a.r(i),a.d(i,"AnnouncementModule",(function(){return O}));var o=a("ofXK"),c=a("tyNb"),r=a("M9IT"),l=a("M0ag"),u=a("dszm"),m=a("fXoL"),s=a("dJ3e"),p=a("JqCM"),d=a("3Pt+"),f=a("kmnG"),g=a("NFeN");function v(n,e){if(1&n){var t=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"div",6),m["\u0275\u0275elementStart"](1,"div",7),m["\u0275\u0275elementStart"](2,"h3"),m["\u0275\u0275elementStart"](3,"span",8),m["\u0275\u0275text"](4,"campaign"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"a",9),m["\u0275\u0275listener"]("click",(function(){m["\u0275\u0275restoreView"](t);var n=e.$implicit;return m["\u0275\u0275nextContext"]().countView(n)})),m["\u0275\u0275text"](6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275elementStart"](8,"span",8),m["\u0275\u0275text"](9,"event_available"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](10),m["\u0275\u0275pipe"](11,"date"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](12,"p"),m["\u0275\u0275elementStart"](13,"span",8),m["\u0275\u0275text"](14,"visibility"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](15),m["\u0275\u0275elementStart"](16,"label",10),m["\u0275\u0275text"](17,"|"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](18," \xa0\xa0\xa0"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](19,"div",11),m["\u0275\u0275elementStart"](20,"p"),m["\u0275\u0275text"](21),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](22,"div",12),m["\u0275\u0275elementEnd"]()}if(2&n){var i=e.$implicit;m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("href",null==i?null:i.link,m["\u0275\u0275sanitizeUrl"]),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate"](null==i?null:i.title),m["\u0275\u0275advance"](4),m["\u0275\u0275textInterpolate"](m["\u0275\u0275pipeBind2"](11,5,i.postingDate,"fullDate")),m["\u0275\u0275advance"](5),m["\u0275\u0275textInterpolate1"](" ",i.counter,"\xa0\xa0\xa0 "),m["\u0275\u0275advance"](6),m["\u0275\u0275textInterpolate"](null==i?null:i.details)}}function h(n,e){1&n&&(m["\u0275\u0275elementStart"](0,"div",13),m["\u0275\u0275text"](1,"No announcements."),m["\u0275\u0275elementEnd"]())}var x,S,b,w=function(){return[5,10,25]},y=[{path:"",component:(x=function(){function e(t,i){n(this,e),this.apiService=t,this.spinner=i,this.announcement=new u.a,this.announcementList=[],this.announcementListFilter=[],this.viewCounter=0}return t(e,[{key:"ngOnInit",value:function(){this.getAnnouncementList()}},{key:"getAnnouncementList",value:function(){var n=this;this.spinner.show(),this.apiService.findAll(l.n.activeAnnouncements).subscribe((function(e){e.data&&(n.announcement=e.data,n.announcementList=e.data,n.announcementListFilter=n.announcementList.slice(0,5),setTimeout((function(){n.spinner.hide()}),1))}))}},{key:"countView",value:function(n){this.announcement=n,n.counter++,this.apiService.update(l.n.announcements,this.announcement).subscribe((function(n){}))}},{key:"onPageChange",value:function(n){this.announcementListFilter=this.announcementList.slice(n.pageIndex*n.pageSize,n.pageIndex*n.pageSize+n.pageSize)}}]),e}(),x.\u0275fac=function(n){return new(n||x)(m["\u0275\u0275directiveInject"](s.b),m["\u0275\u0275directiveInject"](p.c))},x.\u0275cmp=m["\u0275\u0275defineComponent"]({type:x,selectors:[["app-announcement"]],viewQuery:function(n,e){var t;1&n&&m["\u0275\u0275viewQuery"](r.a,!0),2&n&&m["\u0275\u0275queryRefresh"](t=m["\u0275\u0275loadQuery"]())&&(e.paginator=t.first)},decls:13,vars:6,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12","title"],["class","announcement-content",4,"ngFor","ngForOf"],["class","no-announcements",4,"ngIf"],[3,"length","pageSize","pageSizeOptions","page"],[1,"announcement-content"],[1,"announcement-title"],[1,"material-icons"],["target","_blank",3,"href","click"],[2,"color","black","font-weight","800"],[1,"announcement-details"],[1,"link-content"],[1,"no-announcements"]],template:function(n,e){1&n&&(m["\u0275\u0275elementStart"](0,"form"),m["\u0275\u0275elementStart"](1,"div",0),m["\u0275\u0275elementStart"](2,"div",1),m["\u0275\u0275elementStart"](3,"div",2),m["\u0275\u0275elementStart"](4,"mat-label"),m["\u0275\u0275elementStart"](5,"mat-icon"),m["\u0275\u0275text"](6,"announcement"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](7," Announcements "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](8,"hr"),m["\u0275\u0275template"](9,v,23,8,"div",3),m["\u0275\u0275template"](10,h,2,0,"div",4),m["\u0275\u0275element"](11,"hr"),m["\u0275\u0275elementStart"](12,"mat-paginator",5),m["\u0275\u0275listener"]("page",(function(n){return e.onPageChange(n)})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&n&&(m["\u0275\u0275advance"](9),m["\u0275\u0275property"]("ngForOf",e.announcementListFilter),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",0==e.announcementList.length),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("length",e.announcementListFilter.length)("pageSize",5)("pageSizeOptions",m["\u0275\u0275pureFunction0"](5,w)))},directives:[d.J,d.u,d.v,f.g,g.a,o.s,o.t,r.a],pipes:[o.f],styles:[".announcement-content[_ngcontent-%COMP%]{border-radius:10px;padding:10px 20px;border-radius:6px;background:#fff3f3;box-shadow:5px 5px 10px #b5b5b5,-5px -5px 10px #fff;margin:15px 0}.announcement-content[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{padding-right:10px}.announcement-content[_ngcontent-%COMP%]   .announcement-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700}.announcement-content[_ngcontent-%COMP%]   .announcement-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{float:right;margin:auto;font-weight:600;font-size:12px;vertical-align:middle;color:green}.announcement-content[_ngcontent-%COMP%]   .announcement-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:15px;padding-right:10px}.announcement-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#910000;font-size:50px}.no-announcements[_ngcontent-%COMP%]{color:grey;font-style:italic;font-weight:700}"]}),x)}],C=((b=t((function e(){n(this,e)}))).\u0275mod=m["\u0275\u0275defineNgModule"]({type:b}),b.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(n){return new(n||b)},imports:[[c.f.forChild(y)],c.f]}),b),O=((S=t((function e(){n(this,e)}))).\u0275mod=m["\u0275\u0275defineNgModule"]({type:S}),S.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(n){return new(n||S)},imports:[[o.c,C,l.k]]}),S)},dszm:function(e,i,a){"use strict";a.d(i,"a",(function(){return o}));var o=t((function e(){n(this,e)}))}}])}();