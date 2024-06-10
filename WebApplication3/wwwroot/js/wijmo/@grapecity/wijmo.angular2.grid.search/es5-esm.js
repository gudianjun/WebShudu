/*!
    *
    * Wijmo Library 5.20241.9
    * https://developer.mescius.com/wijmo
    *
    * Copyright(c) MESCIUS inc. All rights reserved.
    *
    * Licensed under the End-User License Agreement For MESCIUS Wijmo Software.
    * us.sales@mescius.com
    * https://developer.mescius.com/wijmo/licensing
    *
    */

import * as ɵngcc0 from '@angular/core';
var __extends=this&&this.__extends||function(){var extendStatics=function(e,r){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(e,r)};return function(e,r){extendStatics(e,r);function __(){this.constructor=e}e.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,r,t,o){var i,n=arguments.length,a=n<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,r,t,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(n<3?i(a):n>3?i(r,t,a):i(r,t))||a);return n>3&&a&&Object.defineProperty(r,t,a),a},__param=this&&this.__param||function(e,r){return function(t,o){r(t,o,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"@grapecity/wijmo.angular2.directivebase";import*as wjcGridSearch from"@grapecity/wijmo.grid.search";var wjFlexGridSearchMeta={selector:"wj-flex-grid-search",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","text","delay","searchAllColumns","placeholder","cssMatch","grid"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjFlexGridSearchMeta};var WjFlexGridSearch=function(e){__extends(WjFlexGridSearch,e);function WjFlexGridSearch(r,t,o){var i=e.call(this,WjDirectiveBehavior.getHostElement(r,t))||this;i.isInitialized=!1;i._wjBehaviour=WjDirectiveBehavior.attach(i,r,t,o);i.created();return i}r=WjFlexGridSearch;WjFlexGridSearch.prototype.created=function(){};WjFlexGridSearch.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexGridSearch.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexGridSearch.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjFlexGridSearch.prototype.addEventListener=function(r,t,o,i){var n=this;void 0===i&&(i=!1);var a=WjDirectiveBehavior,c=a.getZone(this);c&&a.outsideZoneEvents[t]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(n,r,t,o,i)})):e.prototype.addEventListener.call(this,r,t,o,i)};var r;WjFlexGridSearch.meta={outputs:wjFlexGridSearchMeta.outputs};
WjFlexGridSearch.ɵfac = function WjFlexGridSearch_Factory(t) { return new (t || WjFlexGridSearch)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexGridSearch.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexGridSearch, selectors: [["wj-flex-grid-search"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", text: "text", delay: "delay", searchAllColumns: "searchAllColumns", placeholder: "placeholder", cssMatch: "cssMatch", grid: "grid" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return r; })) }].concat(wjFlexGridSearchMeta.providers))], decls: 0, vars: 0, template: function WjFlexGridSearch_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexGridSearch, [{
        type: Component,
        args: [{ selector: wjFlexGridSearchMeta.selector, template: wjFlexGridSearchMeta.template, inputs: wjFlexGridSearchMeta.inputs, outputs: wjFlexGridSearchMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return r; })) }].concat(wjFlexGridSearchMeta.providers) }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }]; }, null); })();return WjFlexGridSearch=r=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexGridSearch)}(wjcGridSearch.FlexGridSearch);export{WjFlexGridSearch};var moduleExports=[WjFlexGridSearch],WjGridSearchModule=function(){function WjGridSearchModule(){}
WjGridSearchModule.ɵfac = function WjGridSearchModule_Factory(t) { return new (t || WjGridSearchModule)(); };
WjGridSearchModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjGridSearchModule });
WjGridSearchModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjGridSearchModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjGridSearchModule, { declarations: function () { return [WjFlexGridSearch]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjFlexGridSearch]; } }); })();return WjGridSearchModule}();export{WjGridSearchModule};