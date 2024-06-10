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

var _c0 = ["*"];
var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,r,a){var i,n=arguments.length,o=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n<3?i(o):n>3?i(t,r,o):i(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o},__param=this&&this.__param||function(e,t){return function(r,a){t(r,a,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"@grapecity/wijmo.angular2.directivebase";import*as wjcChartRadar from"@grapecity/wijmo.chart.radar";var wjFlexRadarMeta={selector:"wj-flex-radar",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","renderEngine","isDisabled","tabOrder","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingX","interpolateNulls","legendToggle","symbolSize","options","selection","itemFormatter","labelContent","chartType","startAngle","totalAngle","reversed","stacking"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","selectionChangePC: selectionChange","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged","seriesVisibilityChangedNg: seriesVisibilityChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjFlexRadarMeta};var WjFlexRadar=function(e){__extends(WjFlexRadar,e);function WjFlexRadar(t,r,a){var i=e.call(this,WjDirectiveBehavior.getHostElement(t,r))||this;i.isInitialized=!1;i._wjBehaviour=WjDirectiveBehavior.attach(i,t,r,a);i.created();return i}t=WjFlexRadar;WjFlexRadar.prototype.created=function(){};WjFlexRadar.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexRadar.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexRadar.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjFlexRadar.prototype.addEventListener=function(t,r,a,i){var n=this;void 0===i&&(i=!1);var o=WjDirectiveBehavior,s=o.getZone(this);s&&o.outsideZoneEvents[r]?s.runOutsideAngular((function(){e.prototype.addEventListener.call(n,t,r,a,i)})):e.prototype.addEventListener.call(this,t,r,a,i)};Object.defineProperty(WjFlexRadar.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(e){this.tooltip.content=e},enumerable:!0,configurable:!0});Object.defineProperty(WjFlexRadar.prototype,"labelContent",{get:function(){return this.dataLabel.content},set:function(e){this.dataLabel.content=e},enumerable:!0,configurable:!0});var t;WjFlexRadar.meta={outputs:wjFlexRadarMeta.outputs,changeEvents:{selectionChanged:["selection"]}};
WjFlexRadar.ɵfac = function WjFlexRadar_Factory(t) { return new (t || WjFlexRadar)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexRadar.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexRadar, selectors: [["wj-flex-radar"]], inputs: { asyncBindings: "asyncBindings", wjModelProperty: "wjModelProperty", renderEngine: "renderEngine", isDisabled: "isDisabled", tabOrder: "tabOrder", binding: "binding", footer: "footer", header: "header", selectionMode: "selectionMode", palette: "palette", plotMargin: "plotMargin", footerStyle: "footerStyle", headerStyle: "headerStyle", tooltipContent: "tooltipContent", itemsSource: "itemsSource", bindingX: "bindingX", interpolateNulls: "interpolateNulls", legendToggle: "legendToggle", symbolSize: "symbolSize", options: "options", selection: "selection", itemFormatter: "itemFormatter", labelContent: "labelContent", chartType: "chartType", startAngle: "startAngle", totalAngle: "totalAngle", reversed: "reversed", stacking: "stacking" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", renderingNg: "rendering", renderedNg: "rendered", selectionChangedNg: "selectionChanged", selectionChangePC: "selectionChange", itemsSourceChangingNg: "itemsSourceChanging", itemsSourceChangedNg: "itemsSourceChanged", seriesVisibilityChangedNg: "seriesVisibilityChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexRadarMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexRadar_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexRadar, [{
        type: Component,
        args: [{ selector: wjFlexRadarMeta.selector, template: wjFlexRadarMeta.template, inputs: wjFlexRadarMeta.inputs, outputs: wjFlexRadarMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexRadarMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexRadar=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexRadar)}(wjcChartRadar.FlexRadar);export{WjFlexRadar};var wjFlexRadarAxisMeta={selector:"wj-flex-radar-axis",template:"",inputs:["wjProperty","axisLine","format","labels","majorGrid","majorTickMarks","majorUnit","max","min","position","reversed","title","labelAngle","minorGrid","minorTickMarks","minorUnit","origin","logBase","plotArea","labelAlign","name","overlappingLabels","labelPadding","itemFormatter","itemsSource","binding","labelMin","labelMax"],outputs:["initialized","rangeChangedNg: rangeChanged"],providers:[]};export{wjFlexRadarAxisMeta};var WjFlexRadarAxis=function(e){__extends(WjFlexRadarAxis,e);function WjFlexRadarAxis(t,r,a){var i=e.call(this)||this;i.isInitialized=!1;i.wjProperty="axes";i._wjBehaviour=WjDirectiveBehavior.attach(i,t,r,a);i.created();return i}t=WjFlexRadarAxis;WjFlexRadarAxis.prototype.created=function(){};WjFlexRadarAxis.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexRadarAxis.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexRadarAxis.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexRadarAxis.meta={outputs:wjFlexRadarAxisMeta.outputs};
WjFlexRadarAxis.ɵfac = function WjFlexRadarAxis_Factory(t) { return new (t || WjFlexRadarAxis)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexRadarAxis.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexRadarAxis, selectors: [["wj-flex-radar-axis"]], inputs: { wjProperty: "wjProperty", axisLine: "axisLine", format: "format", labels: "labels", majorGrid: "majorGrid", majorTickMarks: "majorTickMarks", majorUnit: "majorUnit", max: "max", min: "min", position: "position", reversed: "reversed", title: "title", labelAngle: "labelAngle", minorGrid: "minorGrid", minorTickMarks: "minorTickMarks", minorUnit: "minorUnit", origin: "origin", logBase: "logBase", plotArea: "plotArea", labelAlign: "labelAlign", name: "name", overlappingLabels: "overlappingLabels", labelPadding: "labelPadding", itemFormatter: "itemFormatter", itemsSource: "itemsSource", binding: "binding", labelMin: "labelMin", labelMax: "labelMax" }, outputs: { initialized: "initialized", rangeChangedNg: "rangeChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexRadarAxisMeta.providers))], decls: 0, vars: 0, template: function WjFlexRadarAxis_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexRadarAxis, [{
        type: Component,
        args: [{ selector: wjFlexRadarAxisMeta.selector, template: wjFlexRadarAxisMeta.template, inputs: wjFlexRadarAxisMeta.inputs, outputs: wjFlexRadarAxisMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexRadarAxisMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexRadarAxis=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexRadarAxis)}(wjcChartRadar.FlexRadarAxis);export{WjFlexRadarAxis};var wjFlexRadarSeriesMeta={selector:"wj-flex-radar-series",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","chartType"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexRadarSeriesMeta};var WjFlexRadarSeries=function(e){__extends(WjFlexRadarSeries,e);function WjFlexRadarSeries(t,r,a){var i=e.call(this)||this;i.isInitialized=!1;i.wjProperty="series";i._wjBehaviour=WjDirectiveBehavior.attach(i,t,r,a);i.created();return i}t=WjFlexRadarSeries;WjFlexRadarSeries.prototype.created=function(){};WjFlexRadarSeries.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexRadarSeries.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexRadarSeries.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexRadarSeries.meta={outputs:wjFlexRadarSeriesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};
WjFlexRadarSeries.ɵfac = function WjFlexRadarSeries_Factory(t) { return new (t || WjFlexRadarSeries)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexRadarSeries.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexRadarSeries, selectors: [["wj-flex-radar-series"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", chartType: "chartType" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexRadarSeriesMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexRadarSeries_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexRadarSeries, [{
        type: Component,
        args: [{ selector: wjFlexRadarSeriesMeta.selector, template: wjFlexRadarSeriesMeta.template, inputs: wjFlexRadarSeriesMeta.inputs, outputs: wjFlexRadarSeriesMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexRadarSeriesMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexRadarSeries=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexRadarSeries)}(wjcChartRadar.FlexRadarSeries);export{WjFlexRadarSeries};var moduleExports=[WjFlexRadar,WjFlexRadarAxis,WjFlexRadarSeries],WjChartRadarModule=function(){function WjChartRadarModule(){}
WjChartRadarModule.ɵfac = function WjChartRadarModule_Factory(t) { return new (t || WjChartRadarModule)(); };
WjChartRadarModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjChartRadarModule });
WjChartRadarModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjChartRadarModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjChartRadarModule, { declarations: function () { return [WjFlexRadar, WjFlexRadarAxis, WjFlexRadarSeries]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjFlexRadar, WjFlexRadarAxis, WjFlexRadarSeries]; } }); })();return WjChartRadarModule}();export{WjChartRadarModule};