!function(){function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&t(e,n)}function t(e,n){return(t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,n)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=i(e);if(t){var a=i(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return r(this,n)}}function r(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{"pV/B":function(t,r,i){"use strict";i.r(r),i.d(r,"LayoutModule",(function(){return Ke}));var o,c=i("ofXK"),d=i("tyNb"),u=i("0MCZ"),l=i("fXoL"),h=[{path:"",component:u.a},{path:"access-denied",loadChildren:function(){return i.e(26).then(i.bind(null,"ahAP")).then((function(e){return e.AccessDeniedModule}))}},{path:"success-verification-page",loadChildren:function(){return i.e(27).then(i.bind(null,"lbkY")).then((function(e){return e.SuccessVerificationPageModule}))}},{path:"page",loadChildren:function(){return i.e(49).then(i.bind(null,"/HDY")).then((function(e){return e.PagesModule}))}}],p=((o=a((function e(){s(this,e)}))).\u0275mod=l["\u0275\u0275defineNgModule"]({type:o}),o.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||o)},imports:[[d.f.forChild(h)],d.f]}),o),f=i("dJ3e"),m=i("STbY"),g=i("NFeN"),_=i("bv9b");function v(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"span",18),l["\u0275\u0275element"](1,"mat-progress-bar",19),l["\u0275\u0275elementEnd"]())}function b(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"span",20),l["\u0275\u0275elementStart"](1,"b"),l["\u0275\u0275text"](2),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" You will be logged out in ",n.countdown," seconds! ")}}var w,y,C=function(){return["/asc/page/account/user-profile"]},k=((y=function(){function e(t,n,r){s(this,e),this.dataStorage=t,this.router=n,this.cd=r,this.userRole="",this.userFirstName="",this.countdown="",this.isCountdownDisplayed=!1,this.todayDate=new Date,this.showProgressBar=this.dataStorage.getDisplayProgressbar(),this.userRole=this.dataStorage.getUserRole(),this.userFirstName=this.dataStorage.getUserFirstname()}return a(e,[{key:"ngOnInit",value:function(){this.dataStorage.setDisplayProgressbar(!1),this.setSystemTime()}},{key:"ngAfterViewChecked",value:function(){this.showProgressBar=this.dataStorage.getDisplayProgressbar(),this.countdown=this.dataStorage.getIdleCountdown(),this.isCountdownDisplayed="true"===this.dataStorage.getIsIdleCountdownDisplayed(),this.cd.detectChanges()}},{key:"setSystemTime",value:function(){var e=this;setInterval((function(){e.todayDate=new Date}),1e3)}},{key:"logout",value:function(){this.dataStorage.signOut(),this.router.navigateByUrl("login")}}]),e}()).\u0275fac=function(e){return new(e||y)(l["\u0275\u0275directiveInject"](f.c),l["\u0275\u0275directiveInject"](d.b),l["\u0275\u0275directiveInject"](l.ChangeDetectorRef))},y.\u0275cmp=l["\u0275\u0275defineComponent"]({type:y,selectors:[["app-header"]],decls:45,vars:19,consts:[[1,"custom-container"],["class","progress-bar",4,"ngIf"],[1,"row","header","mx-0"],[1,"col","asc-logo"],["src","../../../../assets/images/asc-logo.jpg","alt",""],[1,"col","search-bar","px-0",2,"padding","0"],["class","idle-message",4,"ngIf"],[1,"col","user-badge"],[1,"avatar",3,"matMenuTriggerFor"],["src","../../../../assets/images/user-profile-default.png","alt",""],[1,"username"],["userProfile","matMenu"],[1,"mat-menu-content"],[1,"avatar-content"],[1,"avatar-details"],[1,"company-name"],["mat-menu-item","",3,"routerLink"],["mat-menu-item","",3,"click"],[1,"progress-bar"],["mode","indeterminate"],[1,"idle-message"]],template:function(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275template"](1,v,2,0,"span",1),l["\u0275\u0275elementStart"](2,"div",2),l["\u0275\u0275elementStart"](3,"div",3),l["\u0275\u0275element"](4,"img",4),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"div",5),l["\u0275\u0275elementStart"](6,"p"),l["\u0275\u0275elementStart"](7,"b"),l["\u0275\u0275text"](8),l["\u0275\u0275pipe"](9,"date"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](10,"p"),l["\u0275\u0275text"](11),l["\u0275\u0275pipe"](12,"date"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](13,b,3,1,"span",6),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"div",7),l["\u0275\u0275elementStart"](15,"span"),l["\u0275\u0275elementStart"](16,"button",8),l["\u0275\u0275element"](17,"img",9),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](18,"br"),l["\u0275\u0275elementStart"](19,"label",10),l["\u0275\u0275text"](20),l["\u0275\u0275pipe"](21,"titlecase"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](22,"mat-menu",null,11),l["\u0275\u0275elementStart"](24,"div",12),l["\u0275\u0275elementStart"](25,"div",13),l["\u0275\u0275element"](26,"img",9),l["\u0275\u0275element"](27,"br"),l["\u0275\u0275element"](28,"br"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](29,"div",14),l["\u0275\u0275elementStart"](30,"p",15),l["\u0275\u0275elementStart"](31,"b"),l["\u0275\u0275text"](32,"Ad Standard Council"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](33,"p"),l["\u0275\u0275text"](34),l["\u0275\u0275pipe"](35,"uppercase"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](36,"hr"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](37,"button",16),l["\u0275\u0275elementStart"](38,"mat-icon"),l["\u0275\u0275text"](39,"arrow_right"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](40,"View Profile "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](41,"button",17),l["\u0275\u0275listener"]("click",(function(){return t.logout()})),l["\u0275\u0275elementStart"](42,"mat-icon"),l["\u0275\u0275text"](43,"arrow_right"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](44,"Logout "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275reference"](23),r=null;l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf","true"===t.showProgressBar),l["\u0275\u0275advance"](7),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind2"](9,8,t.todayDate,"hh:mm:ss aa")),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind2"](12,11,t.todayDate,"fullDate")),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngIf",t.isCountdownDisplayed),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("matMenuTriggerFor",n),l["\u0275\u0275advance"](4),l["\u0275\u0275textInterpolate1"]("Hi ",l["\u0275\u0275pipeBind1"](21,14,t.userFirstName),"!"),l["\u0275\u0275advance"](14),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](35,16,null==t.userRole||null==(r=t.userRole.replace("_"," ").replaceAll("ROLE ",""))?null:r.replace("ENCODER","EVALUATOR"))),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("routerLink",l["\u0275\u0275pureFunction0"](18,C))}},directives:[c.t,m.d,m.e,m.b,d.c,g.a,_.a],pipes:[c.f,c.F,c.G],styles:[".container[_ngcontent-%COMP%]{background:#f1ecec;box-shadow:3px 3px 16px 0 rgba(0,0,0,.25);position:relative;top:0;height:10vh}.custom-container[_ngcontent-%COMP%]{background:#fff;width:100%}.custom-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:6px;border-bottom:4px solid #f53e35}.custom-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .asc-logo[_ngcontent-%COMP%]{padding:3px 20px;width:300px;text-align:left}.custom-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .asc-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:4.7rem;width:200px}.custom-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]{border:red;text-align:center;line-height:5px;margin:30px auto auto}.custom-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:grey;font-weight:500}.custom-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#720000;font-weight:800;font-size:40px}.custom-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .user-badge[_ngcontent-%COMP%]{margin:auto}.custom-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .user-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-align:center;float:right}.custom-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .user-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{padding:0;margin:0;width:3.3em;border:none}.custom-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .user-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:3em;width:100%;border-radius:50%;color:#fff}.mat-menu-content[_ngcontent-%COMP%]{padding:10px;margin:0}.mat-menu-content[_ngcontent-%COMP%]   .avatar-content[_ngcontent-%COMP%]{padding:0 70px 5px}.mat-menu-content[_ngcontent-%COMP%]   .avatar-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;height:3.3em;width:3.3em}.mat-menu-content[_ngcontent-%COMP%]   .avatar-details[_ngcontent-%COMP%]{text-align:center;padding-bottom:10px;color:#c5140c}.mat-menu-content[_ngcontent-%COMP%]   .avatar-details[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{height:2px}.mat-menu-content[_ngcontent-%COMP%]   .avatar-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;line-height:5px}.mat-menu-content[_ngcontent-%COMP%]   .avatar-details[_ngcontent-%COMP%]   p.company-name[_ngcontent-%COMP%]{font-size:15px}.mat-menu-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-weight:500}span[_ngcontent-%COMP%]{margin-right:1em}  .search-bar .mat-form-field-appearance-outline .mat-form-field-wrapper{padding:0!important;background:#fff;border-radius:6px}.username[_ngcontent-%COMP%]{color:#c5140c;font-size:15px;font-weight:500}.progress-bar[_ngcontent-%COMP%]{display:contents}.idle-message[_ngcontent-%COMP%]{color:red;font-weight:700;letter-spacing:3px;line-height:1}"]}),y),O=((w=function(){function e(){s(this,e)}return a(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||w)},w.\u0275cmp=l["\u0275\u0275defineComponent"]({type:w,selectors:[["app-footer"]],decls:5,vars:0,consts:[[1,"footerContainer"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"span"),l["\u0275\u0275text"](2,"Ad Standards Council - Screening System - v2.0"),l["\u0275\u0275element"](3,"br"),l["\u0275\u0275text"](4," \xa9 2022. Ad Standards Council"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]())},styles:[".footerContainer[_ngcontent-%COMP%]{text-align:right;padding:5px;background-color:#c5140c;color:#fff;box-shadow:-2px -2px 10px 0 rgba(0,0,0,.25);width:100%}"]}),w),x=i("nLfN"),j=i("vxfF"),S=i("FKr1"),M=i("8LU1"),P=i("FtGj"),D=i("XNiG"),E=i("xgIS"),I=i("VRyK"),F=i("pLZG"),R=i("lJxs"),B=i("7o/Q");function T(e){return function(t){return t.lift(new A(e))}}var A=function(){function e(t){s(this,e),this.value=t}return a(e,[{key:"call",value:function(e,t){return t.subscribe(new V(e,this.value))}}]),e}(),V=function(t){e(i,t);var r=n(i);function i(e,t){var n;return s(this,i),(n=r.call(this,e)).value=t,n}return a(i,[{key:"_next",value:function(e){this.destination.next(this.value)}}]),i}(B.a),z=i("1G5W"),G=i("/uUt"),N=i("IzEk"),W=i("JX91"),L=i("Kj3r"),Z=i("R0Ic"),Q=i("R1ws"),H=i("u47x"),q=i("cH1L"),U=["*"];function J(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"div",2),l["\u0275\u0275listener"]("click",(function(){return l["\u0275\u0275restoreView"](n),l["\u0275\u0275nextContext"]()._onBackdropClicked()})),l["\u0275\u0275elementEnd"]()}if(2&e){var r=l["\u0275\u0275nextContext"]();l["\u0275\u0275classProp"]("mat-drawer-shown",r._isShowingBackdrop())}}function K(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"mat-drawer-content"),l["\u0275\u0275projection"](1,2),l["\u0275\u0275elementEnd"]())}var X=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Y=["mat-drawer","mat-drawer-content","*"];function $(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"div",2),l["\u0275\u0275listener"]("click",(function(){return l["\u0275\u0275restoreView"](n),l["\u0275\u0275nextContext"]()._onBackdropClicked()})),l["\u0275\u0275elementEnd"]()}if(2&e){var r=l["\u0275\u0275nextContext"]();l["\u0275\u0275classProp"]("mat-drawer-shown",r._isShowingBackdrop())}}function ee(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"mat-sidenav-content",3),l["\u0275\u0275projection"](1,2),l["\u0275\u0275elementEnd"]())}var te,ne,re,ie,oe,ae,se,ce,de=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],ue=["mat-sidenav","mat-sidenav-content","*"],le=".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n",he={transformDrawer:Object(Z.n)("transform",[Object(Z.k)("open, open-instant",Object(Z.l)({transform:"none",visibility:"visible"})),Object(Z.k)("void",Object(Z.l)({"box-shadow":"none",visibility:"hidden"})),Object(Z.m)("void => open-instant",Object(Z.e)("0ms")),Object(Z.m)("void <=> open, open-instant => void",Object(Z.e)("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))])},pe=new l.InjectionToken("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:function(){return!1}}),fe=new l.InjectionToken("MAT_DRAWER_CONTAINER"),me=((oe=function(t){e(i,t);var r=n(i);function i(e,t,n,o,a){var c;return s(this,i),(c=r.call(this,n,o,a))._changeDetectorRef=e,c._container=t,c}return a(i,[{key:"ngAfterContentInit",value:function(){var e=this;this._container._contentMarginChanges.subscribe((function(){e._changeDetectorRef.markForCheck()}))}}]),i}(j.a)).\u0275fac=function(e){return new(e||oe)(l["\u0275\u0275directiveInject"](l.ChangeDetectorRef),l["\u0275\u0275directiveInject"](Object(l.forwardRef)((function(){return _e}))),l["\u0275\u0275directiveInject"](l.ElementRef),l["\u0275\u0275directiveInject"](j.c),l["\u0275\u0275directiveInject"](l.NgZone))},oe.\u0275cmp=l["\u0275\u0275defineComponent"]({type:oe,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:4,hostBindings:function(e,t){2&e&&l["\u0275\u0275styleProp"]("margin-left",t._container._contentMargins.left,"px")("margin-right",t._container._contentMargins.right,"px")},features:[l["\u0275\u0275InheritDefinitionFeature"]],ngContentSelectors:U,decls:1,vars:0,template:function(e,t){1&e&&(l["\u0275\u0275projectionDef"](),l["\u0275\u0275projection"](0))},encapsulation:2,changeDetection:0}),oe),ge=((ie=function(){function e(t,n,r,i,o,a,c){var d=this;s(this,e),this._elementRef=t,this._focusTrapFactory=n,this._focusMonitor=r,this._platform=i,this._ngZone=o,this._doc=a,this._container=c,this._elementFocusedBeforeDrawerWasOpened=null,this._enableAnimations=!1,this._position="start",this._mode="over",this._disableClose=!1,this._opened=!1,this._animationStarted=new D.a,this._animationEnd=new D.a,this._animationState="void",this.openedChange=new l.EventEmitter(!0),this._openedStream=this.openedChange.pipe(Object(F.a)((function(e){return e})),Object(R.a)((function(){}))),this.openedStart=this._animationStarted.pipe(Object(F.a)((function(e){return e.fromState!==e.toState&&0===e.toState.indexOf("open")})),T(void 0)),this._closedStream=this.openedChange.pipe(Object(F.a)((function(e){return!e})),Object(R.a)((function(){}))),this.closedStart=this._animationStarted.pipe(Object(F.a)((function(e){return e.fromState!==e.toState&&"void"===e.toState})),T(void 0)),this._destroyed=new D.a,this.onPositionChanged=new l.EventEmitter,this._modeChanged=new D.a,this.openedChange.subscribe((function(e){e?(d._doc&&(d._elementFocusedBeforeDrawerWasOpened=d._doc.activeElement),d._takeFocus()):d._isFocusWithinDrawer()&&d._restoreFocus()})),this._ngZone.runOutsideAngular((function(){Object(E.a)(d._elementRef.nativeElement,"keydown").pipe(Object(F.a)((function(e){return e.keyCode===P.f&&!d.disableClose&&!Object(P.r)(e)})),Object(z.a)(d._destroyed)).subscribe((function(e){return d._ngZone.run((function(){d.close(),e.stopPropagation(),e.preventDefault()}))}))})),this._animationEnd.pipe(Object(G.a)((function(e,t){return e.fromState===t.fromState&&e.toState===t.toState}))).subscribe((function(e){var t=e.fromState,n=e.toState;(0===n.indexOf("open")&&"void"===t||"void"===n&&0===t.indexOf("open"))&&d.openedChange.emit(d._opened)}))}return a(e,[{key:"position",get:function(){return this._position},set:function(e){(e="end"===e?"end":"start")!=this._position&&(this._position=e,this.onPositionChanged.emit())}},{key:"mode",get:function(){return this._mode},set:function(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}},{key:"disableClose",get:function(){return this._disableClose},set:function(e){this._disableClose=Object(M.c)(e)}},{key:"autoFocus",get:function(){var e=this._autoFocus;return null==e?"side"!==this.mode:e},set:function(e){this._autoFocus=Object(M.c)(e)}},{key:"opened",get:function(){return this._opened},set:function(e){this.toggle(Object(M.c)(e))}},{key:"_takeFocus",value:function(){var e=this;this.autoFocus&&this._focusTrap&&this._focusTrap.focusInitialElementWhenReady().then((function(t){t||"function"!=typeof e._elementRef.nativeElement.focus||e._elementRef.nativeElement.focus()}))}},{key:"_restoreFocus",value:function(){this.autoFocus&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,this._openedVia):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null,this._openedVia=null)}},{key:"_isFocusWithinDrawer",value:function(){var e,t=null===(e=this._doc)||void 0===e?void 0:e.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}},{key:"ngAfterContentInit",value:function(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState()}},{key:"ngAfterContentChecked",value:function(){this._platform.isBrowser&&(this._enableAnimations=!0)}},{key:"ngOnDestroy",value:function(){this._focusTrap&&this._focusTrap.destroy(),this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}},{key:"open",value:function(e){return this.toggle(!0,e)}},{key:"close",value:function(){return this.toggle(!1)}},{key:"_closeViaBackdropClick",value:function(){return this._setOpen(!1,!0)}},{key:"toggle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.opened,t=arguments.length>1?arguments[1]:void 0;return this._setOpen(e,!e&&this._isFocusWithinDrawer(),t)}},{key:"_setOpen",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"program";return this._opened=e,e?(this._animationState=this._enableAnimations?"open":"open-instant",this._openedVia=r):(this._animationState="void",t&&this._restoreFocus()),this._updateFocusTrapState(),new Promise((function(e){n.openedChange.pipe(Object(N.a)(1)).subscribe((function(t){return e(t?"open":"close")}))}))}},{key:"_getWidth",value:function(){return this._elementRef.nativeElement&&this._elementRef.nativeElement.offsetWidth||0}},{key:"_updateFocusTrapState",value:function(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&"side"!==this.mode)}},{key:"_animationStartListener",value:function(e){this._animationStarted.next(e)}},{key:"_animationDoneListener",value:function(e){this._animationEnd.next(e)}}]),e}()).\u0275fac=function(e){return new(e||ie)(l["\u0275\u0275directiveInject"](l.ElementRef),l["\u0275\u0275directiveInject"](H.i),l["\u0275\u0275directiveInject"](H.h),l["\u0275\u0275directiveInject"](x.a),l["\u0275\u0275directiveInject"](l.NgZone),l["\u0275\u0275directiveInject"](c.e,8),l["\u0275\u0275directiveInject"](fe,8))},ie.\u0275cmp=l["\u0275\u0275defineComponent"]({type:ie,selectors:[["mat-drawer"]],hostAttrs:["tabIndex","-1",1,"mat-drawer"],hostVars:12,hostBindings:function(e,t){1&e&&l["\u0275\u0275syntheticHostListener"]("@transform.start",(function(e){return t._animationStartListener(e)}))("@transform.done",(function(e){return t._animationDoneListener(e)})),2&e&&(l["\u0275\u0275attribute"]("align",null),l["\u0275\u0275syntheticHostProperty"]("@transform",t._animationState),l["\u0275\u0275classProp"]("mat-drawer-end","end"===t.position)("mat-drawer-over","over"===t.mode)("mat-drawer-push","push"===t.mode)("mat-drawer-side","side"===t.mode)("mat-drawer-opened",t.opened))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:U,decls:2,vars:0,consts:[[1,"mat-drawer-inner-container"]],template:function(e,t){1&e&&(l["\u0275\u0275projectionDef"](),l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275projection"](1),l["\u0275\u0275elementEnd"]())},encapsulation:2,data:{animation:[he.transformDrawer]},changeDetection:0}),ie),_e=((re=function(){function e(t,n,r,i,o){var a=this,c=arguments.length>5&&void 0!==arguments[5]&&arguments[5],d=arguments.length>6?arguments[6]:void 0;s(this,e),this._dir=t,this._element=n,this._ngZone=r,this._changeDetectorRef=i,this._animationMode=d,this._drawers=new l.QueryList,this.backdropClick=new l.EventEmitter,this._destroyed=new D.a,this._doCheckSubject=new D.a,this._contentMargins={left:null,right:null},this._contentMarginChanges=new D.a,t&&t.change.pipe(Object(z.a)(this._destroyed)).subscribe((function(){a._validateDrawers(),a.updateContentMargins()})),o.change().pipe(Object(z.a)(this._destroyed)).subscribe((function(){return a.updateContentMargins()})),this._autosize=c}return a(e,[{key:"start",get:function(){return this._start}},{key:"end",get:function(){return this._end}},{key:"autosize",get:function(){return this._autosize},set:function(e){this._autosize=Object(M.c)(e)}},{key:"hasBackdrop",get:function(){return null==this._backdropOverride?!this._start||"side"!==this._start.mode||!this._end||"side"!==this._end.mode:this._backdropOverride},set:function(e){this._backdropOverride=null==e?null:Object(M.c)(e)}},{key:"scrollable",get:function(){return this._userContent||this._content}},{key:"ngAfterContentInit",value:function(){var e=this;this._allDrawers.changes.pipe(Object(W.a)(this._allDrawers),Object(z.a)(this._destroyed)).subscribe((function(t){e._drawers.reset(t.filter((function(t){return!t._container||t._container===e}))),e._drawers.notifyOnChanges()})),this._drawers.changes.pipe(Object(W.a)(null)).subscribe((function(){e._validateDrawers(),e._drawers.forEach((function(t){e._watchDrawerToggle(t),e._watchDrawerPosition(t),e._watchDrawerMode(t)})),(!e._drawers.length||e._isDrawerOpen(e._start)||e._isDrawerOpen(e._end))&&e.updateContentMargins(),e._changeDetectorRef.markForCheck()})),this._ngZone.runOutsideAngular((function(){e._doCheckSubject.pipe(Object(L.a)(10),Object(z.a)(e._destroyed)).subscribe((function(){return e.updateContentMargins()}))}))}},{key:"ngOnDestroy",value:function(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}},{key:"open",value:function(){this._drawers.forEach((function(e){return e.open()}))}},{key:"close",value:function(){this._drawers.forEach((function(e){return e.close()}))}},{key:"updateContentMargins",value:function(){var e=this,t=0,n=0;if(this._left&&this._left.opened)if("side"==this._left.mode)t+=this._left._getWidth();else if("push"==this._left.mode){var r=this._left._getWidth();t+=r,n-=r}if(this._right&&this._right.opened)if("side"==this._right.mode)n+=this._right._getWidth();else if("push"==this._right.mode){var i=this._right._getWidth();n+=i,t-=i}n=n||null,(t=t||null)===this._contentMargins.left&&n===this._contentMargins.right||(this._contentMargins={left:t,right:n},this._ngZone.run((function(){return e._contentMarginChanges.next(e._contentMargins)})))}},{key:"ngDoCheck",value:function(){var e=this;this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular((function(){return e._doCheckSubject.next()}))}},{key:"_watchDrawerToggle",value:function(e){var t=this;e._animationStarted.pipe(Object(F.a)((function(e){return e.fromState!==e.toState})),Object(z.a)(this._drawers.changes)).subscribe((function(e){"open-instant"!==e.toState&&"NoopAnimations"!==t._animationMode&&t._element.nativeElement.classList.add("mat-drawer-transition"),t.updateContentMargins(),t._changeDetectorRef.markForCheck()})),"side"!==e.mode&&e.openedChange.pipe(Object(z.a)(this._drawers.changes)).subscribe((function(){return t._setContainerClass(e.opened)}))}},{key:"_watchDrawerPosition",value:function(e){var t=this;e&&e.onPositionChanged.pipe(Object(z.a)(this._drawers.changes)).subscribe((function(){t._ngZone.onMicrotaskEmpty.pipe(Object(N.a)(1)).subscribe((function(){t._validateDrawers()}))}))}},{key:"_watchDrawerMode",value:function(e){var t=this;e&&e._modeChanged.pipe(Object(z.a)(Object(I.a)(this._drawers.changes,this._destroyed))).subscribe((function(){t.updateContentMargins(),t._changeDetectorRef.markForCheck()}))}},{key:"_setContainerClass",value:function(e){var t=this._element.nativeElement.classList,n="mat-drawer-container-has-open";e?t.add(n):t.remove(n)}},{key:"_validateDrawers",value:function(){var e=this;this._start=this._end=null,this._drawers.forEach((function(t){"end"==t.position?e._end=t:e._start=t})),this._right=this._left=null,this._dir&&"rtl"===this._dir.value?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}},{key:"_isPushed",value:function(){return this._isDrawerOpen(this._start)&&"over"!=this._start.mode||this._isDrawerOpen(this._end)&&"over"!=this._end.mode}},{key:"_onBackdropClicked",value:function(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}},{key:"_closeModalDrawersViaBackdrop",value:function(){var e=this;[this._start,this._end].filter((function(t){return t&&!t.disableClose&&e._canHaveBackdrop(t)})).forEach((function(e){return e._closeViaBackdropClick()}))}},{key:"_isShowingBackdrop",value:function(){return this._isDrawerOpen(this._start)&&this._canHaveBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._canHaveBackdrop(this._end)}},{key:"_canHaveBackdrop",value:function(e){return"side"!==e.mode||!!this._backdropOverride}},{key:"_isDrawerOpen",value:function(e){return null!=e&&e.opened}}]),e}()).\u0275fac=function(e){return new(e||re)(l["\u0275\u0275directiveInject"](q.c,8),l["\u0275\u0275directiveInject"](l.ElementRef),l["\u0275\u0275directiveInject"](l.NgZone),l["\u0275\u0275directiveInject"](l.ChangeDetectorRef),l["\u0275\u0275directiveInject"](j.e),l["\u0275\u0275directiveInject"](pe),l["\u0275\u0275directiveInject"](Q.a,8))},re.\u0275cmp=l["\u0275\u0275defineComponent"]({type:re,selectors:[["mat-drawer-container"]],contentQueries:function(e,t,n){var r;1&e&&(l["\u0275\u0275contentQuery"](n,me,!0),l["\u0275\u0275contentQuery"](n,ge,!0)),2&e&&(l["\u0275\u0275queryRefresh"](r=l["\u0275\u0275loadQuery"]())&&(t._content=r.first),l["\u0275\u0275queryRefresh"](r=l["\u0275\u0275loadQuery"]())&&(t._allDrawers=r))},viewQuery:function(e,t){var n;1&e&&l["\u0275\u0275viewQuery"](me,!0),2&e&&l["\u0275\u0275queryRefresh"](n=l["\u0275\u0275loadQuery"]())&&(t._userContent=n.first)},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,t){2&e&&l["\u0275\u0275classProp"]("mat-drawer-container-explicit-backdrop",t._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[l["\u0275\u0275ProvidersFeature"]([{provide:fe,useExisting:re}])],ngContentSelectors:Y,decls:4,vars:2,consts:[["class","mat-drawer-backdrop",3,"mat-drawer-shown","click",4,"ngIf"],[4,"ngIf"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,t){1&e&&(l["\u0275\u0275projectionDef"](X),l["\u0275\u0275template"](0,J,1,2,"div",0),l["\u0275\u0275projection"](1),l["\u0275\u0275projection"](2,1),l["\u0275\u0275template"](3,K,2,0,"mat-drawer-content",1)),2&e&&(l["\u0275\u0275property"]("ngIf",t.hasBackdrop),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngIf",!t._content))},directives:[c.t,me],styles:[le],encapsulation:2,changeDetection:0}),re),ve=((ne=function(t){e(i,t);var r=n(i);function i(e,t,n,o,a){return s(this,i),r.call(this,e,t,n,o,a)}return a(i)}(me)).\u0275fac=function(e){return new(e||ne)(l["\u0275\u0275directiveInject"](l.ChangeDetectorRef),l["\u0275\u0275directiveInject"](Object(l.forwardRef)((function(){return ye}))),l["\u0275\u0275directiveInject"](l.ElementRef),l["\u0275\u0275directiveInject"](j.c),l["\u0275\u0275directiveInject"](l.NgZone))},ne.\u0275cmp=l["\u0275\u0275defineComponent"]({type:ne,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],hostVars:4,hostBindings:function(e,t){2&e&&l["\u0275\u0275styleProp"]("margin-left",t._container._contentMargins.left,"px")("margin-right",t._container._contentMargins.right,"px")},features:[l["\u0275\u0275InheritDefinitionFeature"]],ngContentSelectors:U,decls:1,vars:0,template:function(e,t){1&e&&(l["\u0275\u0275projectionDef"](),l["\u0275\u0275projection"](0))},encapsulation:2,changeDetection:0}),ne),be=((te=function(t){e(i,t);var r=n(i);function i(){var e;return s(this,i),(e=r.apply(this,arguments))._fixedInViewport=!1,e._fixedTopGap=0,e._fixedBottomGap=0,e}return a(i,[{key:"fixedInViewport",get:function(){return this._fixedInViewport},set:function(e){this._fixedInViewport=Object(M.c)(e)}},{key:"fixedTopGap",get:function(){return this._fixedTopGap},set:function(e){this._fixedTopGap=Object(M.f)(e)}},{key:"fixedBottomGap",get:function(){return this._fixedBottomGap},set:function(e){this._fixedBottomGap=Object(M.f)(e)}}]),i}(ge)).\u0275fac=function(e){return we(e||te)},te.\u0275cmp=l["\u0275\u0275defineComponent"]({type:te,selectors:[["mat-sidenav"]],hostAttrs:["tabIndex","-1",1,"mat-drawer","mat-sidenav"],hostVars:17,hostBindings:function(e,t){2&e&&(l["\u0275\u0275attribute"]("align",null),l["\u0275\u0275styleProp"]("top",t.fixedInViewport?t.fixedTopGap:null,"px")("bottom",t.fixedInViewport?t.fixedBottomGap:null,"px"),l["\u0275\u0275classProp"]("mat-drawer-end","end"===t.position)("mat-drawer-over","over"===t.mode)("mat-drawer-push","push"===t.mode)("mat-drawer-side","side"===t.mode)("mat-drawer-opened",t.opened)("mat-sidenav-fixed",t.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[l["\u0275\u0275InheritDefinitionFeature"]],ngContentSelectors:U,decls:2,vars:0,consts:[[1,"mat-drawer-inner-container"]],template:function(e,t){1&e&&(l["\u0275\u0275projectionDef"](),l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275projection"](1),l["\u0275\u0275elementEnd"]())},encapsulation:2,data:{animation:[he.transformDrawer]},changeDetection:0}),te),we=l["\u0275\u0275getInheritedFactory"](be),ye=((ae=function(t){e(i,t);var r=n(i);function i(){return s(this,i),r.apply(this,arguments)}return a(i)}(_e)).\u0275fac=function(e){return Ce(e||ae)},ae.\u0275cmp=l["\u0275\u0275defineComponent"]({type:ae,selectors:[["mat-sidenav-container"]],contentQueries:function(e,t,n){var r;1&e&&(l["\u0275\u0275contentQuery"](n,ve,!0),l["\u0275\u0275contentQuery"](n,be,!0)),2&e&&(l["\u0275\u0275queryRefresh"](r=l["\u0275\u0275loadQuery"]())&&(t._content=r.first),l["\u0275\u0275queryRefresh"](r=l["\u0275\u0275loadQuery"]())&&(t._allDrawers=r))},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,t){2&e&&l["\u0275\u0275classProp"]("mat-drawer-container-explicit-backdrop",t._backdropOverride)},exportAs:["matSidenavContainer"],features:[l["\u0275\u0275ProvidersFeature"]([{provide:fe,useExisting:ae}]),l["\u0275\u0275InheritDefinitionFeature"]],ngContentSelectors:ue,decls:4,vars:2,consts:[["class","mat-drawer-backdrop",3,"mat-drawer-shown","click",4,"ngIf"],["cdkScrollable","",4,"ngIf"],[1,"mat-drawer-backdrop",3,"click"],["cdkScrollable",""]],template:function(e,t){1&e&&(l["\u0275\u0275projectionDef"](de),l["\u0275\u0275template"](0,$,1,2,"div",0),l["\u0275\u0275projection"](1),l["\u0275\u0275projection"](2,1),l["\u0275\u0275template"](3,ee,2,0,"mat-sidenav-content",1)),2&e&&(l["\u0275\u0275property"]("ngIf",t.hasBackdrop),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngIf",!t._content))},directives:[c.t,ve,j.a],styles:[le],encapsulation:2,changeDetection:0}),ae),Ce=l["\u0275\u0275getInheritedFactory"](ye),ke=((se=a((function e(){s(this,e)}))).\u0275mod=l["\u0275\u0275defineNgModule"]({type:se}),se.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||se)},imports:[[c.c,S.j,x.b,j.b],j.b,S.j]}),se),Oe=i("ZN+y"),xe=i("3Pt+"),je=i("ZOsW"),Se=i("6NWb"),Me=i("JqCM"),Pe=i("bTqV"),De=i("kmnG"),Ee=i("ihCf"),Ie=i("qFsG"),Fe=i("d3UM"),Re=i("Wp6s"),Be=i("+0xr"),Te=i("M9IT"),Ae=i("Qu3c"),Ve=i("Dh3D"),ze=i("xHqg"),Ge=i("wZkO"),Ne=i("bSwM"),We=i("7EHt"),Le=i("0IaG"),Ze=i("QibW"),Qe=i("1jcm"),He=i("iadO"),qe=i("fvN+"),Ue=i("TU8p"),Je=i("dNgK"),Ke=((ce=a((function e(){s(this,e)}))).\u0275mod=l["\u0275\u0275defineNgModule"]({type:ce}),ce.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||ce)},imports:[[c.c,p,ke,Oe.a]]}),ce);l["\u0275\u0275setComponentScope"](u.a,[c.q,c.r,c.s,c.t,c.A,c.w,c.x,c.y,c.z,c.u,c.v,d.g,d.c,d.e,d.d,d.h,j.a,q.b,ge,_e,me,be,ye,ve,xe.J,xe.y,xe.I,xe.d,xe.z,xe.C,xe.a,xe.F,xe.G,xe.B,xe.t,xe.u,xe.E,xe.p,xe.o,xe.A,xe.b,xe.e,xe.w,xe.x,xe.v,xe.i,xe.l,xe.j,xe.m,xe.f,je.a,je.n,je.d,je.c,je.e,je.f,je.g,je.h,je.i,je.j,je.k,je.l,je.m,Se.b,Se.a,Se.c,Se.e,Se.d,Se.f,Se.g,Me.a,Pe.b,Pe.a,De.b,De.c,De.f,De.g,De.h,De.i,De.j,Ee.b,Ee.c,Ie.b,Ie.d,Fe.a,Fe.c,S.m,S.l,g.a,Re.a,Re.f,Re.n,Re.d,Re.m,Re.l,Re.b,Re.e,Re.k,Re.i,Re.h,Re.g,Re.o,Re.c,Be.o,Be.i,Be.k,Be.c,Be.b,Be.n,Be.e,Be.g,Be.h,Be.a,Be.d,Be.j,Be.m,Be.f,Be.l,Be.r,Te.a,Ae.a,Ae.c,m.e,m.b,m.d,m.a,Ve.a,Ve.b,ze.a,ze.j,ze.b,ze.d,ze.e,ze.h,ze.i,ze.c,ze.f,Ge.c,Ge.d,Ge.a,Ge.f,Ge.e,Ge.b,Ne.a,Ne.c,We.a,We.c,We.d,We.g,We.h,We.f,We.e,Le.e,Le.d,Le.i,Le.f,Le.c,Ze.b,Ze.a,Qe.c,Qe.a,He.a,He.b,He.f,He.g,He.h,He.j,He.k,He.m,He.p,He.n,He.c,He.d,He.o,He.l,He.e,qe.a,qe.e,qe.c,qe.d,_.a,Ue.a,Je.b,u.a,k,O],[c.b,c.G,c.p,c.k,c.E,c.g,c.C,c.F,c.d,c.f,c.i,c.j,c.l])}}])}();