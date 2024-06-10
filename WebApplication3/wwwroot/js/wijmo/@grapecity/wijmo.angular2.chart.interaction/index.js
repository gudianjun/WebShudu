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

"use strict";var ɵngcc0 = require('@angular/core');
var ɵngcc1 = require('@angular/common');
var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,r,a){var o,n=arguments.length,i=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,a);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n<3?o(i):n>3?o(t,r,i):o(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i},__param=this&&this.__param||function(e,t){return function(r,a){t(r,a,e)}},__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),common_1=require("@angular/common"),wijmo_angular2_directivebase_1=require("@grapecity/wijmo.angular2.directivebase"),wjcChartInteraction=__importStar(require("@grapecity/wijmo.chart.interaction")),wjFlexChartRangeSelectorMeta={selector:"wj-flex-chart-range-selector",template:"",inputs:["wjProperty","isVisible","min","max","orientation","seamless","minScale","maxScale"],outputs:["initialized","rangeChangedNg: rangeChanged"],providers:[]};exports.wjFlexChartRangeSelectorMeta=wjFlexChartRangeSelectorMeta;var WjFlexChartRangeSelector=function(e){__extends(WjFlexChartRangeSelector,e);function WjFlexChartRangeSelector(t,r,a){var o=e.call(this,a)||this;o.isInitialized=!1;o._wjBehaviour=wijmo_angular2_directivebase_1.WjDirectiveBehavior.attach(o,t,r,a);o.created();return o}t=WjFlexChartRangeSelector;WjFlexChartRangeSelector.prototype.created=function(){};WjFlexChartRangeSelector.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartRangeSelector.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartRangeSelector.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartRangeSelector.meta={outputs:wjFlexChartRangeSelectorMeta.outputs};
WjFlexChartRangeSelector.ɵfac = function WjFlexChartRangeSelector_Factory(t) { return new (t || WjFlexChartRangeSelector)(ɵngcc0.ɵɵdirectiveInject(core_1.ElementRef), ɵngcc0.ɵɵdirectiveInject(core_1.Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartRangeSelector.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartRangeSelector, selectors: [["wj-flex-chart-range-selector"]], inputs: { wjProperty: "wjProperty", isVisible: "isVisible", min: "min", max: "max", orientation: "orientation", seamless: "seamless", minScale: "minScale", maxScale: "maxScale" }, outputs: { initialized: "initialized", rangeChangedNg: "rangeChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: core_1.forwardRef((function () { return t; })) }].concat(wjFlexChartRangeSelectorMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartRangeSelector_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartRangeSelector, [{
        type: core_1.Component,
        args: [{ selector: wjFlexChartRangeSelectorMeta.selector, template: wjFlexChartRangeSelectorMeta.template, inputs: wjFlexChartRangeSelectorMeta.inputs, outputs: wjFlexChartRangeSelectorMeta.outputs, providers: [{ provide: "WjComponent", useExisting: core_1.forwardRef((function () { return t; })) }].concat(wjFlexChartRangeSelectorMeta.providers) }]
    }], function () { return [{ type: undefined, decorators: [{
                type: core_1.Inject,
                args: [core_1.ElementRef]
            }] }, { type: undefined, decorators: [{
                type: core_1.Inject,
                args: [core_1.Injector]
            }] }, { type: undefined, decorators: [{
                type: core_1.Inject,
                args: ["WjComponent"]
            }, {
                type: core_1.SkipSelf
            }, {
                type: core_1.Optional
            }] }]; }, null); })();return WjFlexChartRangeSelector=t=__decorate([,__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartRangeSelector)}(wjcChartInteraction.RangeSelector);exports.WjFlexChartRangeSelector=WjFlexChartRangeSelector;var wjFlexChartGesturesMeta={selector:"wj-flex-chart-gestures",template:"",inputs:["wjProperty","mouseAction","interactiveAxes","enable","scaleX","scaleY","posX","posY"],outputs:["initialized"],providers:[]};exports.wjFlexChartGesturesMeta=wjFlexChartGesturesMeta;var WjFlexChartGestures=function(e){__extends(WjFlexChartGestures,e);function WjFlexChartGestures(t,r,a){var o=e.call(this,a)||this;o.isInitialized=!1;o._wjBehaviour=wijmo_angular2_directivebase_1.WjDirectiveBehavior.attach(o,t,r,a);o.created();return o}t=WjFlexChartGestures;WjFlexChartGestures.prototype.created=function(){};WjFlexChartGestures.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartGestures.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartGestures.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartGestures.meta={outputs:wjFlexChartGesturesMeta.outputs};
WjFlexChartGestures.ɵfac = function WjFlexChartGestures_Factory(t) { return new (t || WjFlexChartGestures)(ɵngcc0.ɵɵdirectiveInject(core_1.ElementRef), ɵngcc0.ɵɵdirectiveInject(core_1.Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartGestures.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartGestures, selectors: [["wj-flex-chart-gestures"]], inputs: { wjProperty: "wjProperty", mouseAction: "mouseAction", interactiveAxes: "interactiveAxes", enable: "enable", scaleX: "scaleX", scaleY: "scaleY", posX: "posX", posY: "posY" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: core_1.forwardRef((function () { return t; })) }].concat(wjFlexChartGesturesMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartGestures_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartGestures, [{
        type: core_1.Component,
        args: [{ selector: wjFlexChartGesturesMeta.selector, template: wjFlexChartGesturesMeta.template, inputs: wjFlexChartGesturesMeta.inputs, outputs: wjFlexChartGesturesMeta.outputs, providers: [{ provide: "WjComponent", useExisting: core_1.forwardRef((function () { return t; })) }].concat(wjFlexChartGesturesMeta.providers) }]
    }], function () { return [{ type: undefined, decorators: [{
                type: core_1.Inject,
                args: [core_1.ElementRef]
            }] }, { type: undefined, decorators: [{
                type: core_1.Inject,
                args: [core_1.Injector]
            }] }, { type: undefined, decorators: [{
                type: core_1.Inject,
                args: ["WjComponent"]
            }, {
                type: core_1.SkipSelf
            }, {
                type: core_1.Optional
            }] }]; }, null); })();return WjFlexChartGestures=t=__decorate([,__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartGestures)}(wjcChartInteraction.ChartGestures);exports.WjFlexChartGestures=WjFlexChartGestures;var moduleExports=[WjFlexChartRangeSelector,WjFlexChartGestures],WjChartInteractionModule=function(){function WjChartInteractionModule(){}
WjChartInteractionModule.ɵfac = function WjChartInteractionModule_Factory(t) { return new (t || WjChartInteractionModule)(); };
WjChartInteractionModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjChartInteractionModule });
WjChartInteractionModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [common_1.CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjChartInteractionModule, [{
        type: core_1.NgModule,
        args: [{ imports: [common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjChartInteractionModule, { declarations: [WjFlexChartRangeSelector, WjFlexChartGestures], imports: [ɵngcc1.CommonModule], exports: [WjFlexChartRangeSelector, WjFlexChartGestures] }); })();return WjChartInteractionModule}();exports.WjChartInteractionModule=WjChartInteractionModule;