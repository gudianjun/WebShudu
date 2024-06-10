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
var __extends=this&&this.__extends||function(){var extendStatics=function(t,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};return function(t,n){extendStatics(t,n);function __(){this.constructor=t}t.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}(),__decorate=this&&this.__decorate||function(t,n,e,o){var a,i=arguments.length,r=i<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,o);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(r=(i<3?a(r):i>3?a(n,e,r):a(n,e))||r);return i>3&&r&&Object.defineProperty(n,e,r),r},__param=this&&this.__param||function(t,n){return function(e,o){n(e,o,t)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior}from"@grapecity/wijmo.angular2.directivebase";import*as wjcChartAnnotation from"@grapecity/wijmo.chart.annotation";var wjFlexChartAnnotationLayerMeta={selector:"wj-flex-chart-annotation-layer",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty"],outputs:["initialized"],providers:[]};export{wjFlexChartAnnotationLayerMeta};var WjFlexChartAnnotationLayer=function(t){__extends(WjFlexChartAnnotationLayer,t);function WjFlexChartAnnotationLayer(n,e,o){var a=t.call(this,o)||this;a.isInitialized=!1;a._wjBehaviour=WjDirectiveBehavior.attach(a,n,e,o);a.created();return a}n=WjFlexChartAnnotationLayer;WjFlexChartAnnotationLayer.prototype.created=function(){};WjFlexChartAnnotationLayer.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAnnotationLayer.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAnnotationLayer.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var n;WjFlexChartAnnotationLayer.meta={outputs:wjFlexChartAnnotationLayerMeta.outputs};
WjFlexChartAnnotationLayer.ɵfac = function WjFlexChartAnnotationLayer_Factory(t) { return new (t || WjFlexChartAnnotationLayer)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAnnotationLayer.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAnnotationLayer, selectors: [["wj-flex-chart-annotation-layer"]], inputs: { wjProperty: "wjProperty" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return n; })) }].concat(wjFlexChartAnnotationLayerMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexChartAnnotationLayer_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAnnotationLayer, [{
        type: Component,
        args: [{ selector: wjFlexChartAnnotationLayerMeta.selector, template: wjFlexChartAnnotationLayerMeta.template, inputs: wjFlexChartAnnotationLayerMeta.inputs, outputs: wjFlexChartAnnotationLayerMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return n; })) }].concat(wjFlexChartAnnotationLayerMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexChartAnnotationLayer=n=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAnnotationLayer)}(wjcChartAnnotation.AnnotationLayer);export{WjFlexChartAnnotationLayer};var wjFlexChartAnnotationTextMeta={selector:"wj-flex-chart-annotation-text",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};export{wjFlexChartAnnotationTextMeta};var WjFlexChartAnnotationText=function(t){__extends(WjFlexChartAnnotationText,t);function WjFlexChartAnnotationText(n,e,o){var a=t.call(this)||this;a.isInitialized=!1;a.wjProperty="items";a._wjBehaviour=WjDirectiveBehavior.attach(a,n,e,o);a.created();return a}n=WjFlexChartAnnotationText;WjFlexChartAnnotationText.prototype.created=function(){};WjFlexChartAnnotationText.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAnnotationText.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAnnotationText.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var n;WjFlexChartAnnotationText.meta={outputs:wjFlexChartAnnotationTextMeta.outputs,siblingId:"annotation"};
WjFlexChartAnnotationText.ɵfac = function WjFlexChartAnnotationText_Factory(t) { return new (t || WjFlexChartAnnotationText)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAnnotationText.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAnnotationText, selectors: [["wj-flex-chart-annotation-text"]], inputs: { wjProperty: "wjProperty", type: "type", attachment: "attachment", position: "position", point: "point", seriesIndex: "seriesIndex", pointIndex: "pointIndex", offset: "offset", style: "style", isVisible: "isVisible", tooltip: "tooltip", text: "text", content: "content", name: "name", width: "width", height: "height", start: "start", end: "end", radius: "radius", length: "length", href: "href" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return n; })) }].concat(wjFlexChartAnnotationTextMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexChartAnnotationText_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAnnotationText, [{
        type: Component,
        args: [{ selector: wjFlexChartAnnotationTextMeta.selector, template: wjFlexChartAnnotationTextMeta.template, inputs: wjFlexChartAnnotationTextMeta.inputs, outputs: wjFlexChartAnnotationTextMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return n; })) }].concat(wjFlexChartAnnotationTextMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexChartAnnotationText=n=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAnnotationText)}(wjcChartAnnotation.Text);export{WjFlexChartAnnotationText};var wjFlexChartAnnotationEllipseMeta={selector:"wj-flex-chart-annotation-ellipse",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};export{wjFlexChartAnnotationEllipseMeta};var WjFlexChartAnnotationEllipse=function(t){__extends(WjFlexChartAnnotationEllipse,t);function WjFlexChartAnnotationEllipse(n,e,o){var a=t.call(this)||this;a.isInitialized=!1;a.wjProperty="items";a._wjBehaviour=WjDirectiveBehavior.attach(a,n,e,o);a.created();return a}n=WjFlexChartAnnotationEllipse;WjFlexChartAnnotationEllipse.prototype.created=function(){};WjFlexChartAnnotationEllipse.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAnnotationEllipse.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAnnotationEllipse.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var n;WjFlexChartAnnotationEllipse.meta={outputs:wjFlexChartAnnotationEllipseMeta.outputs,siblingId:"annotation"};
WjFlexChartAnnotationEllipse.ɵfac = function WjFlexChartAnnotationEllipse_Factory(t) { return new (t || WjFlexChartAnnotationEllipse)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAnnotationEllipse.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAnnotationEllipse, selectors: [["wj-flex-chart-annotation-ellipse"]], inputs: { wjProperty: "wjProperty", type: "type", attachment: "attachment", position: "position", point: "point", seriesIndex: "seriesIndex", pointIndex: "pointIndex", offset: "offset", style: "style", isVisible: "isVisible", tooltip: "tooltip", text: "text", content: "content", name: "name", width: "width", height: "height", start: "start", end: "end", radius: "radius", length: "length", href: "href" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return n; })) }].concat(wjFlexChartAnnotationEllipseMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexChartAnnotationEllipse_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAnnotationEllipse, [{
        type: Component,
        args: [{ selector: wjFlexChartAnnotationEllipseMeta.selector, template: wjFlexChartAnnotationEllipseMeta.template, inputs: wjFlexChartAnnotationEllipseMeta.inputs, outputs: wjFlexChartAnnotationEllipseMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return n; })) }].concat(wjFlexChartAnnotationEllipseMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexChartAnnotationEllipse=n=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAnnotationEllipse)}(wjcChartAnnotation.Ellipse);export{WjFlexChartAnnotationEllipse};var wjFlexChartAnnotationRectangleMeta={selector:"wj-flex-chart-annotation-rectangle",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};export{wjFlexChartAnnotationRectangleMeta};var WjFlexChartAnnotationRectangle=function(t){__extends(WjFlexChartAnnotationRectangle,t);function WjFlexChartAnnotationRectangle(n,e,o){var a=t.call(this)||this;a.isInitialized=!1;a.wjProperty="items";a._wjBehaviour=WjDirectiveBehavior.attach(a,n,e,o);a.created();return a}n=WjFlexChartAnnotationRectangle;WjFlexChartAnnotationRectangle.prototype.created=function(){};WjFlexChartAnnotationRectangle.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAnnotationRectangle.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAnnotationRectangle.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var n;WjFlexChartAnnotationRectangle.meta={outputs:wjFlexChartAnnotationRectangleMeta.outputs,siblingId:"annotation"};
WjFlexChartAnnotationRectangle.ɵfac = function WjFlexChartAnnotationRectangle_Factory(t) { return new (t || WjFlexChartAnnotationRectangle)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAnnotationRectangle.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAnnotationRectangle, selectors: [["wj-flex-chart-annotation-rectangle"]], inputs: { wjProperty: "wjProperty", type: "type", attachment: "attachment", position: "position", point: "point", seriesIndex: "seriesIndex", pointIndex: "pointIndex", offset: "offset", style: "style", isVisible: "isVisible", tooltip: "tooltip", text: "text", content: "content", name: "name", width: "width", height: "height", start: "start", end: "end", radius: "radius", length: "length", href: "href" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return n; })) }].concat(wjFlexChartAnnotationRectangleMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexChartAnnotationRectangle_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAnnotationRectangle, [{
        type: Component,
        args: [{ selector: wjFlexChartAnnotationRectangleMeta.selector, template: wjFlexChartAnnotationRectangleMeta.template, inputs: wjFlexChartAnnotationRectangleMeta.inputs, outputs: wjFlexChartAnnotationRectangleMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return n; })) }].concat(wjFlexChartAnnotationRectangleMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexChartAnnotationRectangle=n=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAnnotationRectangle)}(wjcChartAnnotation.Rectangle);export{WjFlexChartAnnotationRectangle};var wjFlexChartAnnotationLineMeta={selector:"wj-flex-chart-annotation-line",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};export{wjFlexChartAnnotationLineMeta};var WjFlexChartAnnotationLine=function(t){__extends(WjFlexChartAnnotationLine,t);function WjFlexChartAnnotationLine(n,e,o){var a=t.call(this)||this;a.isInitialized=!1;a.wjProperty="items";a._wjBehaviour=WjDirectiveBehavior.attach(a,n,e,o);a.created();return a}n=WjFlexChartAnnotationLine;WjFlexChartAnnotationLine.prototype.created=function(){};WjFlexChartAnnotationLine.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAnnotationLine.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAnnotationLine.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var n;WjFlexChartAnnotationLine.meta={outputs:wjFlexChartAnnotationLineMeta.outputs,siblingId:"annotation"};
WjFlexChartAnnotationLine.ɵfac = function WjFlexChartAnnotationLine_Factory(t) { return new (t || WjFlexChartAnnotationLine)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAnnotationLine.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAnnotationLine, selectors: [["wj-flex-chart-annotation-line"]], inputs: { wjProperty: "wjProperty", type: "type", attachment: "attachment", position: "position", point: "point", seriesIndex: "seriesIndex", pointIndex: "pointIndex", offset: "offset", style: "style", isVisible: "isVisible", tooltip: "tooltip", text: "text", content: "content", name: "name", width: "width", height: "height", start: "start", end: "end", radius: "radius", length: "length", href: "href" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return n; })) }].concat(wjFlexChartAnnotationLineMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexChartAnnotationLine_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAnnotationLine, [{
        type: Component,
        args: [{ selector: wjFlexChartAnnotationLineMeta.selector, template: wjFlexChartAnnotationLineMeta.template, inputs: wjFlexChartAnnotationLineMeta.inputs, outputs: wjFlexChartAnnotationLineMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return n; })) }].concat(wjFlexChartAnnotationLineMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexChartAnnotationLine=n=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAnnotationLine)}(wjcChartAnnotation.Line);export{WjFlexChartAnnotationLine};var wjFlexChartAnnotationPolygonMeta={selector:"wj-flex-chart-annotation-polygon",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};export{wjFlexChartAnnotationPolygonMeta};var WjFlexChartAnnotationPolygon=function(t){__extends(WjFlexChartAnnotationPolygon,t);function WjFlexChartAnnotationPolygon(n,e,o){var a=t.call(this)||this;a.isInitialized=!1;a.wjProperty="items";a._wjBehaviour=WjDirectiveBehavior.attach(a,n,e,o);a.created();return a}n=WjFlexChartAnnotationPolygon;WjFlexChartAnnotationPolygon.prototype.created=function(){};WjFlexChartAnnotationPolygon.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAnnotationPolygon.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAnnotationPolygon.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var n;WjFlexChartAnnotationPolygon.meta={outputs:wjFlexChartAnnotationPolygonMeta.outputs,siblingId:"annotation"};
WjFlexChartAnnotationPolygon.ɵfac = function WjFlexChartAnnotationPolygon_Factory(t) { return new (t || WjFlexChartAnnotationPolygon)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAnnotationPolygon.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAnnotationPolygon, selectors: [["wj-flex-chart-annotation-polygon"]], inputs: { wjProperty: "wjProperty", type: "type", attachment: "attachment", position: "position", point: "point", seriesIndex: "seriesIndex", pointIndex: "pointIndex", offset: "offset", style: "style", isVisible: "isVisible", tooltip: "tooltip", text: "text", content: "content", name: "name", width: "width", height: "height", start: "start", end: "end", radius: "radius", length: "length", href: "href" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return n; })) }].concat(wjFlexChartAnnotationPolygonMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexChartAnnotationPolygon_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAnnotationPolygon, [{
        type: Component,
        args: [{ selector: wjFlexChartAnnotationPolygonMeta.selector, template: wjFlexChartAnnotationPolygonMeta.template, inputs: wjFlexChartAnnotationPolygonMeta.inputs, outputs: wjFlexChartAnnotationPolygonMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return n; })) }].concat(wjFlexChartAnnotationPolygonMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexChartAnnotationPolygon=n=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAnnotationPolygon)}(wjcChartAnnotation.Polygon);export{WjFlexChartAnnotationPolygon};var wjFlexChartAnnotationCircleMeta={selector:"wj-flex-chart-annotation-circle",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};export{wjFlexChartAnnotationCircleMeta};var WjFlexChartAnnotationCircle=function(t){__extends(WjFlexChartAnnotationCircle,t);function WjFlexChartAnnotationCircle(n,e,o){var a=t.call(this)||this;a.isInitialized=!1;a.wjProperty="items";a._wjBehaviour=WjDirectiveBehavior.attach(a,n,e,o);a.created();return a}n=WjFlexChartAnnotationCircle;WjFlexChartAnnotationCircle.prototype.created=function(){};WjFlexChartAnnotationCircle.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAnnotationCircle.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAnnotationCircle.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var n;WjFlexChartAnnotationCircle.meta={outputs:wjFlexChartAnnotationCircleMeta.outputs,siblingId:"annotation"};
WjFlexChartAnnotationCircle.ɵfac = function WjFlexChartAnnotationCircle_Factory(t) { return new (t || WjFlexChartAnnotationCircle)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAnnotationCircle.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAnnotationCircle, selectors: [["wj-flex-chart-annotation-circle"]], inputs: { wjProperty: "wjProperty", type: "type", attachment: "attachment", position: "position", point: "point", seriesIndex: "seriesIndex", pointIndex: "pointIndex", offset: "offset", style: "style", isVisible: "isVisible", tooltip: "tooltip", text: "text", content: "content", name: "name", width: "width", height: "height", start: "start", end: "end", radius: "radius", length: "length", href: "href" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return n; })) }].concat(wjFlexChartAnnotationCircleMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexChartAnnotationCircle_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAnnotationCircle, [{
        type: Component,
        args: [{ selector: wjFlexChartAnnotationCircleMeta.selector, template: wjFlexChartAnnotationCircleMeta.template, inputs: wjFlexChartAnnotationCircleMeta.inputs, outputs: wjFlexChartAnnotationCircleMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return n; })) }].concat(wjFlexChartAnnotationCircleMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexChartAnnotationCircle=n=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAnnotationCircle)}(wjcChartAnnotation.Circle);export{WjFlexChartAnnotationCircle};var wjFlexChartAnnotationSquareMeta={selector:"wj-flex-chart-annotation-square",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};export{wjFlexChartAnnotationSquareMeta};var WjFlexChartAnnotationSquare=function(t){__extends(WjFlexChartAnnotationSquare,t);function WjFlexChartAnnotationSquare(n,e,o){var a=t.call(this)||this;a.isInitialized=!1;a.wjProperty="items";a._wjBehaviour=WjDirectiveBehavior.attach(a,n,e,o);a.created();return a}n=WjFlexChartAnnotationSquare;WjFlexChartAnnotationSquare.prototype.created=function(){};WjFlexChartAnnotationSquare.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAnnotationSquare.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAnnotationSquare.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var n;WjFlexChartAnnotationSquare.meta={outputs:wjFlexChartAnnotationSquareMeta.outputs,siblingId:"annotation"};
WjFlexChartAnnotationSquare.ɵfac = function WjFlexChartAnnotationSquare_Factory(t) { return new (t || WjFlexChartAnnotationSquare)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAnnotationSquare.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAnnotationSquare, selectors: [["wj-flex-chart-annotation-square"]], inputs: { wjProperty: "wjProperty", type: "type", attachment: "attachment", position: "position", point: "point", seriesIndex: "seriesIndex", pointIndex: "pointIndex", offset: "offset", style: "style", isVisible: "isVisible", tooltip: "tooltip", text: "text", content: "content", name: "name", width: "width", height: "height", start: "start", end: "end", radius: "radius", length: "length", href: "href" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return n; })) }].concat(wjFlexChartAnnotationSquareMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexChartAnnotationSquare_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAnnotationSquare, [{
        type: Component,
        args: [{ selector: wjFlexChartAnnotationSquareMeta.selector, template: wjFlexChartAnnotationSquareMeta.template, inputs: wjFlexChartAnnotationSquareMeta.inputs, outputs: wjFlexChartAnnotationSquareMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return n; })) }].concat(wjFlexChartAnnotationSquareMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexChartAnnotationSquare=n=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAnnotationSquare)}(wjcChartAnnotation.Square);export{WjFlexChartAnnotationSquare};var wjFlexChartAnnotationImageMeta={selector:"wj-flex-chart-annotation-image",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};export{wjFlexChartAnnotationImageMeta};var WjFlexChartAnnotationImage=function(t){__extends(WjFlexChartAnnotationImage,t);function WjFlexChartAnnotationImage(n,e,o){var a=t.call(this)||this;a.isInitialized=!1;a.wjProperty="items";a._wjBehaviour=WjDirectiveBehavior.attach(a,n,e,o);a.created();return a}n=WjFlexChartAnnotationImage;WjFlexChartAnnotationImage.prototype.created=function(){};WjFlexChartAnnotationImage.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAnnotationImage.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAnnotationImage.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var n;WjFlexChartAnnotationImage.meta={outputs:wjFlexChartAnnotationImageMeta.outputs,siblingId:"annotation"};
WjFlexChartAnnotationImage.ɵfac = function WjFlexChartAnnotationImage_Factory(t) { return new (t || WjFlexChartAnnotationImage)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAnnotationImage.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAnnotationImage, selectors: [["wj-flex-chart-annotation-image"]], inputs: { wjProperty: "wjProperty", type: "type", attachment: "attachment", position: "position", point: "point", seriesIndex: "seriesIndex", pointIndex: "pointIndex", offset: "offset", style: "style", isVisible: "isVisible", tooltip: "tooltip", text: "text", content: "content", name: "name", width: "width", height: "height", start: "start", end: "end", radius: "radius", length: "length", href: "href" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return n; })) }].concat(wjFlexChartAnnotationImageMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexChartAnnotationImage_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAnnotationImage, [{
        type: Component,
        args: [{ selector: wjFlexChartAnnotationImageMeta.selector, template: wjFlexChartAnnotationImageMeta.template, inputs: wjFlexChartAnnotationImageMeta.inputs, outputs: wjFlexChartAnnotationImageMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return n; })) }].concat(wjFlexChartAnnotationImageMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexChartAnnotationImage=n=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAnnotationImage)}(wjcChartAnnotation.Image);export{WjFlexChartAnnotationImage};var moduleExports=[WjFlexChartAnnotationLayer,WjFlexChartAnnotationText,WjFlexChartAnnotationEllipse,WjFlexChartAnnotationRectangle,WjFlexChartAnnotationLine,WjFlexChartAnnotationPolygon,WjFlexChartAnnotationCircle,WjFlexChartAnnotationSquare,WjFlexChartAnnotationImage],WjChartAnnotationModule=function(){function WjChartAnnotationModule(){}
WjChartAnnotationModule.ɵfac = function WjChartAnnotationModule_Factory(t) { return new (t || WjChartAnnotationModule)(); };
WjChartAnnotationModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjChartAnnotationModule });
WjChartAnnotationModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjChartAnnotationModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjChartAnnotationModule, { declarations: function () { return [WjFlexChartAnnotationLayer, WjFlexChartAnnotationText, WjFlexChartAnnotationEllipse, WjFlexChartAnnotationRectangle, WjFlexChartAnnotationLine, WjFlexChartAnnotationPolygon, WjFlexChartAnnotationCircle, WjFlexChartAnnotationSquare, WjFlexChartAnnotationImage]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjFlexChartAnnotationLayer, WjFlexChartAnnotationText, WjFlexChartAnnotationEllipse, WjFlexChartAnnotationRectangle, WjFlexChartAnnotationLine, WjFlexChartAnnotationPolygon, WjFlexChartAnnotationCircle, WjFlexChartAnnotationSquare, WjFlexChartAnnotationImage]; } }); })();return WjChartAnnotationModule}();export{WjChartAnnotationModule};