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

"use strict";var ɵngcc0 = require('@angular/core');
var ɵngcc1 = require('@angular/common');
var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}(),__decorate=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},__param=this&&this.__param||function(t,e){return function(n,r){e(n,r,t)}},__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);e.default=t;return e};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),common_1=require("@angular/common"),wijmo_angular2_directivebase_1=require("@grapecity/wijmo.angular2.directivebase"),wjcChartAnimation=__importStar(require("@grapecity/wijmo.chart.animation")),wjFlexChartAnimationMeta={selector:"wj-flex-chart-animation",template:"",inputs:["wjProperty","animationMode","easing","duration","axisAnimation"],outputs:["initialized"],providers:[]};exports.wjFlexChartAnimationMeta=wjFlexChartAnimationMeta;var WjFlexChartAnimation=function(t){__extends(WjFlexChartAnimation,t);function WjFlexChartAnimation(e,n,r){var o=t.call(this,r)||this;o.isInitialized=!1;o._wjBehaviour=wijmo_angular2_directivebase_1.WjDirectiveBehavior.attach(o,e,n,r);o.created();return o}e=WjFlexChartAnimation;WjFlexChartAnimation.prototype.created=function(){};WjFlexChartAnimation.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAnimation.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAnimation.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var e;WjFlexChartAnimation.meta={outputs:wjFlexChartAnimationMeta.outputs};
WjFlexChartAnimation.ɵfac = function WjFlexChartAnimation_Factory(t) { return new (t || WjFlexChartAnimation)(ɵngcc0.ɵɵdirectiveInject(core_1.ElementRef), ɵngcc0.ɵɵdirectiveInject(core_1.Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAnimation.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAnimation, selectors: [["wj-flex-chart-animation"]], inputs: { wjProperty: "wjProperty", animationMode: "animationMode", easing: "easing", duration: "duration", axisAnimation: "axisAnimation" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: core_1.forwardRef((function () { return e; })) }].concat(wjFlexChartAnimationMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartAnimation_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAnimation, [{
        type: core_1.Component,
        args: [{ selector: wjFlexChartAnimationMeta.selector, template: wjFlexChartAnimationMeta.template, inputs: wjFlexChartAnimationMeta.inputs, outputs: wjFlexChartAnimationMeta.outputs, providers: [{ provide: "WjComponent", useExisting: core_1.forwardRef((function () { return e; })) }].concat(wjFlexChartAnimationMeta.providers) }]
    }], function () { return [{ type: undefined, decorators: [{
                type: core_1.Inject,
                args: [core_1.ElementRef]
            }] }, { type: undefined, decorators: [{
                type: core_1.Inject,
                args: [core_1.Injector]
            }] }, { type: undefined, decorators: [{
                type: core_1.Inject,
                args: ["WjComponent"]
            }, {
                type: core_1.SkipSelf
            }, {
                type: core_1.Optional
            }] }]; }, null); })();return WjFlexChartAnimation=e=__decorate([,__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartAnimation)}(wjcChartAnimation.ChartAnimation);exports.WjFlexChartAnimation=WjFlexChartAnimation;var moduleExports=[WjFlexChartAnimation],WjChartAnimationModule=function(){function WjChartAnimationModule(){}
WjChartAnimationModule.ɵfac = function WjChartAnimationModule_Factory(t) { return new (t || WjChartAnimationModule)(); };
WjChartAnimationModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjChartAnimationModule });
WjChartAnimationModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [common_1.CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjChartAnimationModule, [{
        type: core_1.NgModule,
        args: [{ imports: [common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjChartAnimationModule, { declarations: [WjFlexChartAnimation], imports: [ɵngcc1.CommonModule], exports: [WjFlexChartAnimation] }); })();return WjChartAnimationModule}();exports.WjChartAnimationModule=WjChartAnimationModule;