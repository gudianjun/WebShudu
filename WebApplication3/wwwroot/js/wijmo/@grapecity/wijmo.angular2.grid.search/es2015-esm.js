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
var WjFlexGridSearch_1,__decorate=this&&this.__decorate||function(e,r,t,i){var o,a=arguments.length,c=a<3?r:null===i?i=Object.getOwnPropertyDescriptor(r,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,r,t,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(c=(a<3?o(c):a>3?o(r,t,c):o(r,t))||c);return a>3&&c&&Object.defineProperty(r,t,c),c},__param=this&&this.__param||function(e,r){return function(t,i){r(t,i,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"@grapecity/wijmo.angular2.directivebase";import*as wjcGridSearch from"@grapecity/wijmo.grid.search";var wjFlexGridSearchMeta={selector:"wj-flex-grid-search",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","text","delay","searchAllColumns","placeholder","cssMatch","grid"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjFlexGridSearchMeta};let WjFlexGridSearch=WjFlexGridSearch_1=class WjFlexGridSearch extends wjcGridSearch.FlexGridSearch{constructor(e,r,t){super(WjDirectiveBehavior.getHostElement(e,r));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,r,t);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,r,t,i=!1){let o=WjDirectiveBehavior,a=o.getZone(this);a&&o.outsideZoneEvents[r]?a.runOutsideAngular(()=>{super.addEventListener(e,r,t,i)}):super.addEventListener(e,r,t,i)}};
WjFlexGridSearch.ɵfac = function WjFlexGridSearch_Factory(t) { return new (t || WjFlexGridSearch)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexGridSearch.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexGridSearch, selectors: [["wj-flex-grid-search"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", text: "text", delay: "delay", searchAllColumns: "searchAllColumns", placeholder: "placeholder", cssMatch: "cssMatch", grid: "grid" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexGridSearch_1) }, ...wjFlexGridSearchMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexGridSearch_Template(rf, ctx) { }, encapsulation: 2 });WjFlexGridSearch.meta={outputs:wjFlexGridSearchMeta.outputs};WjFlexGridSearch=WjFlexGridSearch_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexGridSearch);export{WjFlexGridSearch};let moduleExports=[WjFlexGridSearch],WjGridSearchModule=class WjGridSearchModule{};
WjGridSearchModule.ɵfac = function WjGridSearchModule_Factory(t) { return new (t || WjGridSearchModule)(); };
WjGridSearchModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjGridSearchModule });
WjGridSearchModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexGridSearch, [{
        type: Component,
        args: [{ selector: wjFlexGridSearchMeta.selector, template: wjFlexGridSearchMeta.template, inputs: wjFlexGridSearchMeta.inputs, outputs: wjFlexGridSearchMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexGridSearch_1) }, ...wjFlexGridSearchMeta.providers] }]
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
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjGridSearchModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: [...moduleExports], exports: [...moduleExports] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjGridSearchModule, { declarations: function () { return [WjFlexGridSearch]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjFlexGridSearch]; } }); })();export{WjGridSearchModule};