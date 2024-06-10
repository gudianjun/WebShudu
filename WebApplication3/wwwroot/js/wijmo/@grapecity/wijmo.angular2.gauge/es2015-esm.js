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

const _c0 = ["*"];
var WjLinearGauge_1,WjBulletGraph_1,WjRadialGauge_1,WjRange_1,__decorate=this&&this.__decorate||function(e,t,a,n){var i,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(r<3?i(o):r>3?i(t,a,o):i(t,a))||o);return r>3&&o&&Object.defineProperty(t,a,o),o},__param=this&&this.__param||function(e,t){return function(a,n){t(a,n,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"@grapecity/wijmo.angular2.directivebase";import*as wjcGauge from"@grapecity/wijmo.gauge";var wjLinearGaugeMeta={selector:"wj-linear-gauge",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","tabOrder","value","min","max","origin","isReadOnly","handleWheel","step","format","thickness","hasShadow","isAnimated","showText","showTicks","showTickText","showRanges","stackRanges","thumbSize","tickSpacing","getText","direction"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","valueChangedNg: valueChanged","valueChangePC: valueChange"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjLinearGaugeMeta};let WjLinearGauge=WjLinearGauge_1=class WjLinearGauge extends wjcGauge.LinearGauge{constructor(e,t,a){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this.wjModelProperty="value";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,a,n=!1){let i=WjDirectiveBehavior,r=i.getZone(this);r&&i.outsideZoneEvents[t]?r.runOutsideAngular(()=>{super.addEventListener(e,t,a,n)}):super.addEventListener(e,t,a,n)}};
WjLinearGauge.ɵfac = function WjLinearGauge_Factory(t) { return new (t || WjLinearGauge)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjLinearGauge.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjLinearGauge, selectors: [["wj-linear-gauge"]], inputs: { asyncBindings: "asyncBindings", wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", min: "min", max: "max", origin: "origin", isReadOnly: "isReadOnly", handleWheel: "handleWheel", step: "step", format: "format", thickness: "thickness", hasShadow: "hasShadow", isAnimated: "isAnimated", showText: "showText", showTicks: "showTicks", showTickText: "showTickText", showRanges: "showRanges", stackRanges: "stackRanges", thumbSize: "thumbSize", tickSpacing: "tickSpacing", getText: "getText", direction: "direction" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", valueChangedNg: "valueChanged", valueChangePC: "valueChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjLinearGauge_1) }, ...wjLinearGaugeMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjLinearGauge_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });WjLinearGauge.meta={outputs:wjLinearGaugeMeta.outputs,changeEvents:{valueChanged:["value"]}};WjLinearGauge=WjLinearGauge_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjLinearGauge);export{WjLinearGauge};var wjBulletGraphMeta={selector:"wj-bullet-graph",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","tabOrder","value","min","max","origin","isReadOnly","handleWheel","step","format","thickness","hasShadow","isAnimated","showText","showTicks","showTickText","showRanges","stackRanges","thumbSize","tickSpacing","getText","direction","target","good","bad"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","valueChangedNg: valueChanged","valueChangePC: valueChange"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBulletGraphMeta};let WjBulletGraph=WjBulletGraph_1=class WjBulletGraph extends wjcGauge.BulletGraph{constructor(e,t,a){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this.wjModelProperty="value";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,a,n=!1){let i=WjDirectiveBehavior,r=i.getZone(this);r&&i.outsideZoneEvents[t]?r.runOutsideAngular(()=>{super.addEventListener(e,t,a,n)}):super.addEventListener(e,t,a,n)}};
WjBulletGraph.ɵfac = function WjBulletGraph_Factory(t) { return new (t || WjBulletGraph)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBulletGraph.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBulletGraph, selectors: [["wj-bullet-graph"]], inputs: { asyncBindings: "asyncBindings", wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", min: "min", max: "max", origin: "origin", isReadOnly: "isReadOnly", handleWheel: "handleWheel", step: "step", format: "format", thickness: "thickness", hasShadow: "hasShadow", isAnimated: "isAnimated", showText: "showText", showTicks: "showTicks", showTickText: "showTickText", showRanges: "showRanges", stackRanges: "stackRanges", thumbSize: "thumbSize", tickSpacing: "tickSpacing", getText: "getText", direction: "direction", target: "target", good: "good", bad: "bad" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", valueChangedNg: "valueChanged", valueChangePC: "valueChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjBulletGraph_1) }, ...wjBulletGraphMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjBulletGraph_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });WjBulletGraph.meta={outputs:wjBulletGraphMeta.outputs,changeEvents:{valueChanged:["value"]}};WjBulletGraph=WjBulletGraph_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBulletGraph);export{WjBulletGraph};var wjRadialGaugeMeta={selector:"wj-radial-gauge",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","tabOrder","value","min","max","origin","isReadOnly","handleWheel","step","format","thickness","hasShadow","isAnimated","showText","showTicks","showTickText","showRanges","stackRanges","thumbSize","tickSpacing","getText","autoScale","startAngle","sweepAngle","needleShape","needleLength","needleElement"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","valueChangedNg: valueChanged","valueChangePC: valueChange"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjRadialGaugeMeta};let WjRadialGauge=WjRadialGauge_1=class WjRadialGauge extends wjcGauge.RadialGauge{constructor(e,t,a){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this.wjModelProperty="value";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,a,n=!1){let i=WjDirectiveBehavior,r=i.getZone(this);r&&i.outsideZoneEvents[t]?r.runOutsideAngular(()=>{super.addEventListener(e,t,a,n)}):super.addEventListener(e,t,a,n)}};
WjRadialGauge.ɵfac = function WjRadialGauge_Factory(t) { return new (t || WjRadialGauge)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjRadialGauge.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjRadialGauge, selectors: [["wj-radial-gauge"]], inputs: { asyncBindings: "asyncBindings", wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", min: "min", max: "max", origin: "origin", isReadOnly: "isReadOnly", handleWheel: "handleWheel", step: "step", format: "format", thickness: "thickness", hasShadow: "hasShadow", isAnimated: "isAnimated", showText: "showText", showTicks: "showTicks", showTickText: "showTickText", showRanges: "showRanges", stackRanges: "stackRanges", thumbSize: "thumbSize", tickSpacing: "tickSpacing", getText: "getText", autoScale: "autoScale", startAngle: "startAngle", sweepAngle: "sweepAngle", needleShape: "needleShape", needleLength: "needleLength", needleElement: "needleElement" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", valueChangedNg: "valueChanged", valueChangePC: "valueChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjRadialGauge_1) }, ...wjRadialGaugeMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjRadialGauge_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });WjRadialGauge.meta={outputs:wjRadialGaugeMeta.outputs,changeEvents:{valueChanged:["value"]}};WjRadialGauge=WjRadialGauge_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjRadialGauge);export{WjRadialGauge};var wjRangeMeta={selector:"wj-range",template:"",inputs:["wjProperty","color","min","max","name","thickness"],outputs:["initialized"],providers:[]};export{wjRangeMeta};let WjRange=WjRange_1=class WjRange extends wjcGauge.Range{constructor(e,t,a){super();this.isInitialized=!1;this.wjProperty="ranges";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjRange.ɵfac = function WjRange_Factory(t) { return new (t || WjRange)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjRange.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjRange, selectors: [["wj-range"]], inputs: { wjProperty: "wjProperty", color: "color", min: "min", max: "max", name: "name", thickness: "thickness" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjRange_1) }, ...wjRangeMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjRange_Template(rf, ctx) { }, encapsulation: 2 });WjRange.meta={outputs:wjRangeMeta.outputs};WjRange=WjRange_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjRange);export{WjRange};let moduleExports=[WjLinearGauge,WjBulletGraph,WjRadialGauge,WjRange],WjGaugeModule=class WjGaugeModule{};
WjGaugeModule.ɵfac = function WjGaugeModule_Factory(t) { return new (t || WjGaugeModule)(); };
WjGaugeModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjGaugeModule });
WjGaugeModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjLinearGauge, [{
        type: Component,
        args: [{ selector: wjLinearGaugeMeta.selector, template: wjLinearGaugeMeta.template, inputs: wjLinearGaugeMeta.inputs, outputs: wjLinearGaugeMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjLinearGauge_1) }, ...wjLinearGaugeMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBulletGraph, [{
        type: Component,
        args: [{ selector: wjBulletGraphMeta.selector, template: wjBulletGraphMeta.template, inputs: wjBulletGraphMeta.inputs, outputs: wjBulletGraphMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjBulletGraph_1) }, ...wjBulletGraphMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjRadialGauge, [{
        type: Component,
        args: [{ selector: wjRadialGaugeMeta.selector, template: wjRadialGaugeMeta.template, inputs: wjRadialGaugeMeta.inputs, outputs: wjRadialGaugeMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjRadialGauge_1) }, ...wjRadialGaugeMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjRange, [{
        type: Component,
        args: [{ selector: wjRangeMeta.selector, template: wjRangeMeta.template, inputs: wjRangeMeta.inputs, outputs: wjRangeMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjRange_1) }, ...wjRangeMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjGaugeModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: [...moduleExports], exports: [...moduleExports] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjGaugeModule, { declarations: function () { return [WjLinearGauge, WjBulletGraph, WjRadialGauge, WjRange]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjLinearGauge, WjBulletGraph, WjRadialGauge, WjRange]; } }); })();export{WjGaugeModule};