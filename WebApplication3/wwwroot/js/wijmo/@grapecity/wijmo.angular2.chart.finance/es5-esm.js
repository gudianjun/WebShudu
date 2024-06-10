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
var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},__param=this&&this.__param||function(e,t){return function(n,i){t(n,i,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"@grapecity/wijmo.angular2.directivebase";import*as wjcChartFinance from"@grapecity/wijmo.chart.finance";var wjFinancialChartMeta={selector:"wj-financial-chart",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","renderEngine","isDisabled","tabOrder","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingX","interpolateNulls","legendToggle","symbolSize","options","selection","itemFormatter","labelContent","chartType"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","selectionChangePC: selectionChange","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged","seriesVisibilityChangedNg: seriesVisibilityChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjFinancialChartMeta};var WjFinancialChart=function(e){__extends(WjFinancialChart,e);function WjFinancialChart(t,n,i){var a=e.call(this,WjDirectiveBehavior.getHostElement(t,n))||this;a.isInitialized=!1;a._wjBehaviour=WjDirectiveBehavior.attach(a,t,n,i);a.created();return a}t=WjFinancialChart;WjFinancialChart.prototype.created=function(){};WjFinancialChart.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFinancialChart.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFinancialChart.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjFinancialChart.prototype.addEventListener=function(t,n,i,a){var r=this;void 0===a&&(a=!1);var o=WjDirectiveBehavior,c=o.getZone(this);c&&o.outsideZoneEvents[n]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(r,t,n,i,a)})):e.prototype.addEventListener.call(this,t,n,i,a)};Object.defineProperty(WjFinancialChart.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(e){this.tooltip.content=e},enumerable:!0,configurable:!0});Object.defineProperty(WjFinancialChart.prototype,"labelContent",{get:function(){return this.dataLabel.content},set:function(e){this.dataLabel.content=e},enumerable:!0,configurable:!0});var t;WjFinancialChart.meta={outputs:wjFinancialChartMeta.outputs,changeEvents:{selectionChanged:["selection"]}};
WjFinancialChart.ɵfac = function WjFinancialChart_Factory(t) { return new (t || WjFinancialChart)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFinancialChart.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFinancialChart, selectors: [["wj-financial-chart"]], inputs: { asyncBindings: "asyncBindings", wjModelProperty: "wjModelProperty", renderEngine: "renderEngine", isDisabled: "isDisabled", tabOrder: "tabOrder", binding: "binding", footer: "footer", header: "header", selectionMode: "selectionMode", palette: "palette", plotMargin: "plotMargin", footerStyle: "footerStyle", headerStyle: "headerStyle", tooltipContent: "tooltipContent", itemsSource: "itemsSource", bindingX: "bindingX", interpolateNulls: "interpolateNulls", legendToggle: "legendToggle", symbolSize: "symbolSize", options: "options", selection: "selection", itemFormatter: "itemFormatter", labelContent: "labelContent", chartType: "chartType" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", renderingNg: "rendering", renderedNg: "rendered", selectionChangedNg: "selectionChanged", selectionChangePC: "selectionChange", itemsSourceChangingNg: "itemsSourceChanging", itemsSourceChangedNg: "itemsSourceChanged", seriesVisibilityChangedNg: "seriesVisibilityChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFinancialChartMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFinancialChart_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFinancialChart, [{
        type: Component,
        args: [{ selector: wjFinancialChartMeta.selector, template: wjFinancialChartMeta.template, inputs: wjFinancialChartMeta.inputs, outputs: wjFinancialChartMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFinancialChartMeta.providers) }]
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
            }] }]; }, null); })();return WjFinancialChart=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFinancialChart)}(wjcChartFinance.FinancialChart);export{WjFinancialChart};var wjFinancialChartSeriesMeta={selector:"wj-financial-chart-series",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","chartType"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFinancialChartSeriesMeta};var WjFinancialChartSeries=function(e){__extends(WjFinancialChartSeries,e);function WjFinancialChartSeries(t,n,i){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=WjDirectiveBehavior.attach(a,t,n,i);a.created();return a}t=WjFinancialChartSeries;WjFinancialChartSeries.prototype.created=function(){};WjFinancialChartSeries.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFinancialChartSeries.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFinancialChartSeries.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFinancialChartSeries.meta={outputs:wjFinancialChartSeriesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};
WjFinancialChartSeries.ɵfac = function WjFinancialChartSeries_Factory(t) { return new (t || WjFinancialChartSeries)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFinancialChartSeries.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFinancialChartSeries, selectors: [["wj-financial-chart-series"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", chartType: "chartType" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFinancialChartSeriesMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFinancialChartSeries_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFinancialChartSeries, [{
        type: Component,
        args: [{ selector: wjFinancialChartSeriesMeta.selector, template: wjFinancialChartSeriesMeta.template, inputs: wjFinancialChartSeriesMeta.inputs, outputs: wjFinancialChartSeriesMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFinancialChartSeriesMeta.providers) }]
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
            }] }]; }, null); })();return WjFinancialChartSeries=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFinancialChartSeries)}(wjcChartFinance.FinancialSeries);export{WjFinancialChartSeries};var moduleExports=[WjFinancialChart,WjFinancialChartSeries],WjChartFinanceModule=function(){function WjChartFinanceModule(){}
WjChartFinanceModule.ɵfac = function WjChartFinanceModule_Factory(t) { return new (t || WjChartFinanceModule)(); };
WjChartFinanceModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjChartFinanceModule });
WjChartFinanceModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjChartFinanceModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjChartFinanceModule, { declarations: function () { return [WjFinancialChart, WjFinancialChartSeries]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjFinancialChart, WjFinancialChartSeries]; } }); })();return WjChartFinanceModule}();export{WjChartFinanceModule};