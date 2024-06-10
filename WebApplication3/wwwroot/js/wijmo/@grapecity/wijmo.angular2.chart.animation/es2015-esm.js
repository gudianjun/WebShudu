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
var WjFlexChartAnimation_1,__decorate=this&&this.__decorate||function(t,e,i,a){var n,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var m=t.length-1;m>=0;m--)(n=t[m])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},__param=this&&this.__param||function(t,e){return function(i,a){e(i,a,t)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior}from"@grapecity/wijmo.angular2.directivebase";import*as wjcChartAnimation from"@grapecity/wijmo.chart.animation";var wjFlexChartAnimationMeta={selector:"wj-flex-chart-animation",template:"",inputs:["wjProperty","animationMode","easing","duration","axisAnimation"],outputs:["initialized"],providers:[]};export{wjFlexChartAnimationMeta};let WjFlexChartAnimation=WjFlexChartAnimation_1=class WjFlexChartAnimation extends wjcChartAnimation.ChartAnimation{constructor(t,e,i){super(i);this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,t,e,i);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};
WjFlexChartAnimation.ɵfac = function WjFlexChartAnimation_Factory(t) { return new (t || WjFlexChartAnimation)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAnimation.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAnimation, selectors: [["wj-flex-chart-animation"]], inputs: { wjProperty: "wjProperty", animationMode: "animationMode", easing: "easing", duration: "duration", axisAnimation: "axisAnimation" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAnimation_1) }, ...wjFlexChartAnimationMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjFlexChartAnimation_Template(rf, ctx) { }, encapsulation: 2 });WjFlexChartAnimation.meta={outputs:wjFlexChartAnimationMeta.outputs};WjFlexChartAnimation=WjFlexChartAnimation_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAnimation);export{WjFlexChartAnimation};let moduleExports=[WjFlexChartAnimation],WjChartAnimationModule=class WjChartAnimationModule{};
WjChartAnimationModule.ɵfac = function WjChartAnimationModule_Factory(t) { return new (t || WjChartAnimationModule)(); };
WjChartAnimationModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjChartAnimationModule });
WjChartAnimationModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAnimation, [{
        type: Component,
        args: [{ selector: wjFlexChartAnimationMeta.selector, template: wjFlexChartAnimationMeta.template, inputs: wjFlexChartAnimationMeta.inputs, outputs: wjFlexChartAnimationMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexChartAnimation_1) }, ...wjFlexChartAnimationMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjChartAnimationModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: [...moduleExports], exports: [...moduleExports] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjChartAnimationModule, { declarations: function () { return [WjFlexChartAnimation]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjFlexChartAnimation]; } }); })();export{WjChartAnimationModule};