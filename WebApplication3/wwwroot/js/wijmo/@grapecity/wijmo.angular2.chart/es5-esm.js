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
var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,r,a){var n,i=arguments.length,o=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(i<3?n(o):i>3?n(t,r,o):n(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o},__param=this&&this.__param||function(e,t){return function(r,a){t(r,a,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"@grapecity/wijmo.angular2.directivebase";import*as wjcChart from"@grapecity/wijmo.chart";var wjFlexChartMeta={selector:"wj-flex-chart",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","renderEngine","isDisabled","tabOrder","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingX","interpolateNulls","legendToggle","symbolSize","options","selection","itemFormatter","labelContent","chartType","rotated","stacking"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","selectionChangePC: selectionChange","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged","seriesVisibilityChangedNg: seriesVisibilityChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjFlexChartMeta};var WjFlexChart=function(e){__extends(WjFlexChart,e);function WjFlexChart(t,r,a){var n=e.call(this,WjDirectiveBehavior.getHostElement(t,r))||this;n.isInitialized=!1;n._wjBehaviour=WjDirectiveBehavior.attach(n,t,r,a);n.created();return n}t=WjFlexChart;WjFlexChart.prototype.created=function(){};WjFlexChart.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChart.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChart.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjFlexChart.prototype.addEventListener=function(t,r,a,n){var i=this;void 0===n&&(n=!1);var o=WjDirectiveBehavior,l=o.getZone(this);l&&o.outsideZoneEvents[r]?l.runOutsideAngular((function(){e.prototype.addEventListener.call(i,t,r,a,n)})):e.prototype.addEventListener.call(this,t,r,a,n)};Object.defineProperty(WjFlexChart.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(e){this.tooltip.content=e},enumerable:!0,configurable:!0});Object.defineProperty(WjFlexChart.prototype,"labelContent",{get:function(){return this.dataLabel.content},set:function(e){this.dataLabel.content=e},enumerable:!0,configurable:!0});var t;WjFlexChart.meta={outputs:wjFlexChartMeta.outputs,changeEvents:{selectionChanged:["selection"]}};
WjFlexChart.ɵfac = function WjFlexChart_Factory(t) { return new (t || WjFlexChart)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChart.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChart, selectors: [["wj-flex-chart"]], inputs: { asyncBindings: "asyncBindings", wjModelProperty: "wjModelProperty", renderEngine: "renderEngine", isDisabled: "isDisabled", tabOrder: "tabOrder", binding: "binding", footer: "footer", header: "header", selectionMode: "selectionMode", palette: "palette", plotMargin: "plotMargin", footerStyle: "footerStyle", headerStyle: "headerStyle", tooltipContent: "tooltipContent", itemsSource: "itemsSource", bindingX: "bindingX", interpolateNulls: "interpolateNulls", legendToggle: "legendToggle", symbolSize: "symbolSize", options: "options", selection: "selection", itemFormatter: "itemFormatter", labelContent: "labelContent", chartType: "chartType", rotated: "rotated", stacking: "stacking" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", renderingNg: "rendering", renderedNg: "rendered", selectionChangedNg: "selectionChanged", selectionChangePC: "selectionChange", itemsSourceChangingNg: "itemsSourceChanging", itemsSourceChangedNg: "itemsSourceChanged", seriesVisibilityChangedNg: "seriesVisibilityChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexChart_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChart, [{
        type: Component,
        args: [{ selector: wjFlexChartMeta.selector, template: wjFlexChartMeta.template, inputs: wjFlexChartMeta.inputs, outputs: wjFlexChartMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexChart=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChart)}(wjcChart.FlexChart);export{WjFlexChart};var wjFlexPieMeta={selector:"wj-flex-pie",template:"<div><ng-content></ng-content></div>",inputs:["wjModelProperty","isDisabled","tabOrder","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingName","innerRadius","isAnimated","offset","reversed","startAngle","selectedIndex","selectedItemPosition","selectedItemOffset","itemFormatter","labelContent","titles","chartsPerLine","innerText","innerTextStyle"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjFlexPieMeta};var WjFlexPie=function(e){__extends(WjFlexPie,e);function WjFlexPie(t,r,a){var n=e.call(this,WjDirectiveBehavior.getHostElement(t,r))||this;n.isInitialized=!1;n._wjBehaviour=WjDirectiveBehavior.attach(n,t,r,a);n.created();return n}t=WjFlexPie;WjFlexPie.prototype.created=function(){};WjFlexPie.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexPie.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexPie.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjFlexPie.prototype.addEventListener=function(t,r,a,n){var i=this;void 0===n&&(n=!1);var o=WjDirectiveBehavior,l=o.getZone(this);l&&o.outsideZoneEvents[r]?l.runOutsideAngular((function(){e.prototype.addEventListener.call(i,t,r,a,n)})):e.prototype.addEventListener.call(this,t,r,a,n)};Object.defineProperty(WjFlexPie.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(e){this.tooltip.content=e},enumerable:!0,configurable:!0});Object.defineProperty(WjFlexPie.prototype,"labelContent",{get:function(){return this.dataLabel.content},set:function(e){this.dataLabel.content=e},enumerable:!0,configurable:!0});var t;WjFlexPie.meta={outputs:wjFlexPieMeta.outputs};
WjFlexPie.ɵfac = function WjFlexPie_Factory(t) { return new (t || WjFlexPie)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexPie.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexPie, selectors: [["wj-flex-pie"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", binding: "binding", footer: "footer", header: "header", selectionMode: "selectionMode", palette: "palette", plotMargin: "plotMargin", footerStyle: "footerStyle", headerStyle: "headerStyle", tooltipContent: "tooltipContent", itemsSource: "itemsSource", bindingName: "bindingName", innerRadius: "innerRadius", isAnimated: "isAnimated", offset: "offset", reversed: "reversed", startAngle: "startAngle", selectedIndex: "selectedIndex", selectedItemPosition: "selectedItemPosition", selectedItemOffset: "selectedItemOffset", itemFormatter: "itemFormatter", labelContent: "labelContent", titles: "titles", chartsPerLine: "chartsPerLine", innerText: "innerText", innerTextStyle: "innerTextStyle" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", renderingNg: "rendering", renderedNg: "rendered", selectionChangedNg: "selectionChanged", itemsSourceChangingNg: "itemsSourceChanging", itemsSourceChangedNg: "itemsSourceChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexPieMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexPie_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexPie, [{
        type: Component,
        args: [{ selector: wjFlexPieMeta.selector, template: wjFlexPieMeta.template, inputs: wjFlexPieMeta.inputs, outputs: wjFlexPieMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexPieMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexPie=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexPie)}(wjcChart.FlexPie);export{WjFlexPie};var wjFlexChartAxisMeta={selector:"wj-flex-chart-axis",template:"",inputs:["wjProperty","axisLine","format","labels","majorGrid","majorTickMarks","majorUnit","max","min","position","reversed","title","labelAngle","minorGrid","minorTickMarks","minorUnit","origin","logBase","plotArea","labelAlign","name","overlappingLabels","labelPadding","itemFormatter","itemsSource","binding","labelMin","labelMax","groupsOptions"],outputs:["initialized","rangeChangedNg: rangeChanged"],providers:[]};export{wjFlexChartAxisMeta};var WjFlexChartAxis=function(e){__extends(WjFlexChartAxis,e);function WjFlexChartAxis(t,r,a){var n=e.call(this)||this;n.isInitialized=!1;n.wjProperty="axes";n._wjBehaviour=WjDirectiveBehavior.attach(n,t,r,a);n.created();return n}t=WjFlexChartAxis;WjFlexChartAxis.prototype.created=function(){};WjFlexChartAxis.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAxis.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAxis.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartAxis.meta={outputs:wjFlexChartAxisMeta.outputs};
WjFlexChartAxis.ɵfac = function WjFlexChartAxis_Factory(t) { return new (t || WjFlexChartAxis)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAxis.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAxis, selectors: [["wj-flex-chart-axis"]], inputs: { wjProperty: "wjProperty", axisLine: "axisLine", format: "format", labels: "labels", majorGrid: "majorGrid", majorTickMarks: "majorTickMarks", majorUnit: "majorUnit", max: "max", min: "min", position: "position", reversed: "reversed", title: "title", labelAngle: "labelAngle", minorGrid: "minorGrid", minorTickMarks: "minorTickMarks", minorUnit: "minorUnit", origin: "origin", logBase: "logBase", plotArea: "plotArea", labelAlign: "labelAlign", name: "name", overlappingLabels: "overlappingLabels", labelPadding: "labelPadding", itemFormatter: "itemFormatter", itemsSource: "itemsSource", binding: "binding", labelMin: "labelMin", labelMax: "labelMax", groupsOptions: "groupsOptions" }, outputs: { initialized: "initialized", rangeChangedNg: "rangeChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartAxisMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartAxis_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAxis, [{
        type: Component,
        args: [{ selector: wjFlexChartAxisMeta.selector, template: wjFlexChartAxisMeta.template, inputs: wjFlexChartAxisMeta.inputs, outputs: wjFlexChartAxisMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartAxisMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexChartAxis=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAxis)}(wjcChart.Axis);export{WjFlexChartAxis};var wjFlexChartLegendMeta={selector:"wj-flex-chart-legend",template:"",inputs:["wjProperty","orientation","position","title","titleAlign","maxSize","scrollbar"],outputs:["initialized"],providers:[]};export{wjFlexChartLegendMeta};var WjFlexChartLegend=function(e){__extends(WjFlexChartLegend,e);function WjFlexChartLegend(t,r,a){var n=e.call(this,a)||this;n.isInitialized=!1;n.wjProperty="legend";n._wjBehaviour=WjDirectiveBehavior.attach(n,t,r,a);n.created();return n}t=WjFlexChartLegend;WjFlexChartLegend.prototype.created=function(){};WjFlexChartLegend.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartLegend.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartLegend.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartLegend.meta={outputs:wjFlexChartLegendMeta.outputs};
WjFlexChartLegend.ɵfac = function WjFlexChartLegend_Factory(t) { return new (t || WjFlexChartLegend)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartLegend.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartLegend, selectors: [["wj-flex-chart-legend"]], inputs: { wjProperty: "wjProperty", orientation: "orientation", position: "position", title: "title", titleAlign: "titleAlign", maxSize: "maxSize", scrollbar: "scrollbar" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartLegendMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartLegend_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartLegend, [{
        type: Component,
        args: [{ selector: wjFlexChartLegendMeta.selector, template: wjFlexChartLegendMeta.template, inputs: wjFlexChartLegendMeta.inputs, outputs: wjFlexChartLegendMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartLegendMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexChartLegend=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartLegend)}(wjcChart.Legend);export{WjFlexChartLegend};var wjFlexChartDataLabelMeta={selector:"wj-flex-chart-data-label",template:"",inputs:["wjProperty","content","border","offset","connectingLine","position"],outputs:["initialized","renderingNg: rendering"],providers:[]};export{wjFlexChartDataLabelMeta};var WjFlexChartDataLabel=function(e){__extends(WjFlexChartDataLabel,e);function WjFlexChartDataLabel(t,r,a){var n=e.call(this)||this;n.isInitialized=!1;n.wjProperty="dataLabel";n._wjBehaviour=WjDirectiveBehavior.attach(n,t,r,a);n.created();return n}t=WjFlexChartDataLabel;WjFlexChartDataLabel.prototype.created=function(){};WjFlexChartDataLabel.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartDataLabel.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartDataLabel.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartDataLabel.meta={outputs:wjFlexChartDataLabelMeta.outputs};
WjFlexChartDataLabel.ɵfac = function WjFlexChartDataLabel_Factory(t) { return new (t || WjFlexChartDataLabel)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartDataLabel.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartDataLabel, selectors: [["wj-flex-chart-data-label"]], inputs: { wjProperty: "wjProperty", content: "content", border: "border", offset: "offset", connectingLine: "connectingLine", position: "position" }, outputs: { initialized: "initialized", renderingNg: "rendering" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartDataLabelMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartDataLabel_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartDataLabel, [{
        type: Component,
        args: [{ selector: wjFlexChartDataLabelMeta.selector, template: wjFlexChartDataLabelMeta.template, inputs: wjFlexChartDataLabelMeta.inputs, outputs: wjFlexChartDataLabelMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartDataLabelMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexChartDataLabel=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartDataLabel)}(wjcChart.DataLabel);export{WjFlexChartDataLabel};var wjFlexPieDataLabelMeta={selector:"wj-flex-pie-data-label",template:"",inputs:["wjProperty","content","border","offset","connectingLine","position"],outputs:["initialized","renderingNg: rendering"],providers:[]};export{wjFlexPieDataLabelMeta};var WjFlexPieDataLabel=function(e){__extends(WjFlexPieDataLabel,e);function WjFlexPieDataLabel(t,r,a){var n=e.call(this)||this;n.isInitialized=!1;n.wjProperty="dataLabel";n._wjBehaviour=WjDirectiveBehavior.attach(n,t,r,a);n.created();return n}t=WjFlexPieDataLabel;WjFlexPieDataLabel.prototype.created=function(){};WjFlexPieDataLabel.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexPieDataLabel.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexPieDataLabel.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexPieDataLabel.meta={outputs:wjFlexPieDataLabelMeta.outputs};
WjFlexPieDataLabel.ɵfac = function WjFlexPieDataLabel_Factory(t) { return new (t || WjFlexPieDataLabel)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexPieDataLabel.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexPieDataLabel, selectors: [["wj-flex-pie-data-label"]], inputs: { wjProperty: "wjProperty", content: "content", border: "border", offset: "offset", connectingLine: "connectingLine", position: "position" }, outputs: { initialized: "initialized", renderingNg: "rendering" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexPieDataLabelMeta.providers))], decls: 0, vars: 0, template: function WjFlexPieDataLabel_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexPieDataLabel, [{
        type: Component,
        args: [{ selector: wjFlexPieDataLabelMeta.selector, template: wjFlexPieDataLabelMeta.template, inputs: wjFlexPieDataLabelMeta.inputs, outputs: wjFlexPieDataLabelMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexPieDataLabelMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexPieDataLabel=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexPieDataLabel)}(wjcChart.PieDataLabel);export{WjFlexPieDataLabel};var wjFlexChartSeriesMeta={selector:"wj-flex-chart-series",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","chartType"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartSeriesMeta};var WjFlexChartSeries=function(e){__extends(WjFlexChartSeries,e);function WjFlexChartSeries(t,r,a){var n=e.call(this)||this;n.isInitialized=!1;n.wjProperty="series";n._wjBehaviour=WjDirectiveBehavior.attach(n,t,r,a);n.created();return n}t=WjFlexChartSeries;WjFlexChartSeries.prototype.created=function(){};WjFlexChartSeries.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartSeries.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartSeries.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartSeries.meta={outputs:wjFlexChartSeriesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};
WjFlexChartSeries.ɵfac = function WjFlexChartSeries_Factory(t) { return new (t || WjFlexChartSeries)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartSeries.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartSeries, selectors: [["wj-flex-chart-series"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", chartType: "chartType" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartSeriesMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexChartSeries_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartSeries, [{
        type: Component,
        args: [{ selector: wjFlexChartSeriesMeta.selector, template: wjFlexChartSeriesMeta.template, inputs: wjFlexChartSeriesMeta.inputs, outputs: wjFlexChartSeriesMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartSeriesMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexChartSeries=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartSeries)}(wjcChart.Series);export{WjFlexChartSeries};var wjFlexChartLineMarkerMeta={selector:"wj-flex-line-marker",template:"",inputs:["wjProperty","isVisible","seriesIndex","horizontalPosition","content","verticalPosition","alignment","lines","interaction","dragLines","dragThreshold","dragContent"],outputs:["initialized","positionChangedNg: positionChanged"],providers:[]};export{wjFlexChartLineMarkerMeta};var WjFlexChartLineMarker=function(e){__extends(WjFlexChartLineMarker,e);function WjFlexChartLineMarker(t,r,a){var n=e.call(this,a)||this;n.isInitialized=!1;n._wjBehaviour=WjDirectiveBehavior.attach(n,t,r,a);n.created();return n}t=WjFlexChartLineMarker;WjFlexChartLineMarker.prototype.created=function(){};WjFlexChartLineMarker.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartLineMarker.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartLineMarker.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartLineMarker.meta={outputs:wjFlexChartLineMarkerMeta.outputs};
WjFlexChartLineMarker.ɵfac = function WjFlexChartLineMarker_Factory(t) { return new (t || WjFlexChartLineMarker)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartLineMarker.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartLineMarker, selectors: [["wj-flex-line-marker"]], inputs: { wjProperty: "wjProperty", isVisible: "isVisible", seriesIndex: "seriesIndex", horizontalPosition: "horizontalPosition", content: "content", verticalPosition: "verticalPosition", alignment: "alignment", lines: "lines", interaction: "interaction", dragLines: "dragLines", dragThreshold: "dragThreshold", dragContent: "dragContent" }, outputs: { initialized: "initialized", positionChangedNg: "positionChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartLineMarkerMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartLineMarker_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartLineMarker, [{
        type: Component,
        args: [{ selector: wjFlexChartLineMarkerMeta.selector, template: wjFlexChartLineMarkerMeta.template, inputs: wjFlexChartLineMarkerMeta.inputs, outputs: wjFlexChartLineMarkerMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartLineMarkerMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexChartLineMarker=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartLineMarker)}(wjcChart.LineMarker);export{WjFlexChartLineMarker};var wjFlexChartDataPointMeta={selector:"wj-flex-chart-data-point",template:"",inputs:["wjProperty","x","y"],outputs:["initialized"],providers:[]};export{wjFlexChartDataPointMeta};var WjFlexChartDataPoint=function(e){__extends(WjFlexChartDataPoint,e);function WjFlexChartDataPoint(t,r,a){var n=e.call(this)||this;n.isInitialized=!1;n.wjProperty="";n._wjBehaviour=WjDirectiveBehavior.attach(n,t,r,a);n.created();return n}t=WjFlexChartDataPoint;WjFlexChartDataPoint.prototype.created=function(){};WjFlexChartDataPoint.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartDataPoint.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartDataPoint.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartDataPoint.meta={outputs:wjFlexChartDataPointMeta.outputs};
WjFlexChartDataPoint.ɵfac = function WjFlexChartDataPoint_Factory(t) { return new (t || WjFlexChartDataPoint)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartDataPoint.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartDataPoint, selectors: [["wj-flex-chart-data-point"]], inputs: { wjProperty: "wjProperty", x: "x", y: "y" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartDataPointMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartDataPoint_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartDataPoint, [{
        type: Component,
        args: [{ selector: wjFlexChartDataPointMeta.selector, template: wjFlexChartDataPointMeta.template, inputs: wjFlexChartDataPointMeta.inputs, outputs: wjFlexChartDataPointMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartDataPointMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexChartDataPoint=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartDataPoint)}(wjcChart.DataPoint);export{WjFlexChartDataPoint};var wjFlexChartPlotAreaMeta={selector:"wj-flex-chart-plot-area",template:"",inputs:["wjProperty","column","height","name","row","style","width"],outputs:["initialized"],providers:[]};export{wjFlexChartPlotAreaMeta};var WjFlexChartPlotArea=function(e){__extends(WjFlexChartPlotArea,e);function WjFlexChartPlotArea(t,r,a){var n=e.call(this)||this;n.isInitialized=!1;n.wjProperty="plotAreas";n._wjBehaviour=WjDirectiveBehavior.attach(n,t,r,a);n.created();return n}t=WjFlexChartPlotArea;WjFlexChartPlotArea.prototype.created=function(){};WjFlexChartPlotArea.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartPlotArea.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartPlotArea.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartPlotArea.meta={outputs:wjFlexChartPlotAreaMeta.outputs};
WjFlexChartPlotArea.ɵfac = function WjFlexChartPlotArea_Factory(t) { return new (t || WjFlexChartPlotArea)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartPlotArea.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartPlotArea, selectors: [["wj-flex-chart-plot-area"]], inputs: { wjProperty: "wjProperty", column: "column", height: "height", name: "name", row: "row", style: "style", width: "width" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartPlotAreaMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartPlotArea_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartPlotArea, [{
        type: Component,
        args: [{ selector: wjFlexChartPlotAreaMeta.selector, template: wjFlexChartPlotAreaMeta.template, inputs: wjFlexChartPlotAreaMeta.inputs, outputs: wjFlexChartPlotAreaMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartPlotAreaMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexChartPlotArea=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartPlotArea)}(wjcChart.PlotArea);export{WjFlexChartPlotArea};var moduleExports=[WjFlexChart,WjFlexPie,WjFlexChartAxis,WjFlexChartLegend,WjFlexChartDataLabel,WjFlexPieDataLabel,WjFlexChartSeries,WjFlexChartLineMarker,WjFlexChartDataPoint,WjFlexChartPlotArea],WjChartModule=function(){function WjChartModule(){}
WjChartModule.ɵfac = function WjChartModule_Factory(t) { return new (t || WjChartModule)(); };
WjChartModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjChartModule });
WjChartModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjChartModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjChartModule, { declarations: function () { return [WjFlexChart, WjFlexPie, WjFlexChartAxis, WjFlexChartLegend, WjFlexChartDataLabel, WjFlexPieDataLabel, WjFlexChartSeries, WjFlexChartLineMarker, WjFlexChartDataPoint, WjFlexChartPlotArea]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjFlexChart, WjFlexPie, WjFlexChartAxis, WjFlexChartLegend, WjFlexChartDataLabel, WjFlexPieDataLabel, WjFlexChartSeries, WjFlexChartLineMarker, WjFlexChartDataPoint, WjFlexChartPlotArea]; } }); })();return WjChartModule}();export{WjChartModule};