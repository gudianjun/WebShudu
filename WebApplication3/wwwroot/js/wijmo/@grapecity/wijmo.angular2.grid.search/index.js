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
var __extends=this&&this.__extends||function(){var extendStatics=function(e,r){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(e,r)};return function(e,r){extendStatics(e,r);function __(){this.constructor=e}e.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,r,t,o){var i,a=arguments.length,n=a<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,r,t,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(n=(a<3?i(n):a>3?i(r,t,n):i(r,t))||n);return a>3&&n&&Object.defineProperty(r,t,n),n},__param=this&&this.__param||function(e,r){return function(t,o){r(t,o,e)}},__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(r[t]=e[t]);r.default=e;return r};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),wijmo_angular2_directivebase_1=require("@grapecity/wijmo.angular2.directivebase"),wjcGridSearch=__importStar(require("@grapecity/wijmo.grid.search")),wjFlexGridSearchMeta={selector:"wj-flex-grid-search",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","text","delay","searchAllColumns","placeholder","cssMatch","grid"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directivebase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjFlexGridSearchMeta=wjFlexGridSearchMeta;var WjFlexGridSearch=function(e){__extends(WjFlexGridSearch,e);function WjFlexGridSearch(r,t,o){var i=e.call(this,wijmo_angular2_directivebase_1.WjDirectiveBehavior.getHostElement(r,t))||this;i.isInitialized=!1;i._wjBehaviour=wijmo_angular2_directivebase_1.WjDirectiveBehavior.attach(i,r,t,o);i.created();return i}r=WjFlexGridSearch;WjFlexGridSearch.prototype.created=function(){};WjFlexGridSearch.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexGridSearch.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexGridSearch.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjFlexGridSearch.prototype.addEventListener=function(r,t,o,i){var a=this;void 0===i&&(i=!1);var n=wijmo_angular2_directivebase_1.WjDirectiveBehavior,c=n.getZone(this);c&&n.outsideZoneEvents[t]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(a,r,t,o,i)})):e.prototype.addEventListener.call(this,r,t,o,i)};var r;WjFlexGridSearch.meta={outputs:wjFlexGridSearchMeta.outputs};
WjFlexGridSearch.ɵfac = function WjFlexGridSearch_Factory(t) { return new (t || WjFlexGridSearch)(ɵngcc0.ɵɵdirectiveInject(core_1.ElementRef), ɵngcc0.ɵɵdirectiveInject(core_1.Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexGridSearch.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexGridSearch, selectors: [["wj-flex-grid-search"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", text: "text", delay: "delay", searchAllColumns: "searchAllColumns", placeholder: "placeholder", cssMatch: "cssMatch", grid: "grid" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: core_1.forwardRef((function () { return r; })) }].concat(wjFlexGridSearchMeta.providers))], decls: 0, vars: 0, template: function WjFlexGridSearch_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexGridSearch, [{
        type: core_1.Component,
        args: [{ selector: wjFlexGridSearchMeta.selector, template: wjFlexGridSearchMeta.template, inputs: wjFlexGridSearchMeta.inputs, outputs: wjFlexGridSearchMeta.outputs, providers: [{ provide: "WjComponent", useExisting: core_1.forwardRef((function () { return r; })) }].concat(wjFlexGridSearchMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexGridSearch=r=__decorate([,__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexGridSearch)}(wjcGridSearch.FlexGridSearch);exports.WjFlexGridSearch=WjFlexGridSearch;var moduleExports=[WjFlexGridSearch],WjGridSearchModule=function(){function WjGridSearchModule(){}
WjGridSearchModule.ɵfac = function WjGridSearchModule_Factory(t) { return new (t || WjGridSearchModule)(); };
WjGridSearchModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjGridSearchModule });
WjGridSearchModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [common_1.CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjGridSearchModule, [{
        type: core_1.NgModule,
        args: [{ imports: [common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjGridSearchModule, { declarations: [WjFlexGridSearch], imports: [ɵngcc1.CommonModule], exports: [WjFlexGridSearch] }); })();return WjGridSearchModule}();exports.WjGridSearchModule=WjGridSearchModule;