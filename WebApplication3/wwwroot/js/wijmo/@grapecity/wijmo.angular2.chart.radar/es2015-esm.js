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
var WjFlexRadar_1,WjFlexRadarAxis_1,WjFlexRadarSeries_1,__decorate=this&&this.__decorate||function(e,t,a,r){var i,n=arguments.length,o=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n<3?i(o):n>3?i(t,a,o):i(t,a))||o);return n>3&&o&&Object.defineProperty(t,a,o),o},__param=this&&this.__param||function(e,t){return function(a,r){t(a,r,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"@grapecity/wijmo.angular2.directivebase";import*as wjcChartRadar from"@grapecity/wijmo.chart.radar";var wjFlexRadarMeta={selector:"wj-flex-radar",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","renderEngine","isDisabled","tabOrder","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingX","interpolateNulls","legendToggle","symbolSize","options","selection","itemFormatter","labelContent","chartType","startAngle","totalAngle","reversed","stacking"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","selectionChangePC: selectionChange","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged","seriesVisibilityChangedNg: seriesVisibilityChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjFlexRadarMeta};let WjFlexRadar=WjFlexRadar_1=class WjFlexRadar extends wjcChartRadar.FlexRadar{constructor(e,t,a){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,a,r=!1){let i=WjDirectiveBehavior,n=i.getZone(this);n&&i.outsideZoneEvents[t]?n.runOutsideAngular(()=>{super.addEventListener(e,t,a,r)}):super.addEventListener(e,t,a,r)}get tooltipContent(){return this.tooltip.content}set tooltipContent(e){this.tooltip.content=e}get labelContent(){return this.dataLabel.content}set labelContent(e){this.dataLabel.content=e}};
WjFlexRadar.ɵfac = function WjFlexRadar_Factory(t) { return new (t || WjFlexRadar)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexRadar.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexRadar, selectors: [["wj-flex-radar"]], inputs: { asyncBindings: "asyncBindings", wjModelProperty: "wjModelProperty", renderEngine: "renderEngine", isDisabled: "isDisabled", tabOrder: "tabOrder", binding: "binding", footer: "footer", header: "header", selectionMode: "selectionMode", palette: "palette", plotMargin: "plotMargin", footerStyle: "footerStyle", headerStyle: "headerStyle", tooltipContent: "tooltipContent", itemsSource: "itemsSource", bindingX: "bindingX", interpolateNulls: "interpolateNulls", legendToggle: "legendToggle", symbolSize: "symbolSize", options: "options", selection: "selection", itemFormatter: "itemFormatter", labelContent: "labelContent", chartType: "chartType", startAngle: "startAngle", totalAngle: "totalAngle", reversed: "reversed", stacking: "stacking" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", renderingNg: "rendering", renderedNg: "rendered", selectionChangedNg: "selectionChanged", selectionChangePC: "selectionChange", itemsSourceChangingNg: "itemsSourceChanging", itemsSourceChangedNg: "itemsSourceChanged", seriesVisibilityChangedNg: "seriesVisibilityChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexRadar_1) }, ...wjFlexRadarMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexRadar_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });WjFlexRadar.meta={outputs:wjFlexRadarMeta.outputs,changeEvents:{selectionChanged:["selection"]}};WjFlexRadar=WjFlexRadar_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexRadar);export{WjFlexRadar};var wjFlexRadarAxisMeta={selector:"wj-flex-radar-axis",template:"",inputs:["wjProperty","axisLine","format","labels","majorGrid","majorTickMarks","majorUnit","max","min","position","reversed","title","labelAngle","minorGrid","minorTickMarks","minorUnit","origin","logBase","plotArea","labelAlign","name","overlappingLabels","labelPadding","itemFormatter","itemsSource","binding","labelMin","labelMax"],outputs:["initialized","rangeChangedNg: rangeChanged"],providers:[]};export{wjFlexRadarAxisMeta};let WjFlexRadarAxis=WjFlexRadarAxis_1=class WjFlexRadarAxis extends wjcChartRadar.FlexRadarAxis{constructor(e,t,a){super();this.isInitialized=!1;this.wjProperty="axes";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexRadarAxis.ɵfac = function WjFlexRadarAxis_Factory(t) { return new (t || WjFlexRadarAxis)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexRadarAxis.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexRadarAxis, selectors: [["wj-flex-radar-axis"]], inputs: { wjProperty: "wjProperty", axisLine: "axisLine", format: "format", labels: "labels", majorGrid: "majorGrid", majorTickMarks: "majorTickMarks", majorUnit: "majorUnit", max: "max", min: "min", position: "position", reversed: "reversed", title: "title", labelAngle: "labelAngle", minorGrid: "minorGrid", minorTickMarks: "minorTickMarks", minorUnit: "minorUnit", origin: "origin", logBase: "logBase", plotArea: "plotArea", labelAlign: "labelAlign", name: "name", overlappingLabels: "overlappingLabels", labelPadding: "labelPadding", itemFormatter: "itemFormatter", itemsSource: "itemsSource", binding: "binding", labelMin: "labelMin", labelMax: "labelMax" }, outputs: { initialized: "initialized", rangeChangedNg: "rangeChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexRadarAxis_1) }, ...wjFlexRadarAxisMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexRadarAxis_Template(rf, ctx) { }, encapsulation: 2 });WjFlexRadarAxis.meta={outputs:wjFlexRadarAxisMeta.outputs};WjFlexRadarAxis=WjFlexRadarAxis_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexRadarAxis);export{WjFlexRadarAxis};var wjFlexRadarSeriesMeta={selector:"wj-flex-radar-series",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","chartType"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexRadarSeriesMeta};let WjFlexRadarSeries=WjFlexRadarSeries_1=class WjFlexRadarSeries extends wjcChartRadar.FlexRadarSeries{constructor(e,t,a){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexRadarSeries.ɵfac = function WjFlexRadarSeries_Factory(t) { return new (t || WjFlexRadarSeries)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexRadarSeries.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexRadarSeries, selectors: [["wj-flex-radar-series"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", chartType: "chartType" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexRadarSeries_1) }, ...wjFlexRadarSeriesMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexRadarSeries_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });WjFlexRadarSeries.meta={outputs:wjFlexRadarSeriesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexRadarSeries=WjFlexRadarSeries_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexRadarSeries);export{WjFlexRadarSeries};let moduleExports=[WjFlexRadar,WjFlexRadarAxis,WjFlexRadarSeries],WjChartRadarModule=class WjChartRadarModule{};
WjChartRadarModule.ɵfac = function WjChartRadarModule_Factory(t) { return new (t || WjChartRadarModule)(); };
WjChartRadarModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjChartRadarModule });
WjChartRadarModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexRadar, [{
        type: Component,
        args: [{ selector: wjFlexRadarMeta.selector, template: wjFlexRadarMeta.template, inputs: wjFlexRadarMeta.inputs, outputs: wjFlexRadarMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexRadar_1) }, ...wjFlexRadarMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexRadarAxis, [{
        type: Component,
        args: [{ selector: wjFlexRadarAxisMeta.selector, template: wjFlexRadarAxisMeta.template, inputs: wjFlexRadarAxisMeta.inputs, outputs: wjFlexRadarAxisMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexRadarAxis_1) }, ...wjFlexRadarAxisMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexRadarSeries, [{
        type: Component,
        args: [{ selector: wjFlexRadarSeriesMeta.selector, template: wjFlexRadarSeriesMeta.template, inputs: wjFlexRadarSeriesMeta.inputs, outputs: wjFlexRadarSeriesMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexRadarSeries_1) }, ...wjFlexRadarSeriesMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjChartRadarModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: [...moduleExports], exports: [...moduleExports] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjChartRadarModule, { declarations: function () { return [WjFlexRadar, WjFlexRadarAxis, WjFlexRadarSeries]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjFlexRadar, WjFlexRadarAxis, WjFlexRadarSeries]; } }); })();export{WjChartRadarModule};