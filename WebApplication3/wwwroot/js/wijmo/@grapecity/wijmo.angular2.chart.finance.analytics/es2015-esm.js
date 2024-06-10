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
var WjFlexChartFibonacci_1,WjFlexChartFibonacciArcs_1,WjFlexChartFibonacciFans_1,WjFlexChartFibonacciTimeZones_1,WjFlexChartAtr_1,WjFlexChartCci_1,WjFlexChartRsi_1,WjFlexChartWilliamsR_1,WjFlexChartMacd_1,WjFlexChartMacdHistogram_1,WjFlexChartStochastic_1,WjFlexChartBollingerBands_1,WjFlexChartEnvelopes_1,__decorate=this&&this.__decorate||function(e,t,i,a){var r,n=arguments.length,s=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s},__param=this&&this.__param||function(e,t){return function(i,a){t(i,a,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior}from"@grapecity/wijmo.angular2.directivebase";import*as wjcChartFinanceAnalytics from"@grapecity/wijmo.chart.finance.analytics";var wjFlexChartFibonacciMeta={selector:"wj-flex-chart-fibonacci",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","high","low","labelPosition","levels","minX","maxX","uptrend"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartFibonacciMeta};let WjFlexChartFibonacci=WjFlexChartFibonacci_1=class WjFlexChartFibonacci extends wjcChartFinanceAnalytics.Fibonacci{constructor(e,t,i){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartFibonacci.ɵfac = function WjFlexChartFibonacci_Factory(t) { return new (t || WjFlexChartFibonacci)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartFibonacci.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartFibonacci, selectors: [["wj-flex-chart-fibonacci"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", high: "high", low: "low", labelPosition: "labelPosition", levels: "levels", minX: "minX", maxX: "maxX", uptrend: "uptrend" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartFibonacci_1) }, ...wjFlexChartFibonacciMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartFibonacci_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartFibonacci.meta={outputs:wjFlexChartFibonacciMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartFibonacci=WjFlexChartFibonacci_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartFibonacci);export{WjFlexChartFibonacci};var wjFlexChartFibonacciArcsMeta={selector:"wj-flex-chart-fibonacci-arcs",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","start","end","labelPosition","levels"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartFibonacciArcsMeta};let WjFlexChartFibonacciArcs=WjFlexChartFibonacciArcs_1=class WjFlexChartFibonacciArcs extends wjcChartFinanceAnalytics.FibonacciArcs{constructor(e,t,i){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartFibonacciArcs.ɵfac = function WjFlexChartFibonacciArcs_Factory(t) { return new (t || WjFlexChartFibonacciArcs)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartFibonacciArcs.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartFibonacciArcs, selectors: [["wj-flex-chart-fibonacci-arcs"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", start: "start", end: "end", labelPosition: "labelPosition", levels: "levels" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartFibonacciArcs_1) }, ...wjFlexChartFibonacciArcsMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartFibonacciArcs_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartFibonacciArcs.meta={outputs:wjFlexChartFibonacciArcsMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartFibonacciArcs=WjFlexChartFibonacciArcs_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartFibonacciArcs);export{WjFlexChartFibonacciArcs};var wjFlexChartFibonacciFansMeta={selector:"wj-flex-chart-fibonacci-fans",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","start","end","labelPosition","levels"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartFibonacciFansMeta};let WjFlexChartFibonacciFans=WjFlexChartFibonacciFans_1=class WjFlexChartFibonacciFans extends wjcChartFinanceAnalytics.FibonacciFans{constructor(e,t,i){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartFibonacciFans.ɵfac = function WjFlexChartFibonacciFans_Factory(t) { return new (t || WjFlexChartFibonacciFans)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartFibonacciFans.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartFibonacciFans, selectors: [["wj-flex-chart-fibonacci-fans"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", start: "start", end: "end", labelPosition: "labelPosition", levels: "levels" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartFibonacciFans_1) }, ...wjFlexChartFibonacciFansMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartFibonacciFans_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartFibonacciFans.meta={outputs:wjFlexChartFibonacciFansMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartFibonacciFans=WjFlexChartFibonacciFans_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartFibonacciFans);export{WjFlexChartFibonacciFans};var wjFlexChartFibonacciTimeZonesMeta={selector:"wj-flex-chart-fibonacci-time-zones",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","startX","endX","labelPosition","levels"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartFibonacciTimeZonesMeta};let WjFlexChartFibonacciTimeZones=WjFlexChartFibonacciTimeZones_1=class WjFlexChartFibonacciTimeZones extends wjcChartFinanceAnalytics.FibonacciTimeZones{constructor(e,t,i){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartFibonacciTimeZones.ɵfac = function WjFlexChartFibonacciTimeZones_Factory(t) { return new (t || WjFlexChartFibonacciTimeZones)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartFibonacciTimeZones.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartFibonacciTimeZones, selectors: [["wj-flex-chart-fibonacci-time-zones"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", startX: "startX", endX: "endX", labelPosition: "labelPosition", levels: "levels" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartFibonacciTimeZones_1) }, ...wjFlexChartFibonacciTimeZonesMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartFibonacciTimeZones_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartFibonacciTimeZones.meta={outputs:wjFlexChartFibonacciTimeZonesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartFibonacciTimeZones=WjFlexChartFibonacciTimeZones_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartFibonacciTimeZones);export{WjFlexChartFibonacciTimeZones};var wjFlexChartAtrMeta={selector:"wj-flex-chart-atr",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartAtrMeta};let WjFlexChartAtr=WjFlexChartAtr_1=class WjFlexChartAtr extends wjcChartFinanceAnalytics.ATR{constructor(e,t,i){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartAtr.ɵfac = function WjFlexChartAtr_Factory(t) { return new (t || WjFlexChartAtr)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAtr.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAtr, selectors: [["wj-flex-chart-atr"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", period: "period" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAtr_1) }, ...wjFlexChartAtrMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartAtr_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartAtr.meta={outputs:wjFlexChartAtrMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartAtr=WjFlexChartAtr_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAtr);export{WjFlexChartAtr};var wjFlexChartCciMeta={selector:"wj-flex-chart-cci",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period","constant"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartCciMeta};let WjFlexChartCci=WjFlexChartCci_1=class WjFlexChartCci extends wjcChartFinanceAnalytics.CCI{constructor(e,t,i){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartCci.ɵfac = function WjFlexChartCci_Factory(t) { return new (t || WjFlexChartCci)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartCci.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartCci, selectors: [["wj-flex-chart-cci"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", period: "period", constant: "constant" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartCci_1) }, ...wjFlexChartCciMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartCci_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartCci.meta={outputs:wjFlexChartCciMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartCci=WjFlexChartCci_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartCci);export{WjFlexChartCci};var wjFlexChartRsiMeta={selector:"wj-flex-chart-rsi",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartRsiMeta};let WjFlexChartRsi=WjFlexChartRsi_1=class WjFlexChartRsi extends wjcChartFinanceAnalytics.RSI{constructor(e,t,i){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartRsi.ɵfac = function WjFlexChartRsi_Factory(t) { return new (t || WjFlexChartRsi)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartRsi.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartRsi, selectors: [["wj-flex-chart-rsi"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", period: "period" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartRsi_1) }, ...wjFlexChartRsiMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartRsi_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartRsi.meta={outputs:wjFlexChartRsiMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartRsi=WjFlexChartRsi_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartRsi);export{WjFlexChartRsi};var wjFlexChartWilliamsRMeta={selector:"wj-flex-chart-williams-r",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartWilliamsRMeta};let WjFlexChartWilliamsR=WjFlexChartWilliamsR_1=class WjFlexChartWilliamsR extends wjcChartFinanceAnalytics.WilliamsR{constructor(e,t,i){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartWilliamsR.ɵfac = function WjFlexChartWilliamsR_Factory(t) { return new (t || WjFlexChartWilliamsR)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartWilliamsR.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartWilliamsR, selectors: [["wj-flex-chart-williams-r"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", period: "period" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartWilliamsR_1) }, ...wjFlexChartWilliamsRMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartWilliamsR_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartWilliamsR.meta={outputs:wjFlexChartWilliamsRMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartWilliamsR=WjFlexChartWilliamsR_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartWilliamsR);export{WjFlexChartWilliamsR};var wjFlexChartMacdMeta={selector:"wj-flex-chart-macd",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","fastPeriod","slowPeriod","smoothingPeriod","styles"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartMacdMeta};let WjFlexChartMacd=WjFlexChartMacd_1=class WjFlexChartMacd extends wjcChartFinanceAnalytics.Macd{constructor(e,t,i){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartMacd.ɵfac = function WjFlexChartMacd_Factory(t) { return new (t || WjFlexChartMacd)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartMacd.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartMacd, selectors: [["wj-flex-chart-macd"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", fastPeriod: "fastPeriod", slowPeriod: "slowPeriod", smoothingPeriod: "smoothingPeriod", styles: "styles" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartMacd_1) }, ...wjFlexChartMacdMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartMacd_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartMacd.meta={outputs:wjFlexChartMacdMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartMacd=WjFlexChartMacd_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartMacd);export{WjFlexChartMacd};var wjFlexChartMacdHistogramMeta={selector:"wj-flex-chart-macd-histogram",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","fastPeriod","slowPeriod","smoothingPeriod"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartMacdHistogramMeta};let WjFlexChartMacdHistogram=WjFlexChartMacdHistogram_1=class WjFlexChartMacdHistogram extends wjcChartFinanceAnalytics.MacdHistogram{constructor(e,t,i){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartMacdHistogram.ɵfac = function WjFlexChartMacdHistogram_Factory(t) { return new (t || WjFlexChartMacdHistogram)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartMacdHistogram.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartMacdHistogram, selectors: [["wj-flex-chart-macd-histogram"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", fastPeriod: "fastPeriod", slowPeriod: "slowPeriod", smoothingPeriod: "smoothingPeriod" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartMacdHistogram_1) }, ...wjFlexChartMacdHistogramMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartMacdHistogram_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartMacdHistogram.meta={outputs:wjFlexChartMacdHistogramMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartMacdHistogram=WjFlexChartMacdHistogram_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartMacdHistogram);export{WjFlexChartMacdHistogram};var wjFlexChartStochasticMeta={selector:"wj-flex-chart-stochastic",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","dPeriod","kPeriod","smoothingPeriod","styles"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartStochasticMeta};let WjFlexChartStochastic=WjFlexChartStochastic_1=class WjFlexChartStochastic extends wjcChartFinanceAnalytics.Stochastic{constructor(e,t,i){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartStochastic.ɵfac = function WjFlexChartStochastic_Factory(t) { return new (t || WjFlexChartStochastic)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartStochastic.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartStochastic, selectors: [["wj-flex-chart-stochastic"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", dPeriod: "dPeriod", kPeriod: "kPeriod", smoothingPeriod: "smoothingPeriod", styles: "styles" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartStochastic_1) }, ...wjFlexChartStochasticMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartStochastic_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartStochastic.meta={outputs:wjFlexChartStochasticMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartStochastic=WjFlexChartStochastic_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartStochastic);export{WjFlexChartStochastic};var wjFlexChartBollingerBandsMeta={selector:"wj-flex-chart-bollinger-bands",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period","multiplier"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartBollingerBandsMeta};let WjFlexChartBollingerBands=WjFlexChartBollingerBands_1=class WjFlexChartBollingerBands extends wjcChartFinanceAnalytics.BollingerBands{constructor(e,t,i){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartBollingerBands.ɵfac = function WjFlexChartBollingerBands_Factory(t) { return new (t || WjFlexChartBollingerBands)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartBollingerBands.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartBollingerBands, selectors: [["wj-flex-chart-bollinger-bands"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", period: "period", multiplier: "multiplier" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartBollingerBands_1) }, ...wjFlexChartBollingerBandsMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartBollingerBands_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartBollingerBands.meta={outputs:wjFlexChartBollingerBandsMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartBollingerBands=WjFlexChartBollingerBands_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartBollingerBands);export{WjFlexChartBollingerBands};var wjFlexChartEnvelopesMeta={selector:"wj-flex-chart-envelopes",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period","size","type"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartEnvelopesMeta};let WjFlexChartEnvelopes=WjFlexChartEnvelopes_1=class WjFlexChartEnvelopes extends wjcChartFinanceAnalytics.Envelopes{constructor(e,t,i){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartEnvelopes.ɵfac = function WjFlexChartEnvelopes_Factory(t) { return new (t || WjFlexChartEnvelopes)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartEnvelopes.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartEnvelopes, selectors: [["wj-flex-chart-envelopes"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", period: "period", size: "size", type: "type" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartEnvelopes_1) }, ...wjFlexChartEnvelopesMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartEnvelopes_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartEnvelopes.meta={outputs:wjFlexChartEnvelopesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartEnvelopes=WjFlexChartEnvelopes_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartEnvelopes);export{WjFlexChartEnvelopes};let moduleExports=[WjFlexChartFibonacci,WjFlexChartFibonacciArcs,WjFlexChartFibonacciFans,WjFlexChartFibonacciTimeZones,WjFlexChartAtr,WjFlexChartCci,WjFlexChartRsi,WjFlexChartWilliamsR,WjFlexChartMacd,WjFlexChartMacdHistogram,WjFlexChartStochastic,WjFlexChartBollingerBands,WjFlexChartEnvelopes],WjChartFinanceAnalyticsModule=class WjChartFinanceAnalyticsModule{};
WjChartFinanceAnalyticsModule.ɵfac = function WjChartFinanceAnalyticsModule_Factory(t) { return new (t || WjChartFinanceAnalyticsModule)(); };
WjChartFinanceAnalyticsModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjChartFinanceAnalyticsModule });
WjChartFinanceAnalyticsModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartFibonacci, [{
        type: Component,
        args: [{ selector: wjFlexChartFibonacciMeta.selector, template: wjFlexChartFibonacciMeta.template, inputs: wjFlexChartFibonacciMeta.inputs, outputs: wjFlexChartFibonacciMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartFibonacci_1) }, ...wjFlexChartFibonacciMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartFibonacciArcs, [{
        type: Component,
        args: [{ selector: wjFlexChartFibonacciArcsMeta.selector, template: wjFlexChartFibonacciArcsMeta.template, inputs: wjFlexChartFibonacciArcsMeta.inputs, outputs: wjFlexChartFibonacciArcsMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartFibonacciArcs_1) }, ...wjFlexChartFibonacciArcsMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartFibonacciFans, [{
        type: Component,
        args: [{ selector: wjFlexChartFibonacciFansMeta.selector, template: wjFlexChartFibonacciFansMeta.template, inputs: wjFlexChartFibonacciFansMeta.inputs, outputs: wjFlexChartFibonacciFansMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartFibonacciFans_1) }, ...wjFlexChartFibonacciFansMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartFibonacciTimeZones, [{
        type: Component,
        args: [{ selector: wjFlexChartFibonacciTimeZonesMeta.selector, template: wjFlexChartFibonacciTimeZonesMeta.template, inputs: wjFlexChartFibonacciTimeZonesMeta.inputs, outputs: wjFlexChartFibonacciTimeZonesMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartFibonacciTimeZones_1) }, ...wjFlexChartFibonacciTimeZonesMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAtr, [{
        type: Component,
        args: [{ selector: wjFlexChartAtrMeta.selector, template: wjFlexChartAtrMeta.template, inputs: wjFlexChartAtrMeta.inputs, outputs: wjFlexChartAtrMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAtr_1) }, ...wjFlexChartAtrMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartCci, [{
        type: Component,
        args: [{ selector: wjFlexChartCciMeta.selector, template: wjFlexChartCciMeta.template, inputs: wjFlexChartCciMeta.inputs, outputs: wjFlexChartCciMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartCci_1) }, ...wjFlexChartCciMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartRsi, [{
        type: Component,
        args: [{ selector: wjFlexChartRsiMeta.selector, template: wjFlexChartRsiMeta.template, inputs: wjFlexChartRsiMeta.inputs, outputs: wjFlexChartRsiMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartRsi_1) }, ...wjFlexChartRsiMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartWilliamsR, [{
        type: Component,
        args: [{ selector: wjFlexChartWilliamsRMeta.selector, template: wjFlexChartWilliamsRMeta.template, inputs: wjFlexChartWilliamsRMeta.inputs, outputs: wjFlexChartWilliamsRMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartWilliamsR_1) }, ...wjFlexChartWilliamsRMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartMacd, [{
        type: Component,
        args: [{ selector: wjFlexChartMacdMeta.selector, template: wjFlexChartMacdMeta.template, inputs: wjFlexChartMacdMeta.inputs, outputs: wjFlexChartMacdMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartMacd_1) }, ...wjFlexChartMacdMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartMacdHistogram, [{
        type: Component,
        args: [{ selector: wjFlexChartMacdHistogramMeta.selector, template: wjFlexChartMacdHistogramMeta.template, inputs: wjFlexChartMacdHistogramMeta.inputs, outputs: wjFlexChartMacdHistogramMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartMacdHistogram_1) }, ...wjFlexChartMacdHistogramMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartStochastic, [{
        type: Component,
        args: [{ selector: wjFlexChartStochasticMeta.selector, template: wjFlexChartStochasticMeta.template, inputs: wjFlexChartStochasticMeta.inputs, outputs: wjFlexChartStochasticMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartStochastic_1) }, ...wjFlexChartStochasticMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartBollingerBands, [{
        type: Component,
        args: [{ selector: wjFlexChartBollingerBandsMeta.selector, template: wjFlexChartBollingerBandsMeta.template, inputs: wjFlexChartBollingerBandsMeta.inputs, outputs: wjFlexChartBollingerBandsMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartBollingerBands_1) }, ...wjFlexChartBollingerBandsMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartEnvelopes, [{
        type: Component,
        args: [{ selector: wjFlexChartEnvelopesMeta.selector, template: wjFlexChartEnvelopesMeta.template, inputs: wjFlexChartEnvelopesMeta.inputs, outputs: wjFlexChartEnvelopesMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartEnvelopes_1) }, ...wjFlexChartEnvelopesMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjChartFinanceAnalyticsModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: [...moduleExports], exports: [...moduleExports] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjChartFinanceAnalyticsModule, { declarations: function () { return [WjFlexChartFibonacci, WjFlexChartFibonacciArcs, WjFlexChartFibonacciFans, WjFlexChartFibonacciTimeZones, WjFlexChartAtr, WjFlexChartCci, WjFlexChartRsi, WjFlexChartWilliamsR, WjFlexChartMacd, WjFlexChartMacdHistogram, WjFlexChartStochastic, WjFlexChartBollingerBands, WjFlexChartEnvelopes]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjFlexChartFibonacci, WjFlexChartFibonacciArcs, WjFlexChartFibonacciFans, WjFlexChartFibonacciTimeZones, WjFlexChartAtr, WjFlexChartCci, WjFlexChartRsi, WjFlexChartWilliamsR, WjFlexChartMacd, WjFlexChartMacdHistogram, WjFlexChartStochastic, WjFlexChartBollingerBands, WjFlexChartEnvelopes]; } }); })();export{WjChartFinanceAnalyticsModule};