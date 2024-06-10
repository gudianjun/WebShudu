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
var WjFlexGridFilter_1,__decorate=this&&this.__decorate||function(e,t,r,i){var l,o=arguments.length,n=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(l=e[a])&&(n=(o<3?l(n):o>3?l(t,r,n):l(t,r))||n);return o>3&&n&&Object.defineProperty(t,r,n),n},__param=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior}from"@grapecity/wijmo.angular2.directivebase";import*as wjcGridFilter from"@grapecity/wijmo.grid.filter";var wjFlexGridFilterMeta={selector:"wj-flex-grid-filter",template:"",inputs:["wjProperty","showFilterIcons","showSortButtons","defaultFilterType","filterColumns","exclusiveValueSearch","reApplyFilterOnUpdate"],outputs:["initialized","editingFilterNg: editingFilter","filterChangingNg: filterChanging","filterChangedNg: filterChanged","filterAppliedNg: filterApplied"],providers:[]};export{wjFlexGridFilterMeta};let WjFlexGridFilter=WjFlexGridFilter_1=class WjFlexGridFilter extends wjcGridFilter.FlexGridFilter{constructor(e,t,r){super(r);this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexGridFilter.ɵfac = function WjFlexGridFilter_Factory(t) { return new (t || WjFlexGridFilter)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexGridFilter.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexGridFilter, selectors: [["wj-flex-grid-filter"]], inputs: { wjProperty: "wjProperty", showFilterIcons: "showFilterIcons", showSortButtons: "showSortButtons", defaultFilterType: "defaultFilterType", filterColumns: "filterColumns", exclusiveValueSearch: "exclusiveValueSearch", reApplyFilterOnUpdate: "reApplyFilterOnUpdate" }, outputs: { initialized: "initialized", editingFilterNg: "editingFilter", filterChangingNg: "filterChanging", filterChangedNg: "filterChanged", filterAppliedNg: "filterApplied" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexGridFilter_1) }, ...wjFlexGridFilterMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexGridFilter_Template(rf, ctx) { }, encapsulation: 2 });WjFlexGridFilter.meta={outputs:wjFlexGridFilterMeta.outputs};WjFlexGridFilter=WjFlexGridFilter_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexGridFilter);export{WjFlexGridFilter};let moduleExports=[WjFlexGridFilter],WjGridFilterModule=class WjGridFilterModule{};
WjGridFilterModule.ɵfac = function WjGridFilterModule_Factory(t) { return new (t || WjGridFilterModule)(); };
WjGridFilterModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjGridFilterModule });
WjGridFilterModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexGridFilter, [{
        type: Component,
        args: [{ selector: wjFlexGridFilterMeta.selector, template: wjFlexGridFilterMeta.template, inputs: wjFlexGridFilterMeta.inputs, outputs: wjFlexGridFilterMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexGridFilter_1) }, ...wjFlexGridFilterMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjGridFilterModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: [...moduleExports], exports: [...moduleExports] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjGridFilterModule, { declarations: function () { return [WjFlexGridFilter]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjFlexGridFilter]; } }); })();export{WjGridFilterModule};