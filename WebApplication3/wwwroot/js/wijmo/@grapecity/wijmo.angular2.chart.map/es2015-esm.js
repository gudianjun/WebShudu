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
var WjFlexMap_1,WjScatterMapLayer_1,WjGeoMapLayer_1,WjGeoGridLayer_1,WjColorScale_1,__decorate=this&&this.__decorate||function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n},__param=this&&this.__param||function(e,t){return function(r,a){t(r,a,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"@grapecity/wijmo.angular2.directivebase";import*as wjcChartMap from"@grapecity/wijmo.chart.map";var wjFlexMapMeta={selector:"wj-flex-map",template:"<div><ng-content></ng-content></div>",inputs:["wjModelProperty","isDisabled","tabOrder","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","center","zoom"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjFlexMapMeta};let WjFlexMap=WjFlexMap_1=class WjFlexMap extends wjcChartMap.FlexMap{constructor(e,t,r){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,r,a=!1){let o=WjDirectiveBehavior,i=o.getZone(this);i&&o.outsideZoneEvents[t]?i.runOutsideAngular(()=>{super.addEventListener(e,t,r,a)}):super.addEventListener(e,t,r,a)}get tooltipContent(){return this.tooltip.content}set tooltipContent(e){this.tooltip.content=e}};
WjFlexMap.ɵfac = function WjFlexMap_Factory(t) { return new (t || WjFlexMap)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexMap.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexMap, selectors: [["wj-flex-map"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", binding: "binding", footer: "footer", header: "header", selectionMode: "selectionMode", palette: "palette", plotMargin: "plotMargin", footerStyle: "footerStyle", headerStyle: "headerStyle", tooltipContent: "tooltipContent", itemsSource: "itemsSource", center: "center", zoom: "zoom" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", renderingNg: "rendering", renderedNg: "rendered", selectionChangedNg: "selectionChanged", itemsSourceChangingNg: "itemsSourceChanging", itemsSourceChangedNg: "itemsSourceChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexMap_1) }, ...wjFlexMapMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexMap_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });WjFlexMap.meta={outputs:wjFlexMapMeta.outputs};WjFlexMap=WjFlexMap_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexMap);export{WjFlexMap};var wjScatterMapLayerMeta={selector:"wj-scatter-map-layer",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjProperty","style","itemsSource","url","symbolSize","symbolMinSize","symbolMaxSize","binding"],outputs:["initialized","itemsSourceChangedNg: itemsSourceChanged","itemsSourceChangePC: itemsSourceChange"],providers:[]};export{wjScatterMapLayerMeta};let WjScatterMapLayer=WjScatterMapLayer_1=class WjScatterMapLayer extends wjcChartMap.ScatterMapLayer{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="layers";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjScatterMapLayer.ɵfac = function WjScatterMapLayer_Factory(t) { return new (t || WjScatterMapLayer)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjScatterMapLayer.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjScatterMapLayer, selectors: [["wj-scatter-map-layer"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", style: "style", itemsSource: "itemsSource", url: "url", symbolSize: "symbolSize", symbolMinSize: "symbolMinSize", symbolMaxSize: "symbolMaxSize", binding: "binding" }, outputs: { initialized: "initialized", itemsSourceChangedNg: "itemsSourceChanged", itemsSourceChangePC: "itemsSourceChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjScatterMapLayer_1) }, ...wjScatterMapLayerMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjScatterMapLayer_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });WjScatterMapLayer.meta={outputs:wjScatterMapLayerMeta.outputs,changeEvents:{itemsSourceChanged:["itemsSource"]},siblingId:"layers"};WjScatterMapLayer=WjScatterMapLayer_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjScatterMapLayer);export{WjScatterMapLayer};var wjGeoMapLayerMeta={selector:"wj-geo-map-layer",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjProperty","style","itemsSource","url","itemFormatter","symbolSize"],outputs:["initialized","itemsSourceChangedNg: itemsSourceChanged","itemsSourceChangePC: itemsSourceChange"],providers:[]};export{wjGeoMapLayerMeta};let WjGeoMapLayer=WjGeoMapLayer_1=class WjGeoMapLayer extends wjcChartMap.GeoMapLayer{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="layers";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjGeoMapLayer.ɵfac = function WjGeoMapLayer_Factory(t) { return new (t || WjGeoMapLayer)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjGeoMapLayer.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjGeoMapLayer, selectors: [["wj-geo-map-layer"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", style: "style", itemsSource: "itemsSource", url: "url", itemFormatter: "itemFormatter", symbolSize: "symbolSize" }, outputs: { initialized: "initialized", itemsSourceChangedNg: "itemsSourceChanged", itemsSourceChangePC: "itemsSourceChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjGeoMapLayer_1) }, ...wjGeoMapLayerMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjGeoMapLayer_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });WjGeoMapLayer.meta={outputs:wjGeoMapLayerMeta.outputs,changeEvents:{itemsSourceChanged:["itemsSource"]},siblingId:"layers"};WjGeoMapLayer=WjGeoMapLayer_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjGeoMapLayer);export{WjGeoMapLayer};var wjGeoGridLayerMeta={selector:"wj-geo-grid-layer",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjProperty","style","itemsSource","url"],outputs:["initialized","itemsSourceChangedNg: itemsSourceChanged","itemsSourceChangePC: itemsSourceChange"],providers:[]};export{wjGeoGridLayerMeta};let WjGeoGridLayer=WjGeoGridLayer_1=class WjGeoGridLayer extends wjcChartMap.GeoGridLayer{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="layers";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjGeoGridLayer.ɵfac = function WjGeoGridLayer_Factory(t) { return new (t || WjGeoGridLayer)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjGeoGridLayer.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjGeoGridLayer, selectors: [["wj-geo-grid-layer"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", style: "style", itemsSource: "itemsSource", url: "url" }, outputs: { initialized: "initialized", itemsSourceChangedNg: "itemsSourceChanged", itemsSourceChangePC: "itemsSourceChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjGeoGridLayer_1) }, ...wjGeoGridLayerMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjGeoGridLayer_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });WjGeoGridLayer.meta={outputs:wjGeoGridLayerMeta.outputs,changeEvents:{itemsSourceChanged:["itemsSource"]},siblingId:"layers"};WjGeoGridLayer=WjGeoGridLayer_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjGeoGridLayer);export{WjGeoGridLayer};var wjColorScaleMeta={selector:"wj-color-scale",template:"",inputs:["wjProperty","scale","binding","colorUnknown","colors","format"],outputs:["initialized"],providers:[]};export{wjColorScaleMeta};let WjColorScale=WjColorScale_1=class WjColorScale extends wjcChartMap.ColorScale{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="colorScale";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjColorScale.ɵfac = function WjColorScale_Factory(t) { return new (t || WjColorScale)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjColorScale.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjColorScale, selectors: [["wj-color-scale"]], inputs: { wjProperty: "wjProperty", scale: "scale", binding: "binding", colorUnknown: "colorUnknown", colors: "colors", format: "format" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjColorScale_1) }, ...wjColorScaleMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjColorScale_Template(rf, ctx) { }, encapsulation: 2 });WjColorScale.meta={outputs:wjColorScaleMeta.outputs};WjColorScale=WjColorScale_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjColorScale);export{WjColorScale};let moduleExports=[WjFlexMap,WjScatterMapLayer,WjGeoMapLayer,WjGeoGridLayer,WjColorScale],WjChartMapModule=class WjChartMapModule{};
WjChartMapModule.ɵfac = function WjChartMapModule_Factory(t) { return new (t || WjChartMapModule)(); };
WjChartMapModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjChartMapModule });
WjChartMapModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexMap, [{
        type: Component,
        args: [{ selector: wjFlexMapMeta.selector, template: wjFlexMapMeta.template, inputs: wjFlexMapMeta.inputs, outputs: wjFlexMapMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexMap_1) }, ...wjFlexMapMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjScatterMapLayer, [{
        type: Component,
        args: [{ selector: wjScatterMapLayerMeta.selector, template: wjScatterMapLayerMeta.template, inputs: wjScatterMapLayerMeta.inputs, outputs: wjScatterMapLayerMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjScatterMapLayer_1) }, ...wjScatterMapLayerMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjGeoMapLayer, [{
        type: Component,
        args: [{ selector: wjGeoMapLayerMeta.selector, template: wjGeoMapLayerMeta.template, inputs: wjGeoMapLayerMeta.inputs, outputs: wjGeoMapLayerMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjGeoMapLayer_1) }, ...wjGeoMapLayerMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjGeoGridLayer, [{
        type: Component,
        args: [{ selector: wjGeoGridLayerMeta.selector, template: wjGeoGridLayerMeta.template, inputs: wjGeoGridLayerMeta.inputs, outputs: wjGeoGridLayerMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjGeoGridLayer_1) }, ...wjGeoGridLayerMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjColorScale, [{
        type: Component,
        args: [{ selector: wjColorScaleMeta.selector, template: wjColorScaleMeta.template, inputs: wjColorScaleMeta.inputs, outputs: wjColorScaleMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjColorScale_1) }, ...wjColorScaleMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjChartMapModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: [...moduleExports], exports: [...moduleExports] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjChartMapModule, { declarations: function () { return [WjFlexMap, WjScatterMapLayer, WjGeoMapLayer, WjGeoGridLayer, WjColorScale]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjFlexMap, WjScatterMapLayer, WjGeoMapLayer, WjGeoGridLayer, WjColorScale]; } }); })();export{WjChartMapModule};