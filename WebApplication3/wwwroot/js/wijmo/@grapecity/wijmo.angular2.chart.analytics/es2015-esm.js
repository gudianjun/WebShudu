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
var WjFlexChartTrendLine_1,WjFlexChartMovingAverage_1,WjFlexChartYFunctionSeries_1,WjFlexChartParametricFunctionSeries_1,WjFlexChartWaterfall_1,WjFlexChartBoxWhisker_1,WjFlexChartErrorBar_1,WjFlexChartBreakEven_1,__decorate=this&&this.__decorate||function(e,t,r,i){var a,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(s=(n<3?a(s):n>3?a(t,r,s):a(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},__param=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior}from"@grapecity/wijmo.angular2.directivebase";import*as wjcChartAnalytics from"@grapecity/wijmo.chart.analytics";var wjFlexChartTrendLineMeta={selector:"wj-flex-chart-trend-line",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","order","fitType"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartTrendLineMeta};let WjFlexChartTrendLine=WjFlexChartTrendLine_1=class WjFlexChartTrendLine extends wjcChartAnalytics.TrendLine{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartTrendLine.ɵfac = function WjFlexChartTrendLine_Factory(t) { return new (t || WjFlexChartTrendLine)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartTrendLine.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartTrendLine, selectors: [["wj-flex-chart-trend-line"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", sampleCount: "sampleCount", order: "order", fitType: "fitType" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartTrendLine_1) }, ...wjFlexChartTrendLineMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartTrendLine_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartTrendLine.meta={outputs:wjFlexChartTrendLineMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartTrendLine=WjFlexChartTrendLine_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartTrendLine);export{WjFlexChartTrendLine};var wjFlexChartMovingAverageMeta={selector:"wj-flex-chart-moving-average",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","period","type"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartMovingAverageMeta};let WjFlexChartMovingAverage=WjFlexChartMovingAverage_1=class WjFlexChartMovingAverage extends wjcChartAnalytics.MovingAverage{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartMovingAverage.ɵfac = function WjFlexChartMovingAverage_Factory(t) { return new (t || WjFlexChartMovingAverage)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartMovingAverage.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartMovingAverage, selectors: [["wj-flex-chart-moving-average"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", sampleCount: "sampleCount", period: "period", type: "type" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartMovingAverage_1) }, ...wjFlexChartMovingAverageMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartMovingAverage_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartMovingAverage.meta={outputs:wjFlexChartMovingAverageMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartMovingAverage=WjFlexChartMovingAverage_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartMovingAverage);export{WjFlexChartMovingAverage};var wjFlexChartYFunctionSeriesMeta={selector:"wj-flex-chart-y-function-series",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","min","max","func"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartYFunctionSeriesMeta};let WjFlexChartYFunctionSeries=WjFlexChartYFunctionSeries_1=class WjFlexChartYFunctionSeries extends wjcChartAnalytics.YFunctionSeries{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartYFunctionSeries.ɵfac = function WjFlexChartYFunctionSeries_Factory(t) { return new (t || WjFlexChartYFunctionSeries)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartYFunctionSeries.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartYFunctionSeries, selectors: [["wj-flex-chart-y-function-series"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", sampleCount: "sampleCount", min: "min", max: "max", func: "func" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartYFunctionSeries_1) }, ...wjFlexChartYFunctionSeriesMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartYFunctionSeries_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartYFunctionSeries.meta={outputs:wjFlexChartYFunctionSeriesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartYFunctionSeries=WjFlexChartYFunctionSeries_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartYFunctionSeries);export{WjFlexChartYFunctionSeries};var wjFlexChartParametricFunctionSeriesMeta={selector:"wj-flex-chart-parametric-function-series",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","min","max","func","xFunc","yFunc"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartParametricFunctionSeriesMeta};let WjFlexChartParametricFunctionSeries=WjFlexChartParametricFunctionSeries_1=class WjFlexChartParametricFunctionSeries extends wjcChartAnalytics.ParametricFunctionSeries{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartParametricFunctionSeries.ɵfac = function WjFlexChartParametricFunctionSeries_Factory(t) { return new (t || WjFlexChartParametricFunctionSeries)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartParametricFunctionSeries.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartParametricFunctionSeries, selectors: [["wj-flex-chart-parametric-function-series"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", sampleCount: "sampleCount", min: "min", max: "max", func: "func", xFunc: "xFunc", yFunc: "yFunc" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartParametricFunctionSeries_1) }, ...wjFlexChartParametricFunctionSeriesMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartParametricFunctionSeries_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartParametricFunctionSeries.meta={outputs:wjFlexChartParametricFunctionSeriesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartParametricFunctionSeries=WjFlexChartParametricFunctionSeries_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartParametricFunctionSeries);export{WjFlexChartParametricFunctionSeries};var wjFlexChartWaterfallMeta={selector:"wj-flex-chart-waterfall",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","relativeData","start","startLabel","showTotal","totalLabel","showIntermediateTotal","intermediateTotalPositions","intermediateTotalLabels","connectorLines","styles"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartWaterfallMeta};let WjFlexChartWaterfall=WjFlexChartWaterfall_1=class WjFlexChartWaterfall extends wjcChartAnalytics.Waterfall{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartWaterfall.ɵfac = function WjFlexChartWaterfall_Factory(t) { return new (t || WjFlexChartWaterfall)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartWaterfall.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartWaterfall, selectors: [["wj-flex-chart-waterfall"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", relativeData: "relativeData", start: "start", startLabel: "startLabel", showTotal: "showTotal", totalLabel: "totalLabel", showIntermediateTotal: "showIntermediateTotal", intermediateTotalPositions: "intermediateTotalPositions", intermediateTotalLabels: "intermediateTotalLabels", connectorLines: "connectorLines", styles: "styles" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartWaterfall_1) }, ...wjFlexChartWaterfallMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartWaterfall_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartWaterfall.meta={outputs:wjFlexChartWaterfallMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartWaterfall=WjFlexChartWaterfall_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartWaterfall);export{WjFlexChartWaterfall};var wjFlexChartBoxWhiskerMeta={selector:"wj-flex-chart-box-whisker",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","quartileCalculation","groupWidth","gapWidth","showMeanLine","meanLineStyle","showMeanMarker","meanMarkerStyle","showInnerPoints","showOutliers"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartBoxWhiskerMeta};let WjFlexChartBoxWhisker=WjFlexChartBoxWhisker_1=class WjFlexChartBoxWhisker extends wjcChartAnalytics.BoxWhisker{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartBoxWhisker.ɵfac = function WjFlexChartBoxWhisker_Factory(t) { return new (t || WjFlexChartBoxWhisker)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartBoxWhisker.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartBoxWhisker, selectors: [["wj-flex-chart-box-whisker"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", quartileCalculation: "quartileCalculation", groupWidth: "groupWidth", gapWidth: "gapWidth", showMeanLine: "showMeanLine", meanLineStyle: "meanLineStyle", showMeanMarker: "showMeanMarker", meanMarkerStyle: "meanMarkerStyle", showInnerPoints: "showInnerPoints", showOutliers: "showOutliers" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartBoxWhisker_1) }, ...wjFlexChartBoxWhiskerMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartBoxWhisker_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartBoxWhisker.meta={outputs:wjFlexChartBoxWhiskerMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartBoxWhisker=WjFlexChartBoxWhisker_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartBoxWhisker);export{WjFlexChartBoxWhisker};var wjFlexChartErrorBarMeta={selector:"wj-flex-chart-error-bar",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","chartType","errorBarStyle","value","errorAmount","endStyle","direction"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartErrorBarMeta};let WjFlexChartErrorBar=WjFlexChartErrorBar_1=class WjFlexChartErrorBar extends wjcChartAnalytics.ErrorBar{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartErrorBar.ɵfac = function WjFlexChartErrorBar_Factory(t) { return new (t || WjFlexChartErrorBar)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartErrorBar.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartErrorBar, selectors: [["wj-flex-chart-error-bar"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", chartType: "chartType", errorBarStyle: "errorBarStyle", value: "value", errorAmount: "errorAmount", endStyle: "endStyle", direction: "direction" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartErrorBar_1) }, ...wjFlexChartErrorBarMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartErrorBar_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartErrorBar.meta={outputs:wjFlexChartErrorBarMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartErrorBar=WjFlexChartErrorBar_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartErrorBar);export{WjFlexChartErrorBar};var wjFlexChartBreakEvenMeta={selector:"wj-flex-chart-break-even",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","fixedCost","variableCost","salesPrice","styles"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartBreakEvenMeta};let WjFlexChartBreakEven=WjFlexChartBreakEven_1=class WjFlexChartBreakEven extends wjcChartAnalytics.BreakEven{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartBreakEven.ɵfac = function WjFlexChartBreakEven_Factory(t) { return new (t || WjFlexChartBreakEven)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartBreakEven.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartBreakEven, selectors: [["wj-flex-chart-break-even"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", fixedCost: "fixedCost", variableCost: "variableCost", salesPrice: "salesPrice", styles: "styles" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartBreakEven_1) }, ...wjFlexChartBreakEvenMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartBreakEven_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartBreakEven.meta={outputs:wjFlexChartBreakEvenMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartBreakEven=WjFlexChartBreakEven_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartBreakEven);export{WjFlexChartBreakEven};let moduleExports=[WjFlexChartTrendLine,WjFlexChartMovingAverage,WjFlexChartYFunctionSeries,WjFlexChartParametricFunctionSeries,WjFlexChartWaterfall,WjFlexChartBoxWhisker,WjFlexChartErrorBar,WjFlexChartBreakEven],WjChartAnalyticsModule=class WjChartAnalyticsModule{};
WjChartAnalyticsModule.ɵfac = function WjChartAnalyticsModule_Factory(t) { return new (t || WjChartAnalyticsModule)(); };
WjChartAnalyticsModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjChartAnalyticsModule });
WjChartAnalyticsModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartTrendLine, [{
        type: Component,
        args: [{ selector: wjFlexChartTrendLineMeta.selector, template: wjFlexChartTrendLineMeta.template, inputs: wjFlexChartTrendLineMeta.inputs, outputs: wjFlexChartTrendLineMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartTrendLine_1) }, ...wjFlexChartTrendLineMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartMovingAverage, [{
        type: Component,
        args: [{ selector: wjFlexChartMovingAverageMeta.selector, template: wjFlexChartMovingAverageMeta.template, inputs: wjFlexChartMovingAverageMeta.inputs, outputs: wjFlexChartMovingAverageMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartMovingAverage_1) }, ...wjFlexChartMovingAverageMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartYFunctionSeries, [{
        type: Component,
        args: [{ selector: wjFlexChartYFunctionSeriesMeta.selector, template: wjFlexChartYFunctionSeriesMeta.template, inputs: wjFlexChartYFunctionSeriesMeta.inputs, outputs: wjFlexChartYFunctionSeriesMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartYFunctionSeries_1) }, ...wjFlexChartYFunctionSeriesMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartParametricFunctionSeries, [{
        type: Component,
        args: [{ selector: wjFlexChartParametricFunctionSeriesMeta.selector, template: wjFlexChartParametricFunctionSeriesMeta.template, inputs: wjFlexChartParametricFunctionSeriesMeta.inputs, outputs: wjFlexChartParametricFunctionSeriesMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartParametricFunctionSeries_1) }, ...wjFlexChartParametricFunctionSeriesMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartWaterfall, [{
        type: Component,
        args: [{ selector: wjFlexChartWaterfallMeta.selector, template: wjFlexChartWaterfallMeta.template, inputs: wjFlexChartWaterfallMeta.inputs, outputs: wjFlexChartWaterfallMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartWaterfall_1) }, ...wjFlexChartWaterfallMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartBoxWhisker, [{
        type: Component,
        args: [{ selector: wjFlexChartBoxWhiskerMeta.selector, template: wjFlexChartBoxWhiskerMeta.template, inputs: wjFlexChartBoxWhiskerMeta.inputs, outputs: wjFlexChartBoxWhiskerMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartBoxWhisker_1) }, ...wjFlexChartBoxWhiskerMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartErrorBar, [{
        type: Component,
        args: [{ selector: wjFlexChartErrorBarMeta.selector, template: wjFlexChartErrorBarMeta.template, inputs: wjFlexChartErrorBarMeta.inputs, outputs: wjFlexChartErrorBarMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartErrorBar_1) }, ...wjFlexChartErrorBarMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartBreakEven, [{
        type: Component,
        args: [{ selector: wjFlexChartBreakEvenMeta.selector, template: wjFlexChartBreakEvenMeta.template, inputs: wjFlexChartBreakEvenMeta.inputs, outputs: wjFlexChartBreakEvenMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartBreakEven_1) }, ...wjFlexChartBreakEvenMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjChartAnalyticsModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: [...moduleExports], exports: [...moduleExports] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjChartAnalyticsModule, { declarations: function () { return [WjFlexChartTrendLine, WjFlexChartMovingAverage, WjFlexChartYFunctionSeries, WjFlexChartParametricFunctionSeries, WjFlexChartWaterfall, WjFlexChartBoxWhisker, WjFlexChartErrorBar, WjFlexChartBreakEven]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjFlexChartTrendLine, WjFlexChartMovingAverage, WjFlexChartYFunctionSeries, WjFlexChartParametricFunctionSeries, WjFlexChartWaterfall, WjFlexChartBoxWhisker, WjFlexChartErrorBar, WjFlexChartBreakEven]; } }); })();export{WjChartAnalyticsModule};