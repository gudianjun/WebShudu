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
var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}(),__decorate=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var m=t.length-1;m>=0;m--)(i=t[m])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},__param=this&&this.__param||function(t,e){return function(n,o){e(n,o,t)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior}from"@grapecity/wijmo.angular2.directivebase";import*as wjcChartAnimation from"@grapecity/wijmo.chart.animation";var wjFlexChartAnimationMeta={selector:"wj-flex-chart-animation",template:"",inputs:["wjProperty","animationMode","easing","duration","axisAnimation"],outputs:["initialized"],providers:[]};export{wjFlexChartAnimationMeta};var WjFlexChartAnimation=function(t){__extends(WjFlexChartAnimation,t);function WjFlexChartAnimation(e,n,o){var i=t.call(this,o)||this;i.isInitialized=!1;i._wjBehaviour=WjDirectiveBehavior.attach(i,e,n,o);i.created();return i}e=WjFlexChartAnimation;WjFlexChartAnimation.prototype.created=function(){};WjFlexChartAnimation.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAnimation.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAnimation.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var e;WjFlexChartAnimation.meta={outputs:wjFlexChartAnimationMeta.outputs};
WjFlexChartAnimation.ɵfac = function WjFlexChartAnimation_Factory(t) { return new (t || WjFlexChartAnimation)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAnimation.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAnimation, selectors: [["wj-flex-chart-animation"]], inputs: { wjProperty: "wjProperty", animationMode: "animationMode", easing: "easing", duration: "duration", axisAnimation: "axisAnimation" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return e; })) }].concat(wjFlexChartAnimationMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartAnimation_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAnimation, [{
        type: Component,
        args: [{ selector: wjFlexChartAnimationMeta.selector, template: wjFlexChartAnimationMeta.template, inputs: wjFlexChartAnimationMeta.inputs, outputs: wjFlexChartAnimationMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return e; })) }].concat(wjFlexChartAnimationMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexChartAnimation=e=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAnimation)}(wjcChartAnimation.ChartAnimation);export{WjFlexChartAnimation};var moduleExports=[WjFlexChartAnimation],WjChartAnimationModule=function(){function WjChartAnimationModule(){}
WjChartAnimationModule.ɵfac = function WjChartAnimationModule_Factory(t) { return new (t || WjChartAnimationModule)(); };
WjChartAnimationModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjChartAnimationModule });
WjChartAnimationModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjChartAnimationModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjChartAnimationModule, { declarations: function () { return [WjFlexChartAnimation]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjFlexChartAnimation]; } }); })();return WjChartAnimationModule}();export{WjChartAnimationModule};