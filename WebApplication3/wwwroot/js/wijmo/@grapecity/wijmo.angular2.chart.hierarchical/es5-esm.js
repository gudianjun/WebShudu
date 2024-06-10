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
var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},__param=this&&this.__param||function(e,t){return function(r,n){t(r,n,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"@grapecity/wijmo.angular2.directivebase";import*as wjcChartHierarchical from"@grapecity/wijmo.chart.hierarchical";var wjSunburstMeta={selector:"wj-sunburst",template:"<div><ng-content></ng-content></div>",inputs:["wjModelProperty","isDisabled","tabOrder","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingName","innerRadius","isAnimated","offset","reversed","startAngle","selectedIndex","selectedItemPosition","selectedItemOffset","itemFormatter","labelContent","childItemsPath"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjSunburstMeta};var WjSunburst=function(e){__extends(WjSunburst,e);function WjSunburst(t,r,n){var o=e.call(this,WjDirectiveBehavior.getHostElement(t,r))||this;o.isInitialized=!1;o._wjBehaviour=WjDirectiveBehavior.attach(o,t,r,n);o.created();return o}t=WjSunburst;WjSunburst.prototype.created=function(){};WjSunburst.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjSunburst.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjSunburst.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjSunburst.prototype.addEventListener=function(t,r,n,o){var i=this;void 0===o&&(o=!1);var a=WjDirectiveBehavior,u=a.getZone(this);u&&a.outsideZoneEvents[r]?u.runOutsideAngular((function(){e.prototype.addEventListener.call(i,t,r,n,o)})):e.prototype.addEventListener.call(this,t,r,n,o)};Object.defineProperty(WjSunburst.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(e){this.tooltip.content=e},enumerable:!0,configurable:!0});Object.defineProperty(WjSunburst.prototype,"labelContent",{get:function(){return this.dataLabel.content},set:function(e){this.dataLabel.content=e},enumerable:!0,configurable:!0});var t;WjSunburst.meta={outputs:wjSunburstMeta.outputs};
WjSunburst.ɵfac = function WjSunburst_Factory(t) { return new (t || WjSunburst)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjSunburst.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjSunburst, selectors: [["wj-sunburst"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", binding: "binding", footer: "footer", header: "header", selectionMode: "selectionMode", palette: "palette", plotMargin: "plotMargin", footerStyle: "footerStyle", headerStyle: "headerStyle", tooltipContent: "tooltipContent", itemsSource: "itemsSource", bindingName: "bindingName", innerRadius: "innerRadius", isAnimated: "isAnimated", offset: "offset", reversed: "reversed", startAngle: "startAngle", selectedIndex: "selectedIndex", selectedItemPosition: "selectedItemPosition", selectedItemOffset: "selectedItemOffset", itemFormatter: "itemFormatter", labelContent: "labelContent", childItemsPath: "childItemsPath" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", renderingNg: "rendering", renderedNg: "rendered", selectionChangedNg: "selectionChanged", itemsSourceChangingNg: "itemsSourceChanging", itemsSourceChangedNg: "itemsSourceChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjSunburstMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjSunburst_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjSunburst, [{
        type: Component,
        args: [{ selector: wjSunburstMeta.selector, template: wjSunburstMeta.template, inputs: wjSunburstMeta.inputs, outputs: wjSunburstMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjSunburstMeta.providers) }]
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
            }] }]; }, null); })();return WjSunburst=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjSunburst)}(wjcChartHierarchical.Sunburst);export{WjSunburst};var wjTreeMapMeta={selector:"wj-tree-map",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingName","maxDepth","type","labelContent","childItemsPath"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjTreeMapMeta};var WjTreeMap=function(e){__extends(WjTreeMap,e);function WjTreeMap(t,r,n){var o=e.call(this,WjDirectiveBehavior.getHostElement(t,r))||this;o.isInitialized=!1;o._wjBehaviour=WjDirectiveBehavior.attach(o,t,r,n);o.created();return o}t=WjTreeMap;WjTreeMap.prototype.created=function(){};WjTreeMap.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjTreeMap.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjTreeMap.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjTreeMap.prototype.addEventListener=function(t,r,n,o){var i=this;void 0===o&&(o=!1);var a=WjDirectiveBehavior,u=a.getZone(this);u&&a.outsideZoneEvents[r]?u.runOutsideAngular((function(){e.prototype.addEventListener.call(i,t,r,n,o)})):e.prototype.addEventListener.call(this,t,r,n,o)};Object.defineProperty(WjTreeMap.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(e){this.tooltip.content=e},enumerable:!0,configurable:!0});Object.defineProperty(WjTreeMap.prototype,"labelContent",{get:function(){return this.dataLabel.content},set:function(e){this.dataLabel.content=e},enumerable:!0,configurable:!0});var t;WjTreeMap.meta={outputs:wjTreeMapMeta.outputs};
WjTreeMap.ɵfac = function WjTreeMap_Factory(t) { return new (t || WjTreeMap)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjTreeMap.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjTreeMap, selectors: [["wj-tree-map"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", binding: "binding", footer: "footer", header: "header", selectionMode: "selectionMode", palette: "palette", plotMargin: "plotMargin", footerStyle: "footerStyle", headerStyle: "headerStyle", tooltipContent: "tooltipContent", itemsSource: "itemsSource", bindingName: "bindingName", maxDepth: "maxDepth", type: "type", labelContent: "labelContent", childItemsPath: "childItemsPath" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", renderingNg: "rendering", renderedNg: "rendered", selectionChangedNg: "selectionChanged", itemsSourceChangingNg: "itemsSourceChanging", itemsSourceChangedNg: "itemsSourceChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjTreeMapMeta.providers))], decls: 0, vars: 0, template: function WjTreeMap_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjTreeMap, [{
        type: Component,
        args: [{ selector: wjTreeMapMeta.selector, template: wjTreeMapMeta.template, inputs: wjTreeMapMeta.inputs, outputs: wjTreeMapMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjTreeMapMeta.providers) }]
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
            }] }]; }, null); })();return WjTreeMap=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjTreeMap)}(wjcChartHierarchical.TreeMap);export{WjTreeMap};var moduleExports=[WjSunburst,WjTreeMap],WjChartHierarchicalModule=function(){function WjChartHierarchicalModule(){}
WjChartHierarchicalModule.ɵfac = function WjChartHierarchicalModule_Factory(t) { return new (t || WjChartHierarchicalModule)(); };
WjChartHierarchicalModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjChartHierarchicalModule });
WjChartHierarchicalModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjChartHierarchicalModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjChartHierarchicalModule, { declarations: function () { return [WjSunburst, WjTreeMap]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjSunburst, WjTreeMap]; } }); })();return WjChartHierarchicalModule}();export{WjChartHierarchicalModule};