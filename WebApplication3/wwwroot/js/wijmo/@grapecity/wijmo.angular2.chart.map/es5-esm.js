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
var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,r,o){var a,n=arguments.length,i=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var p=e.length-1;p>=0;p--)(a=e[p])&&(i=(n<3?a(i):n>3?a(t,r,i):a(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i},__param=this&&this.__param||function(e,t){return function(r,o){t(r,o,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"@grapecity/wijmo.angular2.directivebase";import*as wjcChartMap from"@grapecity/wijmo.chart.map";var wjFlexMapMeta={selector:"wj-flex-map",template:"<div><ng-content></ng-content></div>",inputs:["wjModelProperty","isDisabled","tabOrder","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","center","zoom"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjFlexMapMeta};var WjFlexMap=function(e){__extends(WjFlexMap,e);function WjFlexMap(t,r,o){var a=e.call(this,WjDirectiveBehavior.getHostElement(t,r))||this;a.isInitialized=!1;a._wjBehaviour=WjDirectiveBehavior.attach(a,t,r,o);a.created();return a}t=WjFlexMap;WjFlexMap.prototype.created=function(){};WjFlexMap.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexMap.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexMap.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjFlexMap.prototype.addEventListener=function(t,r,o,a){var n=this;void 0===a&&(a=!1);var i=WjDirectiveBehavior,p=i.getZone(this);p&&i.outsideZoneEvents[r]?p.runOutsideAngular((function(){e.prototype.addEventListener.call(n,t,r,o,a)})):e.prototype.addEventListener.call(this,t,r,o,a)};Object.defineProperty(WjFlexMap.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(e){this.tooltip.content=e},enumerable:!0,configurable:!0});var t;WjFlexMap.meta={outputs:wjFlexMapMeta.outputs};
WjFlexMap.ɵfac = function WjFlexMap_Factory(t) { return new (t || WjFlexMap)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexMap.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexMap, selectors: [["wj-flex-map"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", binding: "binding", footer: "footer", header: "header", selectionMode: "selectionMode", palette: "palette", plotMargin: "plotMargin", footerStyle: "footerStyle", headerStyle: "headerStyle", tooltipContent: "tooltipContent", itemsSource: "itemsSource", center: "center", zoom: "zoom" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", renderingNg: "rendering", renderedNg: "rendered", selectionChangedNg: "selectionChanged", itemsSourceChangingNg: "itemsSourceChanging", itemsSourceChangedNg: "itemsSourceChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexMapMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexMap_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexMap, [{
        type: Component,
        args: [{ selector: wjFlexMapMeta.selector, template: wjFlexMapMeta.template, inputs: wjFlexMapMeta.inputs, outputs: wjFlexMapMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexMapMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexMap=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexMap)}(wjcChartMap.FlexMap);export{WjFlexMap};var wjScatterMapLayerMeta={selector:"wj-scatter-map-layer",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjProperty","style","itemsSource","url","symbolSize","symbolMinSize","symbolMaxSize","binding"],outputs:["initialized","itemsSourceChangedNg: itemsSourceChanged","itemsSourceChangePC: itemsSourceChange"],providers:[]};export{wjScatterMapLayerMeta};var WjScatterMapLayer=function(e){__extends(WjScatterMapLayer,e);function WjScatterMapLayer(t,r,o){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="layers";a._wjBehaviour=WjDirectiveBehavior.attach(a,t,r,o);a.created();return a}t=WjScatterMapLayer;WjScatterMapLayer.prototype.created=function(){};WjScatterMapLayer.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjScatterMapLayer.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjScatterMapLayer.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjScatterMapLayer.meta={outputs:wjScatterMapLayerMeta.outputs,changeEvents:{itemsSourceChanged:["itemsSource"]},siblingId:"layers"};
WjScatterMapLayer.ɵfac = function WjScatterMapLayer_Factory(t) { return new (t || WjScatterMapLayer)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjScatterMapLayer.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjScatterMapLayer, selectors: [["wj-scatter-map-layer"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", style: "style", itemsSource: "itemsSource", url: "url", symbolSize: "symbolSize", symbolMinSize: "symbolMinSize", symbolMaxSize: "symbolMaxSize", binding: "binding" }, outputs: { initialized: "initialized", itemsSourceChangedNg: "itemsSourceChanged", itemsSourceChangePC: "itemsSourceChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjScatterMapLayerMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjScatterMapLayer_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjScatterMapLayer, [{
        type: Component,
        args: [{ selector: wjScatterMapLayerMeta.selector, template: wjScatterMapLayerMeta.template, inputs: wjScatterMapLayerMeta.inputs, outputs: wjScatterMapLayerMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjScatterMapLayerMeta.providers) }]
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
            }] }]; }, null); })();return WjScatterMapLayer=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjScatterMapLayer)}(wjcChartMap.ScatterMapLayer);export{WjScatterMapLayer};var wjGeoMapLayerMeta={selector:"wj-geo-map-layer",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjProperty","style","itemsSource","url","itemFormatter","symbolSize"],outputs:["initialized","itemsSourceChangedNg: itemsSourceChanged","itemsSourceChangePC: itemsSourceChange"],providers:[]};export{wjGeoMapLayerMeta};var WjGeoMapLayer=function(e){__extends(WjGeoMapLayer,e);function WjGeoMapLayer(t,r,o){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="layers";a._wjBehaviour=WjDirectiveBehavior.attach(a,t,r,o);a.created();return a}t=WjGeoMapLayer;WjGeoMapLayer.prototype.created=function(){};WjGeoMapLayer.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjGeoMapLayer.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjGeoMapLayer.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjGeoMapLayer.meta={outputs:wjGeoMapLayerMeta.outputs,changeEvents:{itemsSourceChanged:["itemsSource"]},siblingId:"layers"};
WjGeoMapLayer.ɵfac = function WjGeoMapLayer_Factory(t) { return new (t || WjGeoMapLayer)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjGeoMapLayer.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjGeoMapLayer, selectors: [["wj-geo-map-layer"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", style: "style", itemsSource: "itemsSource", url: "url", itemFormatter: "itemFormatter", symbolSize: "symbolSize" }, outputs: { initialized: "initialized", itemsSourceChangedNg: "itemsSourceChanged", itemsSourceChangePC: "itemsSourceChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjGeoMapLayerMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjGeoMapLayer_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjGeoMapLayer, [{
        type: Component,
        args: [{ selector: wjGeoMapLayerMeta.selector, template: wjGeoMapLayerMeta.template, inputs: wjGeoMapLayerMeta.inputs, outputs: wjGeoMapLayerMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjGeoMapLayerMeta.providers) }]
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
            }] }]; }, null); })();return WjGeoMapLayer=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjGeoMapLayer)}(wjcChartMap.GeoMapLayer);export{WjGeoMapLayer};var wjGeoGridLayerMeta={selector:"wj-geo-grid-layer",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjProperty","style","itemsSource","url"],outputs:["initialized","itemsSourceChangedNg: itemsSourceChanged","itemsSourceChangePC: itemsSourceChange"],providers:[]};export{wjGeoGridLayerMeta};var WjGeoGridLayer=function(e){__extends(WjGeoGridLayer,e);function WjGeoGridLayer(t,r,o){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="layers";a._wjBehaviour=WjDirectiveBehavior.attach(a,t,r,o);a.created();return a}t=WjGeoGridLayer;WjGeoGridLayer.prototype.created=function(){};WjGeoGridLayer.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjGeoGridLayer.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjGeoGridLayer.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjGeoGridLayer.meta={outputs:wjGeoGridLayerMeta.outputs,changeEvents:{itemsSourceChanged:["itemsSource"]},siblingId:"layers"};
WjGeoGridLayer.ɵfac = function WjGeoGridLayer_Factory(t) { return new (t || WjGeoGridLayer)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjGeoGridLayer.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjGeoGridLayer, selectors: [["wj-geo-grid-layer"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", style: "style", itemsSource: "itemsSource", url: "url" }, outputs: { initialized: "initialized", itemsSourceChangedNg: "itemsSourceChanged", itemsSourceChangePC: "itemsSourceChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjGeoGridLayerMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjGeoGridLayer_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjGeoGridLayer, [{
        type: Component,
        args: [{ selector: wjGeoGridLayerMeta.selector, template: wjGeoGridLayerMeta.template, inputs: wjGeoGridLayerMeta.inputs, outputs: wjGeoGridLayerMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjGeoGridLayerMeta.providers) }]
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
            }] }]; }, null); })();return WjGeoGridLayer=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjGeoGridLayer)}(wjcChartMap.GeoGridLayer);export{WjGeoGridLayer};var wjColorScaleMeta={selector:"wj-color-scale",template:"",inputs:["wjProperty","scale","binding","colorUnknown","colors","format"],outputs:["initialized"],providers:[]};export{wjColorScaleMeta};var WjColorScale=function(e){__extends(WjColorScale,e);function WjColorScale(t,r,o){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="colorScale";a._wjBehaviour=WjDirectiveBehavior.attach(a,t,r,o);a.created();return a}t=WjColorScale;WjColorScale.prototype.created=function(){};WjColorScale.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjColorScale.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjColorScale.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjColorScale.meta={outputs:wjColorScaleMeta.outputs};
WjColorScale.ɵfac = function WjColorScale_Factory(t) { return new (t || WjColorScale)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjColorScale.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjColorScale, selectors: [["wj-color-scale"]], inputs: { wjProperty: "wjProperty", scale: "scale", binding: "binding", colorUnknown: "colorUnknown", colors: "colors", format: "format" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjColorScaleMeta.providers))], decls: 0, vars: 0, template: function WjColorScale_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjColorScale, [{
        type: Component,
        args: [{ selector: wjColorScaleMeta.selector, template: wjColorScaleMeta.template, inputs: wjColorScaleMeta.inputs, outputs: wjColorScaleMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjColorScaleMeta.providers) }]
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
            }] }]; }, null); })();return WjColorScale=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjColorScale)}(wjcChartMap.ColorScale);export{WjColorScale};var moduleExports=[WjFlexMap,WjScatterMapLayer,WjGeoMapLayer,WjGeoGridLayer,WjColorScale],WjChartMapModule=function(){function WjChartMapModule(){}
WjChartMapModule.ɵfac = function WjChartMapModule_Factory(t) { return new (t || WjChartMapModule)(); };
WjChartMapModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjChartMapModule });
WjChartMapModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjChartMapModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjChartMapModule, { declarations: function () { return [WjFlexMap, WjScatterMapLayer, WjGeoMapLayer, WjGeoGridLayer, WjColorScale]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjFlexMap, WjScatterMapLayer, WjGeoMapLayer, WjGeoGridLayer, WjColorScale]; } }); })();return WjChartMapModule}();export{WjChartMapModule};