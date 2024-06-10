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
var WjFlexChartAnnotationLayer_1,WjFlexChartAnnotationText_1,WjFlexChartAnnotationEllipse_1,WjFlexChartAnnotationRectangle_1,WjFlexChartAnnotationLine_1,WjFlexChartAnnotationPolygon_1,WjFlexChartAnnotationCircle_1,WjFlexChartAnnotationSquare_1,WjFlexChartAnnotationImage_1,__decorate=this&&this.__decorate||function(t,e,n,a){var o,i=arguments.length,r=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(i<3?o(r):i>3?o(e,n,r):o(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r},__param=this&&this.__param||function(t,e){return function(n,a){e(n,a,t)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior}from"@grapecity/wijmo.angular2.directivebase";import*as wjcChartAnnotation from"@grapecity/wijmo.chart.annotation";var wjFlexChartAnnotationLayerMeta={selector:"wj-flex-chart-annotation-layer",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty"],outputs:["initialized"],providers:[]};export{wjFlexChartAnnotationLayerMeta};let WjFlexChartAnnotationLayer=WjFlexChartAnnotationLayer_1=class WjFlexChartAnnotationLayer extends wjcChartAnnotation.AnnotationLayer{constructor(t,e,n){super(n);this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,t,e,n);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartAnnotationLayer.ɵfac = function WjFlexChartAnnotationLayer_Factory(t) { return new (t || WjFlexChartAnnotationLayer)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAnnotationLayer.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAnnotationLayer, selectors: [["wj-flex-chart-annotation-layer"]], inputs: { wjProperty: "wjProperty" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAnnotationLayer_1) }, ...wjFlexChartAnnotationLayerMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexChartAnnotationLayer_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });WjFlexChartAnnotationLayer.meta={outputs:wjFlexChartAnnotationLayerMeta.outputs};WjFlexChartAnnotationLayer=WjFlexChartAnnotationLayer_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAnnotationLayer);export{WjFlexChartAnnotationLayer};var wjFlexChartAnnotationTextMeta={selector:"wj-flex-chart-annotation-text",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};export{wjFlexChartAnnotationTextMeta};let WjFlexChartAnnotationText=WjFlexChartAnnotationText_1=class WjFlexChartAnnotationText extends wjcChartAnnotation.Text{constructor(t,e,n){super();this.isInitialized=!1;this.wjProperty="items";this._wjBehaviour=WjDirectiveBehavior.attach(this,t,e,n);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartAnnotationText.ɵfac = function WjFlexChartAnnotationText_Factory(t) { return new (t || WjFlexChartAnnotationText)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAnnotationText.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAnnotationText, selectors: [["wj-flex-chart-annotation-text"]], inputs: { wjProperty: "wjProperty", type: "type", attachment: "attachment", position: "position", point: "point", seriesIndex: "seriesIndex", pointIndex: "pointIndex", offset: "offset", style: "style", isVisible: "isVisible", tooltip: "tooltip", text: "text", content: "content", name: "name", width: "width", height: "height", start: "start", end: "end", radius: "radius", length: "length", href: "href" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAnnotationText_1) }, ...wjFlexChartAnnotationTextMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexChartAnnotationText_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });WjFlexChartAnnotationText.meta={outputs:wjFlexChartAnnotationTextMeta.outputs,siblingId:"annotation"};WjFlexChartAnnotationText=WjFlexChartAnnotationText_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAnnotationText);export{WjFlexChartAnnotationText};var wjFlexChartAnnotationEllipseMeta={selector:"wj-flex-chart-annotation-ellipse",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};export{wjFlexChartAnnotationEllipseMeta};let WjFlexChartAnnotationEllipse=WjFlexChartAnnotationEllipse_1=class WjFlexChartAnnotationEllipse extends wjcChartAnnotation.Ellipse{constructor(t,e,n){super();this.isInitialized=!1;this.wjProperty="items";this._wjBehaviour=WjDirectiveBehavior.attach(this,t,e,n);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartAnnotationEllipse.ɵfac = function WjFlexChartAnnotationEllipse_Factory(t) { return new (t || WjFlexChartAnnotationEllipse)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAnnotationEllipse.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAnnotationEllipse, selectors: [["wj-flex-chart-annotation-ellipse"]], inputs: { wjProperty: "wjProperty", type: "type", attachment: "attachment", position: "position", point: "point", seriesIndex: "seriesIndex", pointIndex: "pointIndex", offset: "offset", style: "style", isVisible: "isVisible", tooltip: "tooltip", text: "text", content: "content", name: "name", width: "width", height: "height", start: "start", end: "end", radius: "radius", length: "length", href: "href" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAnnotationEllipse_1) }, ...wjFlexChartAnnotationEllipseMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexChartAnnotationEllipse_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });WjFlexChartAnnotationEllipse.meta={outputs:wjFlexChartAnnotationEllipseMeta.outputs,siblingId:"annotation"};WjFlexChartAnnotationEllipse=WjFlexChartAnnotationEllipse_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAnnotationEllipse);export{WjFlexChartAnnotationEllipse};var wjFlexChartAnnotationRectangleMeta={selector:"wj-flex-chart-annotation-rectangle",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};export{wjFlexChartAnnotationRectangleMeta};let WjFlexChartAnnotationRectangle=WjFlexChartAnnotationRectangle_1=class WjFlexChartAnnotationRectangle extends wjcChartAnnotation.Rectangle{constructor(t,e,n){super();this.isInitialized=!1;this.wjProperty="items";this._wjBehaviour=WjDirectiveBehavior.attach(this,t,e,n);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartAnnotationRectangle.ɵfac = function WjFlexChartAnnotationRectangle_Factory(t) { return new (t || WjFlexChartAnnotationRectangle)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAnnotationRectangle.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAnnotationRectangle, selectors: [["wj-flex-chart-annotation-rectangle"]], inputs: { wjProperty: "wjProperty", type: "type", attachment: "attachment", position: "position", point: "point", seriesIndex: "seriesIndex", pointIndex: "pointIndex", offset: "offset", style: "style", isVisible: "isVisible", tooltip: "tooltip", text: "text", content: "content", name: "name", width: "width", height: "height", start: "start", end: "end", radius: "radius", length: "length", href: "href" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAnnotationRectangle_1) }, ...wjFlexChartAnnotationRectangleMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexChartAnnotationRectangle_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });WjFlexChartAnnotationRectangle.meta={outputs:wjFlexChartAnnotationRectangleMeta.outputs,siblingId:"annotation"};WjFlexChartAnnotationRectangle=WjFlexChartAnnotationRectangle_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAnnotationRectangle);export{WjFlexChartAnnotationRectangle};var wjFlexChartAnnotationLineMeta={selector:"wj-flex-chart-annotation-line",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};export{wjFlexChartAnnotationLineMeta};let WjFlexChartAnnotationLine=WjFlexChartAnnotationLine_1=class WjFlexChartAnnotationLine extends wjcChartAnnotation.Line{constructor(t,e,n){super();this.isInitialized=!1;this.wjProperty="items";this._wjBehaviour=WjDirectiveBehavior.attach(this,t,e,n);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartAnnotationLine.ɵfac = function WjFlexChartAnnotationLine_Factory(t) { return new (t || WjFlexChartAnnotationLine)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAnnotationLine.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAnnotationLine, selectors: [["wj-flex-chart-annotation-line"]], inputs: { wjProperty: "wjProperty", type: "type", attachment: "attachment", position: "position", point: "point", seriesIndex: "seriesIndex", pointIndex: "pointIndex", offset: "offset", style: "style", isVisible: "isVisible", tooltip: "tooltip", text: "text", content: "content", name: "name", width: "width", height: "height", start: "start", end: "end", radius: "radius", length: "length", href: "href" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAnnotationLine_1) }, ...wjFlexChartAnnotationLineMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexChartAnnotationLine_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });WjFlexChartAnnotationLine.meta={outputs:wjFlexChartAnnotationLineMeta.outputs,siblingId:"annotation"};WjFlexChartAnnotationLine=WjFlexChartAnnotationLine_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAnnotationLine);export{WjFlexChartAnnotationLine};var wjFlexChartAnnotationPolygonMeta={selector:"wj-flex-chart-annotation-polygon",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};export{wjFlexChartAnnotationPolygonMeta};let WjFlexChartAnnotationPolygon=WjFlexChartAnnotationPolygon_1=class WjFlexChartAnnotationPolygon extends wjcChartAnnotation.Polygon{constructor(t,e,n){super();this.isInitialized=!1;this.wjProperty="items";this._wjBehaviour=WjDirectiveBehavior.attach(this,t,e,n);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartAnnotationPolygon.ɵfac = function WjFlexChartAnnotationPolygon_Factory(t) { return new (t || WjFlexChartAnnotationPolygon)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAnnotationPolygon.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAnnotationPolygon, selectors: [["wj-flex-chart-annotation-polygon"]], inputs: { wjProperty: "wjProperty", type: "type", attachment: "attachment", position: "position", point: "point", seriesIndex: "seriesIndex", pointIndex: "pointIndex", offset: "offset", style: "style", isVisible: "isVisible", tooltip: "tooltip", text: "text", content: "content", name: "name", width: "width", height: "height", start: "start", end: "end", radius: "radius", length: "length", href: "href" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAnnotationPolygon_1) }, ...wjFlexChartAnnotationPolygonMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexChartAnnotationPolygon_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });WjFlexChartAnnotationPolygon.meta={outputs:wjFlexChartAnnotationPolygonMeta.outputs,siblingId:"annotation"};WjFlexChartAnnotationPolygon=WjFlexChartAnnotationPolygon_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAnnotationPolygon);export{WjFlexChartAnnotationPolygon};var wjFlexChartAnnotationCircleMeta={selector:"wj-flex-chart-annotation-circle",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};export{wjFlexChartAnnotationCircleMeta};let WjFlexChartAnnotationCircle=WjFlexChartAnnotationCircle_1=class WjFlexChartAnnotationCircle extends wjcChartAnnotation.Circle{constructor(t,e,n){super();this.isInitialized=!1;this.wjProperty="items";this._wjBehaviour=WjDirectiveBehavior.attach(this,t,e,n);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartAnnotationCircle.ɵfac = function WjFlexChartAnnotationCircle_Factory(t) { return new (t || WjFlexChartAnnotationCircle)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAnnotationCircle.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAnnotationCircle, selectors: [["wj-flex-chart-annotation-circle"]], inputs: { wjProperty: "wjProperty", type: "type", attachment: "attachment", position: "position", point: "point", seriesIndex: "seriesIndex", pointIndex: "pointIndex", offset: "offset", style: "style", isVisible: "isVisible", tooltip: "tooltip", text: "text", content: "content", name: "name", width: "width", height: "height", start: "start", end: "end", radius: "radius", length: "length", href: "href" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAnnotationCircle_1) }, ...wjFlexChartAnnotationCircleMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexChartAnnotationCircle_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });WjFlexChartAnnotationCircle.meta={outputs:wjFlexChartAnnotationCircleMeta.outputs,siblingId:"annotation"};WjFlexChartAnnotationCircle=WjFlexChartAnnotationCircle_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAnnotationCircle);export{WjFlexChartAnnotationCircle};var wjFlexChartAnnotationSquareMeta={selector:"wj-flex-chart-annotation-square",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};export{wjFlexChartAnnotationSquareMeta};let WjFlexChartAnnotationSquare=WjFlexChartAnnotationSquare_1=class WjFlexChartAnnotationSquare extends wjcChartAnnotation.Square{constructor(t,e,n){super();this.isInitialized=!1;this.wjProperty="items";this._wjBehaviour=WjDirectiveBehavior.attach(this,t,e,n);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartAnnotationSquare.ɵfac = function WjFlexChartAnnotationSquare_Factory(t) { return new (t || WjFlexChartAnnotationSquare)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAnnotationSquare.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAnnotationSquare, selectors: [["wj-flex-chart-annotation-square"]], inputs: { wjProperty: "wjProperty", type: "type", attachment: "attachment", position: "position", point: "point", seriesIndex: "seriesIndex", pointIndex: "pointIndex", offset: "offset", style: "style", isVisible: "isVisible", tooltip: "tooltip", text: "text", content: "content", name: "name", width: "width", height: "height", start: "start", end: "end", radius: "radius", length: "length", href: "href" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAnnotationSquare_1) }, ...wjFlexChartAnnotationSquareMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexChartAnnotationSquare_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });WjFlexChartAnnotationSquare.meta={outputs:wjFlexChartAnnotationSquareMeta.outputs,siblingId:"annotation"};WjFlexChartAnnotationSquare=WjFlexChartAnnotationSquare_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAnnotationSquare);export{WjFlexChartAnnotationSquare};var wjFlexChartAnnotationImageMeta={selector:"wj-flex-chart-annotation-image",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};export{wjFlexChartAnnotationImageMeta};let WjFlexChartAnnotationImage=WjFlexChartAnnotationImage_1=class WjFlexChartAnnotationImage extends wjcChartAnnotation.Image{constructor(t,e,n){super();this.isInitialized=!1;this.wjProperty="items";this._wjBehaviour=WjDirectiveBehavior.attach(this,t,e,n);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartAnnotationImage.ɵfac = function WjFlexChartAnnotationImage_Factory(t) { return new (t || WjFlexChartAnnotationImage)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAnnotationImage.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAnnotationImage, selectors: [["wj-flex-chart-annotation-image"]], inputs: { wjProperty: "wjProperty", type: "type", attachment: "attachment", position: "position", point: "point", seriesIndex: "seriesIndex", pointIndex: "pointIndex", offset: "offset", style: "style", isVisible: "isVisible", tooltip: "tooltip", text: "text", content: "content", name: "name", width: "width", height: "height", start: "start", end: "end", radius: "radius", length: "length", href: "href" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAnnotationImage_1) }, ...wjFlexChartAnnotationImageMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjFlexChartAnnotationImage_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });WjFlexChartAnnotationImage.meta={outputs:wjFlexChartAnnotationImageMeta.outputs,siblingId:"annotation"};WjFlexChartAnnotationImage=WjFlexChartAnnotationImage_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAnnotationImage);export{WjFlexChartAnnotationImage};let moduleExports=[WjFlexChartAnnotationLayer,WjFlexChartAnnotationText,WjFlexChartAnnotationEllipse,WjFlexChartAnnotationRectangle,WjFlexChartAnnotationLine,WjFlexChartAnnotationPolygon,WjFlexChartAnnotationCircle,WjFlexChartAnnotationSquare,WjFlexChartAnnotationImage],WjChartAnnotationModule=class WjChartAnnotationModule{};
WjChartAnnotationModule.ɵfac = function WjChartAnnotationModule_Factory(t) { return new (t || WjChartAnnotationModule)(); };
WjChartAnnotationModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjChartAnnotationModule });
WjChartAnnotationModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAnnotationLayer, [{
        type: Component,
        args: [{ selector: wjFlexChartAnnotationLayerMeta.selector, template: wjFlexChartAnnotationLayerMeta.template, inputs: wjFlexChartAnnotationLayerMeta.inputs, outputs: wjFlexChartAnnotationLayerMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAnnotationLayer_1) }, ...wjFlexChartAnnotationLayerMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAnnotationText, [{
        type: Component,
        args: [{ selector: wjFlexChartAnnotationTextMeta.selector, template: wjFlexChartAnnotationTextMeta.template, inputs: wjFlexChartAnnotationTextMeta.inputs, outputs: wjFlexChartAnnotationTextMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAnnotationText_1) }, ...wjFlexChartAnnotationTextMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAnnotationEllipse, [{
        type: Component,
        args: [{ selector: wjFlexChartAnnotationEllipseMeta.selector, template: wjFlexChartAnnotationEllipseMeta.template, inputs: wjFlexChartAnnotationEllipseMeta.inputs, outputs: wjFlexChartAnnotationEllipseMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAnnotationEllipse_1) }, ...wjFlexChartAnnotationEllipseMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAnnotationRectangle, [{
        type: Component,
        args: [{ selector: wjFlexChartAnnotationRectangleMeta.selector, template: wjFlexChartAnnotationRectangleMeta.template, inputs: wjFlexChartAnnotationRectangleMeta.inputs, outputs: wjFlexChartAnnotationRectangleMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAnnotationRectangle_1) }, ...wjFlexChartAnnotationRectangleMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAnnotationLine, [{
        type: Component,
        args: [{ selector: wjFlexChartAnnotationLineMeta.selector, template: wjFlexChartAnnotationLineMeta.template, inputs: wjFlexChartAnnotationLineMeta.inputs, outputs: wjFlexChartAnnotationLineMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAnnotationLine_1) }, ...wjFlexChartAnnotationLineMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAnnotationPolygon, [{
        type: Component,
        args: [{ selector: wjFlexChartAnnotationPolygonMeta.selector, template: wjFlexChartAnnotationPolygonMeta.template, inputs: wjFlexChartAnnotationPolygonMeta.inputs, outputs: wjFlexChartAnnotationPolygonMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAnnotationPolygon_1) }, ...wjFlexChartAnnotationPolygonMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAnnotationCircle, [{
        type: Component,
        args: [{ selector: wjFlexChartAnnotationCircleMeta.selector, template: wjFlexChartAnnotationCircleMeta.template, inputs: wjFlexChartAnnotationCircleMeta.inputs, outputs: wjFlexChartAnnotationCircleMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAnnotationCircle_1) }, ...wjFlexChartAnnotationCircleMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAnnotationSquare, [{
        type: Component,
        args: [{ selector: wjFlexChartAnnotationSquareMeta.selector, template: wjFlexChartAnnotationSquareMeta.template, inputs: wjFlexChartAnnotationSquareMeta.inputs, outputs: wjFlexChartAnnotationSquareMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAnnotationSquare_1) }, ...wjFlexChartAnnotationSquareMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAnnotationImage, [{
        type: Component,
        args: [{ selector: wjFlexChartAnnotationImageMeta.selector, template: wjFlexChartAnnotationImageMeta.template, inputs: wjFlexChartAnnotationImageMeta.inputs, outputs: wjFlexChartAnnotationImageMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAnnotationImage_1) }, ...wjFlexChartAnnotationImageMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjChartAnnotationModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: [...moduleExports], exports: [...moduleExports] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjChartAnnotationModule, { declarations: function () { return [WjFlexChartAnnotationLayer, WjFlexChartAnnotationText, WjFlexChartAnnotationEllipse, WjFlexChartAnnotationRectangle, WjFlexChartAnnotationLine, WjFlexChartAnnotationPolygon, WjFlexChartAnnotationCircle, WjFlexChartAnnotationSquare, WjFlexChartAnnotationImage]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjFlexChartAnnotationLayer, WjFlexChartAnnotationText, WjFlexChartAnnotationEllipse, WjFlexChartAnnotationRectangle, WjFlexChartAnnotationLine, WjFlexChartAnnotationPolygon, WjFlexChartAnnotationCircle, WjFlexChartAnnotationSquare, WjFlexChartAnnotationImage]; } }); })();export{WjChartAnnotationModule};