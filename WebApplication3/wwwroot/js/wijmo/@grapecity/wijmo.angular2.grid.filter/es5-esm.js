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
var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l},__param=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior}from"@grapecity/wijmo.angular2.directivebase";import*as wjcGridFilter from"@grapecity/wijmo.grid.filter";var wjFlexGridFilterMeta={selector:"wj-flex-grid-filter",template:"",inputs:["wjProperty","showFilterIcons","showSortButtons","defaultFilterType","filterColumns","exclusiveValueSearch","reApplyFilterOnUpdate"],outputs:["initialized","editingFilterNg: editingFilter","filterChangingNg: filterChanging","filterChangedNg: filterChanged","filterAppliedNg: filterApplied"],providers:[]};export{wjFlexGridFilterMeta};var WjFlexGridFilter=function(e){__extends(WjFlexGridFilter,e);function WjFlexGridFilter(t,r,i){var o=e.call(this,i)||this;o.isInitialized=!1;o._wjBehaviour=WjDirectiveBehavior.attach(o,t,r,i);o.created();return o}t=WjFlexGridFilter;WjFlexGridFilter.prototype.created=function(){};WjFlexGridFilter.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexGridFilter.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexGridFilter.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexGridFilter.meta={outputs:wjFlexGridFilterMeta.outputs};
WjFlexGridFilter.ɵfac = function WjFlexGridFilter_Factory(t) { return new (t || WjFlexGridFilter)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexGridFilter.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexGridFilter, selectors: [["wj-flex-grid-filter"]], inputs: { wjProperty: "wjProperty", showFilterIcons: "showFilterIcons", showSortButtons: "showSortButtons", defaultFilterType: "defaultFilterType", filterColumns: "filterColumns", exclusiveValueSearch: "exclusiveValueSearch", reApplyFilterOnUpdate: "reApplyFilterOnUpdate" }, outputs: { initialized: "initialized", editingFilterNg: "editingFilter", filterChangingNg: "filterChanging", filterChangedNg: "filterChanged", filterAppliedNg: "filterApplied" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexGridFilterMeta.providers))], decls: 0, vars: 0, template: function WjFlexGridFilter_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexGridFilter, [{
        type: Component,
        args: [{ selector: wjFlexGridFilterMeta.selector, template: wjFlexGridFilterMeta.template, inputs: wjFlexGridFilterMeta.inputs, outputs: wjFlexGridFilterMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexGridFilterMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexGridFilter=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexGridFilter)}(wjcGridFilter.FlexGridFilter);export{WjFlexGridFilter};var moduleExports=[WjFlexGridFilter],WjGridFilterModule=function(){function WjGridFilterModule(){}
WjGridFilterModule.ɵfac = function WjGridFilterModule_Factory(t) { return new (t || WjGridFilterModule)(); };
WjGridFilterModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjGridFilterModule });
WjGridFilterModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjGridFilterModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjGridFilterModule, { declarations: function () { return [WjFlexGridFilter]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjFlexGridFilter]; } }); })();return WjGridFilterModule}();export{WjGridFilterModule};