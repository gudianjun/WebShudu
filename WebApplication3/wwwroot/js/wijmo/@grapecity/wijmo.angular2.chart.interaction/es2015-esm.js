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
var WjFlexChartRangeSelector_1,WjFlexChartGestures_1,__decorate=this&&this.__decorate||function(e,t,r,a){var o,n=arguments.length,s=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,a);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},__param=this&&this.__param||function(e,t){return function(r,a){t(r,a,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior}from"@grapecity/wijmo.angular2.directivebase";import*as wjcChartInteraction from"@grapecity/wijmo.chart.interaction";var wjFlexChartRangeSelectorMeta={selector:"wj-flex-chart-range-selector",template:"",inputs:["wjProperty","isVisible","min","max","orientation","seamless","minScale","maxScale"],outputs:["initialized","rangeChangedNg: rangeChanged"],providers:[]};export{wjFlexChartRangeSelectorMeta};let WjFlexChartRangeSelector=WjFlexChartRangeSelector_1=class WjFlexChartRangeSelector extends wjcChartInteraction.RangeSelector{constructor(e,t,r){super(r);this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartRangeSelector.ɵfac = function WjFlexChartRangeSelector_Factory(t) { return new (t || WjFlexChartRangeSelector)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartRangeSelector.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartRangeSelector, selectors: [["wj-flex-chart-range-selector"]], inputs: { wjProperty: "wjProperty", isVisible: "isVisible", min: "min", max: "max", orientation: "orientation", seamless: "seamless", minScale: "minScale", maxScale: "maxScale" }, outputs: { initialized: "initialized", rangeChangedNg: "rangeChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartRangeSelector_1) }, ...wjFlexChartRangeSelectorMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartRangeSelector_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartRangeSelector.meta={outputs:wjFlexChartRangeSelectorMeta.outputs};WjFlexChartRangeSelector=WjFlexChartRangeSelector_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartRangeSelector);export{WjFlexChartRangeSelector};var wjFlexChartGesturesMeta={selector:"wj-flex-chart-gestures",template:"",inputs:["wjProperty","mouseAction","interactiveAxes","enable","scaleX","scaleY","posX","posY"],outputs:["initialized"],providers:[]};export{wjFlexChartGesturesMeta};let WjFlexChartGestures=WjFlexChartGestures_1=class WjFlexChartGestures extends wjcChartInteraction.ChartGestures{constructor(e,t,r){super(r);this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartGestures.ɵfac = function WjFlexChartGestures_Factory(t) { return new (t || WjFlexChartGestures)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartGestures.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartGestures, selectors: [["wj-flex-chart-gestures"]], inputs: { wjProperty: "wjProperty", mouseAction: "mouseAction", interactiveAxes: "interactiveAxes", enable: "enable", scaleX: "scaleX", scaleY: "scaleY", posX: "posX", posY: "posY" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartGestures_1) }, ...wjFlexChartGesturesMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartGestures_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartGestures.meta={outputs:wjFlexChartGesturesMeta.outputs};WjFlexChartGestures=WjFlexChartGestures_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartGestures);export{WjFlexChartGestures};let moduleExports=[WjFlexChartRangeSelector,WjFlexChartGestures],WjChartInteractionModule=class WjChartInteractionModule{};
WjChartInteractionModule.ɵfac = function WjChartInteractionModule_Factory(t) { return new (t || WjChartInteractionModule)(); };
WjChartInteractionModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjChartInteractionModule });
WjChartInteractionModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartRangeSelector, [{
        type: Component,
        args: [{ selector: wjFlexChartRangeSelectorMeta.selector, template: wjFlexChartRangeSelectorMeta.template, inputs: wjFlexChartRangeSelectorMeta.inputs, outputs: wjFlexChartRangeSelectorMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartRangeSelector_1) }, ...wjFlexChartRangeSelectorMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartGestures, [{
        type: Component,
        args: [{ selector: wjFlexChartGesturesMeta.selector, template: wjFlexChartGesturesMeta.template, inputs: wjFlexChartGesturesMeta.inputs, outputs: wjFlexChartGesturesMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartGestures_1) }, ...wjFlexChartGesturesMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjChartInteractionModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: [...moduleExports], exports: [...moduleExports] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjChartInteractionModule, { declarations: function () { return [WjFlexChartRangeSelector, WjFlexChartGestures]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjFlexChartRangeSelector, WjFlexChartGestures]; } }); })();export{WjChartInteractionModule};