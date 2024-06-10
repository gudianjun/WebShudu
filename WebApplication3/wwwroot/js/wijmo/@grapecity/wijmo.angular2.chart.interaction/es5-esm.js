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
var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,r,o){var a,n=arguments.length,i=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(n<3?a(i):n>3?a(t,r,i):a(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i},__param=this&&this.__param||function(e,t){return function(r,o){t(r,o,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior}from"@grapecity/wijmo.angular2.directivebase";import*as wjcChartInteraction from"@grapecity/wijmo.chart.interaction";var wjFlexChartRangeSelectorMeta={selector:"wj-flex-chart-range-selector",template:"",inputs:["wjProperty","isVisible","min","max","orientation","seamless","minScale","maxScale"],outputs:["initialized","rangeChangedNg: rangeChanged"],providers:[]};export{wjFlexChartRangeSelectorMeta};var WjFlexChartRangeSelector=function(e){__extends(WjFlexChartRangeSelector,e);function WjFlexChartRangeSelector(t,r,o){var a=e.call(this,o)||this;a.isInitialized=!1;a._wjBehaviour=WjDirectiveBehavior.attach(a,t,r,o);a.created();return a}t=WjFlexChartRangeSelector;WjFlexChartRangeSelector.prototype.created=function(){};WjFlexChartRangeSelector.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartRangeSelector.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartRangeSelector.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartRangeSelector.meta={outputs:wjFlexChartRangeSelectorMeta.outputs};
WjFlexChartRangeSelector.ɵfac = function WjFlexChartRangeSelector_Factory(t) { return new (t || WjFlexChartRangeSelector)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartRangeSelector.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartRangeSelector, selectors: [["wj-flex-chart-range-selector"]], inputs: { wjProperty: "wjProperty", isVisible: "isVisible", min: "min", max: "max", orientation: "orientation", seamless: "seamless", minScale: "minScale", maxScale: "maxScale" }, outputs: { initialized: "initialized", rangeChangedNg: "rangeChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartRangeSelectorMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartRangeSelector_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartRangeSelector, [{
        type: Component,
        args: [{ selector: wjFlexChartRangeSelectorMeta.selector, template: wjFlexChartRangeSelectorMeta.template, inputs: wjFlexChartRangeSelectorMeta.inputs, outputs: wjFlexChartRangeSelectorMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartRangeSelectorMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexChartRangeSelector=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartRangeSelector)}(wjcChartInteraction.RangeSelector);export{WjFlexChartRangeSelector};var wjFlexChartGesturesMeta={selector:"wj-flex-chart-gestures",template:"",inputs:["wjProperty","mouseAction","interactiveAxes","enable","scaleX","scaleY","posX","posY"],outputs:["initialized"],providers:[]};export{wjFlexChartGesturesMeta};var WjFlexChartGestures=function(e){__extends(WjFlexChartGestures,e);function WjFlexChartGestures(t,r,o){var a=e.call(this,o)||this;a.isInitialized=!1;a._wjBehaviour=WjDirectiveBehavior.attach(a,t,r,o);a.created();return a}t=WjFlexChartGestures;WjFlexChartGestures.prototype.created=function(){};WjFlexChartGestures.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartGestures.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartGestures.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartGestures.meta={outputs:wjFlexChartGesturesMeta.outputs};
WjFlexChartGestures.ɵfac = function WjFlexChartGestures_Factory(t) { return new (t || WjFlexChartGestures)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartGestures.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartGestures, selectors: [["wj-flex-chart-gestures"]], inputs: { wjProperty: "wjProperty", mouseAction: "mouseAction", interactiveAxes: "interactiveAxes", enable: "enable", scaleX: "scaleX", scaleY: "scaleY", posX: "posX", posY: "posY" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartGesturesMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartGestures_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartGestures, [{
        type: Component,
        args: [{ selector: wjFlexChartGesturesMeta.selector, template: wjFlexChartGesturesMeta.template, inputs: wjFlexChartGesturesMeta.inputs, outputs: wjFlexChartGesturesMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartGesturesMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexChartGestures=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartGestures)}(wjcChartInteraction.ChartGestures);export{WjFlexChartGestures};var moduleExports=[WjFlexChartRangeSelector,WjFlexChartGestures],WjChartInteractionModule=function(){function WjChartInteractionModule(){}
WjChartInteractionModule.ɵfac = function WjChartInteractionModule_Factory(t) { return new (t || WjChartInteractionModule)(); };
WjChartInteractionModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjChartInteractionModule });
WjChartInteractionModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjChartInteractionModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjChartInteractionModule, { declarations: function () { return [WjFlexChartRangeSelector, WjFlexChartGestures]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjFlexChartRangeSelector, WjFlexChartGestures]; } }); })();return WjChartInteractionModule}();export{WjChartInteractionModule};