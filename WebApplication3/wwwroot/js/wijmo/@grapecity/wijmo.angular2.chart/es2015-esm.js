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
var WjFlexChart_1,WjFlexPie_1,WjFlexChartAxis_1,WjFlexChartLegend_1,WjFlexChartDataLabel_1,WjFlexPieDataLabel_1,WjFlexChartSeries_1,WjFlexChartLineMarker_1,WjFlexChartDataPoint_1,WjFlexChartPlotArea_1,__decorate=this&&this.__decorate||function(e,t,a,r){var i,n=arguments.length,o=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(n<3?i(o):n>3?i(t,a,o):i(t,a))||o);return n>3&&o&&Object.defineProperty(t,a,o),o},__param=this&&this.__param||function(e,t){return function(a,r){t(a,r,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"@grapecity/wijmo.angular2.directivebase";import*as wjcChart from"@grapecity/wijmo.chart";var wjFlexChartMeta={selector:"wj-flex-chart",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","renderEngine","isDisabled","tabOrder","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingX","interpolateNulls","legendToggle","symbolSize","options","selection","itemFormatter","labelContent","chartType","rotated","stacking"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","selectionChangePC: selectionChange","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged","seriesVisibilityChangedNg: seriesVisibilityChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjFlexChartMeta};let WjFlexChart=WjFlexChart_1=class WjFlexChart extends wjcChart.FlexChart{constructor(e,t,a){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,a,r=!1){let i=WjDirectiveBehavior,n=i.getZone(this);n&&i.outsideZoneEvents[t]?n.runOutsideAngular(()=>{super.addEventListener(e,t,a,r)}):super.addEventListener(e,t,a,r)}get tooltipContent(){return this.tooltip.content}set tooltipContent(e){this.tooltip.content=e}get labelContent(){return this.dataLabel.content}set labelContent(e){this.dataLabel.content=e}};
WjFlexChart.ɵfac = function WjFlexChart_Factory(t) { return new (t || WjFlexChart)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChart.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChart, selectors: [["wj-flex-chart"]], inputs: { asyncBindings: "asyncBindings", wjModelProperty: "wjModelProperty", renderEngine: "renderEngine", isDisabled: "isDisabled", tabOrder: "tabOrder", binding: "binding", footer: "footer", header: "header", selectionMode: "selectionMode", palette: "palette", plotMargin: "plotMargin", footerStyle: "footerStyle", headerStyle: "headerStyle", tooltipContent: "tooltipContent", itemsSource: "itemsSource", bindingX: "bindingX", interpolateNulls: "interpolateNulls", legendToggle: "legendToggle", symbolSize: "symbolSize", options: "options", selection: "selection", itemFormatter: "itemFormatter", labelContent: "labelContent", chartType: "chartType", rotated: "rotated", stacking: "stacking" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", renderingNg: "rendering", renderedNg: "rendered", selectionChangedNg: "selectionChanged", selectionChangePC: "selectionChange", itemsSourceChangingNg: "itemsSourceChanging", itemsSourceChangedNg: "itemsSourceChanged", seriesVisibilityChangedNg: "seriesVisibilityChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChart_1) }, ...wjFlexChartMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexChart_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });WjFlexChart.meta={outputs:wjFlexChartMeta.outputs,changeEvents:{selectionChanged:["selection"]}};WjFlexChart=WjFlexChart_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChart);export{WjFlexChart};var wjFlexPieMeta={selector:"wj-flex-pie",template:"<div><ng-content></ng-content></div>",inputs:["wjModelProperty","isDisabled","tabOrder","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingName","innerRadius","isAnimated","offset","reversed","startAngle","selectedIndex","selectedItemPosition","selectedItemOffset","itemFormatter","labelContent","titles","chartsPerLine","innerText","innerTextStyle"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjFlexPieMeta};let WjFlexPie=WjFlexPie_1=class WjFlexPie extends wjcChart.FlexPie{constructor(e,t,a){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,a,r=!1){let i=WjDirectiveBehavior,n=i.getZone(this);n&&i.outsideZoneEvents[t]?n.runOutsideAngular(()=>{super.addEventListener(e,t,a,r)}):super.addEventListener(e,t,a,r)}get tooltipContent(){return this.tooltip.content}set tooltipContent(e){this.tooltip.content=e}get labelContent(){return this.dataLabel.content}set labelContent(e){this.dataLabel.content=e}};
WjFlexPie.ɵfac = function WjFlexPie_Factory(t) { return new (t || WjFlexPie)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexPie.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexPie, selectors: [["wj-flex-pie"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", binding: "binding", footer: "footer", header: "header", selectionMode: "selectionMode", palette: "palette", plotMargin: "plotMargin", footerStyle: "footerStyle", headerStyle: "headerStyle", tooltipContent: "tooltipContent", itemsSource: "itemsSource", bindingName: "bindingName", innerRadius: "innerRadius", isAnimated: "isAnimated", offset: "offset", reversed: "reversed", startAngle: "startAngle", selectedIndex: "selectedIndex", selectedItemPosition: "selectedItemPosition", selectedItemOffset: "selectedItemOffset", itemFormatter: "itemFormatter", labelContent: "labelContent", titles: "titles", chartsPerLine: "chartsPerLine", innerText: "innerText", innerTextStyle: "innerTextStyle" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", renderingNg: "rendering", renderedNg: "rendered", selectionChangedNg: "selectionChanged", itemsSourceChangingNg: "itemsSourceChanging", itemsSourceChangedNg: "itemsSourceChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexPie_1) }, ...wjFlexPieMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexPie_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });WjFlexPie.meta={outputs:wjFlexPieMeta.outputs};WjFlexPie=WjFlexPie_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexPie);export{WjFlexPie};var wjFlexChartAxisMeta={selector:"wj-flex-chart-axis",template:"",inputs:["wjProperty","axisLine","format","labels","majorGrid","majorTickMarks","majorUnit","max","min","position","reversed","title","labelAngle","minorGrid","minorTickMarks","minorUnit","origin","logBase","plotArea","labelAlign","name","overlappingLabels","labelPadding","itemFormatter","itemsSource","binding","labelMin","labelMax","groupsOptions"],outputs:["initialized","rangeChangedNg: rangeChanged"],providers:[]};export{wjFlexChartAxisMeta};let WjFlexChartAxis=WjFlexChartAxis_1=class WjFlexChartAxis extends wjcChart.Axis{constructor(e,t,a){super();this.isInitialized=!1;this.wjProperty="axes";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartAxis.ɵfac = function WjFlexChartAxis_Factory(t) { return new (t || WjFlexChartAxis)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAxis.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAxis, selectors: [["wj-flex-chart-axis"]], inputs: { wjProperty: "wjProperty", axisLine: "axisLine", format: "format", labels: "labels", majorGrid: "majorGrid", majorTickMarks: "majorTickMarks", majorUnit: "majorUnit", max: "max", min: "min", position: "position", reversed: "reversed", title: "title", labelAngle: "labelAngle", minorGrid: "minorGrid", minorTickMarks: "minorTickMarks", minorUnit: "minorUnit", origin: "origin", logBase: "logBase", plotArea: "plotArea", labelAlign: "labelAlign", name: "name", overlappingLabels: "overlappingLabels", labelPadding: "labelPadding", itemFormatter: "itemFormatter", itemsSource: "itemsSource", binding: "binding", labelMin: "labelMin", labelMax: "labelMax", groupsOptions: "groupsOptions" }, outputs: { initialized: "initialized", rangeChangedNg: "rangeChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAxis_1) }, ...wjFlexChartAxisMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartAxis_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartAxis.meta={outputs:wjFlexChartAxisMeta.outputs};WjFlexChartAxis=WjFlexChartAxis_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAxis);export{WjFlexChartAxis};var wjFlexChartLegendMeta={selector:"wj-flex-chart-legend",template:"",inputs:["wjProperty","orientation","position","title","titleAlign","maxSize","scrollbar"],outputs:["initialized"],providers:[]};export{wjFlexChartLegendMeta};let WjFlexChartLegend=WjFlexChartLegend_1=class WjFlexChartLegend extends wjcChart.Legend{constructor(e,t,a){super(a);this.isInitialized=!1;this.wjProperty="legend";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartLegend.ɵfac = function WjFlexChartLegend_Factory(t) { return new (t || WjFlexChartLegend)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartLegend.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartLegend, selectors: [["wj-flex-chart-legend"]], inputs: { wjProperty: "wjProperty", orientation: "orientation", position: "position", title: "title", titleAlign: "titleAlign", maxSize: "maxSize", scrollbar: "scrollbar" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartLegend_1) }, ...wjFlexChartLegendMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartLegend_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartLegend.meta={outputs:wjFlexChartLegendMeta.outputs};WjFlexChartLegend=WjFlexChartLegend_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartLegend);export{WjFlexChartLegend};var wjFlexChartDataLabelMeta={selector:"wj-flex-chart-data-label",template:"",inputs:["wjProperty","content","border","offset","connectingLine","position"],outputs:["initialized","renderingNg: rendering"],providers:[]};export{wjFlexChartDataLabelMeta};let WjFlexChartDataLabel=WjFlexChartDataLabel_1=class WjFlexChartDataLabel extends wjcChart.DataLabel{constructor(e,t,a){super();this.isInitialized=!1;this.wjProperty="dataLabel";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartDataLabel.ɵfac = function WjFlexChartDataLabel_Factory(t) { return new (t || WjFlexChartDataLabel)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartDataLabel.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartDataLabel, selectors: [["wj-flex-chart-data-label"]], inputs: { wjProperty: "wjProperty", content: "content", border: "border", offset: "offset", connectingLine: "connectingLine", position: "position" }, outputs: { initialized: "initialized", renderingNg: "rendering" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartDataLabel_1) }, ...wjFlexChartDataLabelMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartDataLabel_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartDataLabel.meta={outputs:wjFlexChartDataLabelMeta.outputs};WjFlexChartDataLabel=WjFlexChartDataLabel_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartDataLabel);export{WjFlexChartDataLabel};var wjFlexPieDataLabelMeta={selector:"wj-flex-pie-data-label",template:"",inputs:["wjProperty","content","border","offset","connectingLine","position"],outputs:["initialized","renderingNg: rendering"],providers:[]};export{wjFlexPieDataLabelMeta};let WjFlexPieDataLabel=WjFlexPieDataLabel_1=class WjFlexPieDataLabel extends wjcChart.PieDataLabel{constructor(e,t,a){super();this.isInitialized=!1;this.wjProperty="dataLabel";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexPieDataLabel.ɵfac = function WjFlexPieDataLabel_Factory(t) { return new (t || WjFlexPieDataLabel)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexPieDataLabel.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexPieDataLabel, selectors: [["wj-flex-pie-data-label"]], inputs: { wjProperty: "wjProperty", content: "content", border: "border", offset: "offset", connectingLine: "connectingLine", position: "position" }, outputs: { initialized: "initialized", renderingNg: "rendering" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexPieDataLabel_1) }, ...wjFlexPieDataLabelMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexPieDataLabel_Template(rf, ctx) { }, encapsulation: 2 });WjFlexPieDataLabel.meta={outputs:wjFlexPieDataLabelMeta.outputs};WjFlexPieDataLabel=WjFlexPieDataLabel_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexPieDataLabel);export{WjFlexPieDataLabel};var wjFlexChartSeriesMeta={selector:"wj-flex-chart-series",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","chartType"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartSeriesMeta};let WjFlexChartSeries=WjFlexChartSeries_1=class WjFlexChartSeries extends wjcChart.Series{constructor(e,t,a){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartSeries.ɵfac = function WjFlexChartSeries_Factory(t) { return new (t || WjFlexChartSeries)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartSeries.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartSeries, selectors: [["wj-flex-chart-series"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", chartType: "chartType" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartSeries_1) }, ...wjFlexChartSeriesMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexChartSeries_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });WjFlexChartSeries.meta={outputs:wjFlexChartSeriesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartSeries=WjFlexChartSeries_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartSeries);export{WjFlexChartSeries};var wjFlexChartLineMarkerMeta={selector:"wj-flex-line-marker",template:"",inputs:["wjProperty","isVisible","seriesIndex","horizontalPosition","content","verticalPosition","alignment","lines","interaction","dragLines","dragThreshold","dragContent"],outputs:["initialized","positionChangedNg: positionChanged"],providers:[]};export{wjFlexChartLineMarkerMeta};let WjFlexChartLineMarker=WjFlexChartLineMarker_1=class WjFlexChartLineMarker extends wjcChart.LineMarker{constructor(e,t,a){super(a);this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartLineMarker.ɵfac = function WjFlexChartLineMarker_Factory(t) { return new (t || WjFlexChartLineMarker)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartLineMarker.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartLineMarker, selectors: [["wj-flex-line-marker"]], inputs: { wjProperty: "wjProperty", isVisible: "isVisible", seriesIndex: "seriesIndex", horizontalPosition: "horizontalPosition", content: "content", verticalPosition: "verticalPosition", alignment: "alignment", lines: "lines", interaction: "interaction", dragLines: "dragLines", dragThreshold: "dragThreshold", dragContent: "dragContent" }, outputs: { initialized: "initialized", positionChangedNg: "positionChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartLineMarker_1) }, ...wjFlexChartLineMarkerMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartLineMarker_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartLineMarker.meta={outputs:wjFlexChartLineMarkerMeta.outputs};WjFlexChartLineMarker=WjFlexChartLineMarker_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartLineMarker);export{WjFlexChartLineMarker};var wjFlexChartDataPointMeta={selector:"wj-flex-chart-data-point",template:"",inputs:["wjProperty","x","y"],outputs:["initialized"],providers:[]};export{wjFlexChartDataPointMeta};let WjFlexChartDataPoint=WjFlexChartDataPoint_1=class WjFlexChartDataPoint extends wjcChart.DataPoint{constructor(e,t,a){super();this.isInitialized=!1;this.wjProperty="";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartDataPoint.ɵfac = function WjFlexChartDataPoint_Factory(t) { return new (t || WjFlexChartDataPoint)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartDataPoint.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartDataPoint, selectors: [["wj-flex-chart-data-point"]], inputs: { wjProperty: "wjProperty", x: "x", y: "y" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartDataPoint_1) }, ...wjFlexChartDataPointMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartDataPoint_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartDataPoint.meta={outputs:wjFlexChartDataPointMeta.outputs};WjFlexChartDataPoint=WjFlexChartDataPoint_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartDataPoint);export{WjFlexChartDataPoint};var wjFlexChartPlotAreaMeta={selector:"wj-flex-chart-plot-area",template:"",inputs:["wjProperty","column","height","name","row","style","width"],outputs:["initialized"],providers:[]};export{wjFlexChartPlotAreaMeta};let WjFlexChartPlotArea=WjFlexChartPlotArea_1=class WjFlexChartPlotArea extends wjcChart.PlotArea{constructor(e,t,a){super();this.isInitialized=!1;this.wjProperty="plotAreas";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartPlotArea.ɵfac = function WjFlexChartPlotArea_Factory(t) { return new (t || WjFlexChartPlotArea)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartPlotArea.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartPlotArea, selectors: [["wj-flex-chart-plot-area"]], inputs: { wjProperty: "wjProperty", column: "column", height: "height", name: "name", row: "row", style: "style", width: "width" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartPlotArea_1) }, ...wjFlexChartPlotAreaMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartPlotArea_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartPlotArea.meta={outputs:wjFlexChartPlotAreaMeta.outputs};WjFlexChartPlotArea=WjFlexChartPlotArea_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartPlotArea);export{WjFlexChartPlotArea};let moduleExports=[WjFlexChart,WjFlexPie,WjFlexChartAxis,WjFlexChartLegend,WjFlexChartDataLabel,WjFlexPieDataLabel,WjFlexChartSeries,WjFlexChartLineMarker,WjFlexChartDataPoint,WjFlexChartPlotArea],WjChartModule=class WjChartModule{};
WjChartModule.ɵfac = function WjChartModule_Factory(t) { return new (t || WjChartModule)(); };
WjChartModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjChartModule });
WjChartModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChart, [{
        type: Component,
        args: [{ selector: wjFlexChartMeta.selector, template: wjFlexChartMeta.template, inputs: wjFlexChartMeta.inputs, outputs: wjFlexChartMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChart_1) }, ...wjFlexChartMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexPie, [{
        type: Component,
        args: [{ selector: wjFlexPieMeta.selector, template: wjFlexPieMeta.template, inputs: wjFlexPieMeta.inputs, outputs: wjFlexPieMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexPie_1) }, ...wjFlexPieMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAxis, [{
        type: Component,
        args: [{ selector: wjFlexChartAxisMeta.selector, template: wjFlexChartAxisMeta.template, inputs: wjFlexChartAxisMeta.inputs, outputs: wjFlexChartAxisMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAxis_1) }, ...wjFlexChartAxisMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartLegend, [{
        type: Component,
        args: [{ selector: wjFlexChartLegendMeta.selector, template: wjFlexChartLegendMeta.template, inputs: wjFlexChartLegendMeta.inputs, outputs: wjFlexChartLegendMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartLegend_1) }, ...wjFlexChartLegendMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartDataLabel, [{
        type: Component,
        args: [{ selector: wjFlexChartDataLabelMeta.selector, template: wjFlexChartDataLabelMeta.template, inputs: wjFlexChartDataLabelMeta.inputs, outputs: wjFlexChartDataLabelMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartDataLabel_1) }, ...wjFlexChartDataLabelMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexPieDataLabel, [{
        type: Component,
        args: [{ selector: wjFlexPieDataLabelMeta.selector, template: wjFlexPieDataLabelMeta.template, inputs: wjFlexPieDataLabelMeta.inputs, outputs: wjFlexPieDataLabelMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexPieDataLabel_1) }, ...wjFlexPieDataLabelMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartSeries, [{
        type: Component,
        args: [{ selector: wjFlexChartSeriesMeta.selector, template: wjFlexChartSeriesMeta.template, inputs: wjFlexChartSeriesMeta.inputs, outputs: wjFlexChartSeriesMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartSeries_1) }, ...wjFlexChartSeriesMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartLineMarker, [{
        type: Component,
        args: [{ selector: wjFlexChartLineMarkerMeta.selector, template: wjFlexChartLineMarkerMeta.template, inputs: wjFlexChartLineMarkerMeta.inputs, outputs: wjFlexChartLineMarkerMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartLineMarker_1) }, ...wjFlexChartLineMarkerMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartDataPoint, [{
        type: Component,
        args: [{ selector: wjFlexChartDataPointMeta.selector, template: wjFlexChartDataPointMeta.template, inputs: wjFlexChartDataPointMeta.inputs, outputs: wjFlexChartDataPointMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartDataPoint_1) }, ...wjFlexChartDataPointMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartPlotArea, [{
        type: Component,
        args: [{ selector: wjFlexChartPlotAreaMeta.selector, template: wjFlexChartPlotAreaMeta.template, inputs: wjFlexChartPlotAreaMeta.inputs, outputs: wjFlexChartPlotAreaMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartPlotArea_1) }, ...wjFlexChartPlotAreaMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjChartModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: [...moduleExports], exports: [...moduleExports] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjChartModule, { declarations: function () { return [WjFlexChart, WjFlexPie, WjFlexChartAxis, WjFlexChartLegend, WjFlexChartDataLabel, WjFlexPieDataLabel, WjFlexChartSeries, WjFlexChartLineMarker, WjFlexChartDataPoint, WjFlexChartPlotArea]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjFlexChart, WjFlexPie, WjFlexChartAxis, WjFlexChartLegend, WjFlexChartDataLabel, WjFlexPieDataLabel, WjFlexChartSeries, WjFlexChartLineMarker, WjFlexChartDataPoint, WjFlexChartPlotArea]; } }); })();export{WjChartModule};