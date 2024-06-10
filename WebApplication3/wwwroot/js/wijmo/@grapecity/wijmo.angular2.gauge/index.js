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

var _c0 = ["*"];
var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,a,r){var n,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,r);else for(var u=e.length-1;u>=0;u--)(n=e[u])&&(i=(o<3?n(i):o>3?n(t,a,i):n(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i},__param=this&&this.__param||function(e,t){return function(a,r){t(a,r,e)}},__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),wijmo_angular2_directivebase_1=require("@grapecity/wijmo.angular2.directivebase"),wjcGauge=__importStar(require("@grapecity/wijmo.gauge")),wjLinearGaugeMeta={selector:"wj-linear-gauge",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","tabOrder","value","min","max","origin","isReadOnly","handleWheel","step","format","thickness","hasShadow","isAnimated","showText","showTicks","showTickText","showRanges","stackRanges","thumbSize","tickSpacing","getText","direction"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","valueChangedNg: valueChanged","valueChangePC: valueChange"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directivebase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjLinearGaugeMeta=wjLinearGaugeMeta;var WjLinearGauge=function(e){__extends(WjLinearGauge,e);function WjLinearGauge(t,a,r){var n=e.call(this,wijmo_angular2_directivebase_1.WjDirectiveBehavior.getHostElement(t,a))||this;n.isInitialized=!1;n.wjModelProperty="value";n._wjBehaviour=wijmo_angular2_directivebase_1.WjDirectiveBehavior.attach(n,t,a,r);n.created();return n}t=WjLinearGauge;WjLinearGauge.prototype.created=function(){};WjLinearGauge.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjLinearGauge.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjLinearGauge.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjLinearGauge.prototype.addEventListener=function(t,a,r,n){var o=this;void 0===n&&(n=!1);var i=wijmo_angular2_directivebase_1.WjDirectiveBehavior,u=i.getZone(this);u&&i.outsideZoneEvents[a]?u.runOutsideAngular((function(){e.prototype.addEventListener.call(o,t,a,r,n)})):e.prototype.addEventListener.call(this,t,a,r,n)};var t;WjLinearGauge.meta={outputs:wjLinearGaugeMeta.outputs,changeEvents:{valueChanged:["value"]}};
WjLinearGauge.ɵfac = function WjLinearGauge_Factory(t) { return new (t || WjLinearGauge)(ɵngcc0.ɵɵdirectiveInject(core_1.ElementRef), ɵngcc0.ɵɵdirectiveInject(core_1.Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjLinearGauge.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjLinearGauge, selectors: [["wj-linear-gauge"]], inputs: { asyncBindings: "asyncBindings", wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", min: "min", max: "max", origin: "origin", isReadOnly: "isReadOnly", handleWheel: "handleWheel", step: "step", format: "format", thickness: "thickness", hasShadow: "hasShadow", isAnimated: "isAnimated", showText: "showText", showTicks: "showTicks", showTickText: "showTickText", showRanges: "showRanges", stackRanges: "stackRanges", thumbSize: "thumbSize", tickSpacing: "tickSpacing", getText: "getText", direction: "direction" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", valueChangedNg: "valueChanged", valueChangePC: "valueChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: core_1.forwardRef((function () { return t; })) }].concat(wjLinearGaugeMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjLinearGauge_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjLinearGauge, [{
        type: core_1.Component,
        args: [{ selector: wjLinearGaugeMeta.selector, template: wjLinearGaugeMeta.template, inputs: wjLinearGaugeMeta.inputs, outputs: wjLinearGaugeMeta.outputs, providers: [{ provide: "WjComponent", useExisting: core_1.forwardRef((function () { return t; })) }].concat(wjLinearGaugeMeta.providers) }]
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
            }] }]; }, null); })();return WjLinearGauge=t=__decorate([,__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjLinearGauge)}(wjcGauge.LinearGauge);exports.WjLinearGauge=WjLinearGauge;var wjBulletGraphMeta={selector:"wj-bullet-graph",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","tabOrder","value","min","max","origin","isReadOnly","handleWheel","step","format","thickness","hasShadow","isAnimated","showText","showTicks","showTickText","showRanges","stackRanges","thumbSize","tickSpacing","getText","direction","target","good","bad"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","valueChangedNg: valueChanged","valueChangePC: valueChange"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directivebase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjBulletGraphMeta=wjBulletGraphMeta;var WjBulletGraph=function(e){__extends(WjBulletGraph,e);function WjBulletGraph(t,a,r){var n=e.call(this,wijmo_angular2_directivebase_1.WjDirectiveBehavior.getHostElement(t,a))||this;n.isInitialized=!1;n.wjModelProperty="value";n._wjBehaviour=wijmo_angular2_directivebase_1.WjDirectiveBehavior.attach(n,t,a,r);n.created();return n}t=WjBulletGraph;WjBulletGraph.prototype.created=function(){};WjBulletGraph.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjBulletGraph.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjBulletGraph.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjBulletGraph.prototype.addEventListener=function(t,a,r,n){var o=this;void 0===n&&(n=!1);var i=wijmo_angular2_directivebase_1.WjDirectiveBehavior,u=i.getZone(this);u&&i.outsideZoneEvents[a]?u.runOutsideAngular((function(){e.prototype.addEventListener.call(o,t,a,r,n)})):e.prototype.addEventListener.call(this,t,a,r,n)};var t;WjBulletGraph.meta={outputs:wjBulletGraphMeta.outputs,changeEvents:{valueChanged:["value"]}};
WjBulletGraph.ɵfac = function WjBulletGraph_Factory(t) { return new (t || WjBulletGraph)(ɵngcc0.ɵɵdirectiveInject(core_1.ElementRef), ɵngcc0.ɵɵdirectiveInject(core_1.Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBulletGraph.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBulletGraph, selectors: [["wj-bullet-graph"]], inputs: { asyncBindings: "asyncBindings", wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", min: "min", max: "max", origin: "origin", isReadOnly: "isReadOnly", handleWheel: "handleWheel", step: "step", format: "format", thickness: "thickness", hasShadow: "hasShadow", isAnimated: "isAnimated", showText: "showText", showTicks: "showTicks", showTickText: "showTickText", showRanges: "showRanges", stackRanges: "stackRanges", thumbSize: "thumbSize", tickSpacing: "tickSpacing", getText: "getText", direction: "direction", target: "target", good: "good", bad: "bad" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", valueChangedNg: "valueChanged", valueChangePC: "valueChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: core_1.forwardRef((function () { return t; })) }].concat(wjBulletGraphMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjBulletGraph_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBulletGraph, [{
        type: core_1.Component,
        args: [{ selector: wjBulletGraphMeta.selector, template: wjBulletGraphMeta.template, inputs: wjBulletGraphMeta.inputs, outputs: wjBulletGraphMeta.outputs, providers: [{ provide: "WjComponent", useExisting: core_1.forwardRef((function () { return t; })) }].concat(wjBulletGraphMeta.providers) }]
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
            }] }]; }, null); })();return WjBulletGraph=t=__decorate([,__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjBulletGraph)}(wjcGauge.BulletGraph);exports.WjBulletGraph=WjBulletGraph;var wjRadialGaugeMeta={selector:"wj-radial-gauge",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","tabOrder","value","min","max","origin","isReadOnly","handleWheel","step","format","thickness","hasShadow","isAnimated","showText","showTicks","showTickText","showRanges","stackRanges","thumbSize","tickSpacing","getText","autoScale","startAngle","sweepAngle","needleShape","needleLength","needleElement"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","valueChangedNg: valueChanged","valueChangePC: valueChange"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directivebase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjRadialGaugeMeta=wjRadialGaugeMeta;var WjRadialGauge=function(e){__extends(WjRadialGauge,e);function WjRadialGauge(t,a,r){var n=e.call(this,wijmo_angular2_directivebase_1.WjDirectiveBehavior.getHostElement(t,a))||this;n.isInitialized=!1;n.wjModelProperty="value";n._wjBehaviour=wijmo_angular2_directivebase_1.WjDirectiveBehavior.attach(n,t,a,r);n.created();return n}t=WjRadialGauge;WjRadialGauge.prototype.created=function(){};WjRadialGauge.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjRadialGauge.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjRadialGauge.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjRadialGauge.prototype.addEventListener=function(t,a,r,n){var o=this;void 0===n&&(n=!1);var i=wijmo_angular2_directivebase_1.WjDirectiveBehavior,u=i.getZone(this);u&&i.outsideZoneEvents[a]?u.runOutsideAngular((function(){e.prototype.addEventListener.call(o,t,a,r,n)})):e.prototype.addEventListener.call(this,t,a,r,n)};var t;WjRadialGauge.meta={outputs:wjRadialGaugeMeta.outputs,changeEvents:{valueChanged:["value"]}};
WjRadialGauge.ɵfac = function WjRadialGauge_Factory(t) { return new (t || WjRadialGauge)(ɵngcc0.ɵɵdirectiveInject(core_1.ElementRef), ɵngcc0.ɵɵdirectiveInject(core_1.Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjRadialGauge.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjRadialGauge, selectors: [["wj-radial-gauge"]], inputs: { asyncBindings: "asyncBindings", wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", min: "min", max: "max", origin: "origin", isReadOnly: "isReadOnly", handleWheel: "handleWheel", step: "step", format: "format", thickness: "thickness", hasShadow: "hasShadow", isAnimated: "isAnimated", showText: "showText", showTicks: "showTicks", showTickText: "showTickText", showRanges: "showRanges", stackRanges: "stackRanges", thumbSize: "thumbSize", tickSpacing: "tickSpacing", getText: "getText", autoScale: "autoScale", startAngle: "startAngle", sweepAngle: "sweepAngle", needleShape: "needleShape", needleLength: "needleLength", needleElement: "needleElement" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", valueChangedNg: "valueChanged", valueChangePC: "valueChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: core_1.forwardRef((function () { return t; })) }].concat(wjRadialGaugeMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjRadialGauge_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjRadialGauge, [{
        type: core_1.Component,
        args: [{ selector: wjRadialGaugeMeta.selector, template: wjRadialGaugeMeta.template, inputs: wjRadialGaugeMeta.inputs, outputs: wjRadialGaugeMeta.outputs, providers: [{ provide: "WjComponent", useExisting: core_1.forwardRef((function () { return t; })) }].concat(wjRadialGaugeMeta.providers) }]
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
            }] }]; }, null); })();return WjRadialGauge=t=__decorate([,__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjRadialGauge)}(wjcGauge.RadialGauge);exports.WjRadialGauge=WjRadialGauge;var wjRangeMeta={selector:"wj-range",template:"",inputs:["wjProperty","color","min","max","name","thickness"],outputs:["initialized"],providers:[]};exports.wjRangeMeta=wjRangeMeta;var WjRange=function(e){__extends(WjRange,e);function WjRange(t,a,r){var n=e.call(this)||this;n.isInitialized=!1;n.wjProperty="ranges";n._wjBehaviour=wijmo_angular2_directivebase_1.WjDirectiveBehavior.attach(n,t,a,r);n.created();return n}t=WjRange;WjRange.prototype.created=function(){};WjRange.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjRange.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjRange.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjRange.meta={outputs:wjRangeMeta.outputs};
WjRange.ɵfac = function WjRange_Factory(t) { return new (t || WjRange)(ɵngcc0.ɵɵdirectiveInject(core_1.ElementRef), ɵngcc0.ɵɵdirectiveInject(core_1.Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjRange.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjRange, selectors: [["wj-range"]], inputs: { wjProperty: "wjProperty", color: "color", min: "min", max: "max", name: "name", thickness: "thickness" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: core_1.forwardRef((function () { return t; })) }].concat(wjRangeMeta.providers))], decls: 0, vars: 0, template: function WjRange_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjRange, [{
        type: core_1.Component,
        args: [{ selector: wjRangeMeta.selector, template: wjRangeMeta.template, inputs: wjRangeMeta.inputs, outputs: wjRangeMeta.outputs, providers: [{ provide: "WjComponent", useExisting: core_1.forwardRef((function () { return t; })) }].concat(wjRangeMeta.providers) }]
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
            }] }]; }, null); })();return WjRange=t=__decorate([,__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjRange)}(wjcGauge.Range);exports.WjRange=WjRange;var moduleExports=[WjLinearGauge,WjBulletGraph,WjRadialGauge,WjRange],WjGaugeModule=function(){function WjGaugeModule(){}
WjGaugeModule.ɵfac = function WjGaugeModule_Factory(t) { return new (t || WjGaugeModule)(); };
WjGaugeModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjGaugeModule });
WjGaugeModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [common_1.CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjGaugeModule, [{
        type: core_1.NgModule,
        args: [{ imports: [common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjGaugeModule, { declarations: [WjLinearGauge, WjBulletGraph, WjRadialGauge, WjRange], imports: [ɵngcc1.CommonModule], exports: [WjLinearGauge, WjBulletGraph, WjRadialGauge, WjRange] }); })();return WjGaugeModule}();exports.WjGaugeModule=WjGaugeModule;