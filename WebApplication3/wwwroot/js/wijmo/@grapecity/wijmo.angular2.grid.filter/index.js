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
var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,r,i){var o,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(l<3?o(n):l>3?o(t,r,n):o(t,r))||n);return l>3&&n&&Object.defineProperty(t,r,n),n},__param=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}},__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),common_1=require("@angular/common"),wijmo_angular2_directivebase_1=require("@grapecity/wijmo.angular2.directivebase"),wjcGridFilter=__importStar(require("@grapecity/wijmo.grid.filter")),wjFlexGridFilterMeta={selector:"wj-flex-grid-filter",template:"",inputs:["wjProperty","showFilterIcons","showSortButtons","defaultFilterType","filterColumns","exclusiveValueSearch","reApplyFilterOnUpdate"],outputs:["initialized","editingFilterNg: editingFilter","filterChangingNg: filterChanging","filterChangedNg: filterChanged","filterAppliedNg: filterApplied"],providers:[]};exports.wjFlexGridFilterMeta=wjFlexGridFilterMeta;var WjFlexGridFilter=function(e){__extends(WjFlexGridFilter,e);function WjFlexGridFilter(t,r,i){var o=e.call(this,i)||this;o.isInitialized=!1;o._wjBehaviour=wijmo_angular2_directivebase_1.WjDirectiveBehavior.attach(o,t,r,i);o.created();return o}t=WjFlexGridFilter;WjFlexGridFilter.prototype.created=function(){};WjFlexGridFilter.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexGridFilter.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexGridFilter.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexGridFilter.meta={outputs:wjFlexGridFilterMeta.outputs};
WjFlexGridFilter.ɵfac = function WjFlexGridFilter_Factory(t) { return new (t || WjFlexGridFilter)(ɵngcc0.ɵɵdirectiveInject(core_1.ElementRef), ɵngcc0.ɵɵdirectiveInject(core_1.Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexGridFilter.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexGridFilter, selectors: [["wj-flex-grid-filter"]], inputs: { wjProperty: "wjProperty", showFilterIcons: "showFilterIcons", showSortButtons: "showSortButtons", defaultFilterType: "defaultFilterType", filterColumns: "filterColumns", exclusiveValueSearch: "exclusiveValueSearch", reApplyFilterOnUpdate: "reApplyFilterOnUpdate" }, outputs: { initialized: "initialized", editingFilterNg: "editingFilter", filterChangingNg: "filterChanging", filterChangedNg: "filterChanged", filterAppliedNg: "filterApplied" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: core_1.forwardRef((function () { return t; })) }].concat(wjFlexGridFilterMeta.providers))], decls: 0, vars: 0, template: function WjFlexGridFilter_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexGridFilter, [{
        type: core_1.Component,
        args: [{ selector: wjFlexGridFilterMeta.selector, template: wjFlexGridFilterMeta.template, inputs: wjFlexGridFilterMeta.inputs, outputs: wjFlexGridFilterMeta.outputs, providers: [{ provide: "WjComponent", useExisting: core_1.forwardRef((function () { return t; })) }].concat(wjFlexGridFilterMeta.providers) }]
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
            }] }]; }, null); })();return WjFlexGridFilter=t=__decorate([,__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexGridFilter)}(wjcGridFilter.FlexGridFilter);exports.WjFlexGridFilter=WjFlexGridFilter;var moduleExports=[WjFlexGridFilter],WjGridFilterModule=function(){function WjGridFilterModule(){}
WjGridFilterModule.ɵfac = function WjGridFilterModule_Factory(t) { return new (t || WjGridFilterModule)(); };
WjGridFilterModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjGridFilterModule });
WjGridFilterModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [common_1.CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjGridFilterModule, [{
        type: core_1.NgModule,
        args: [{ imports: [common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjGridFilterModule, { declarations: [WjFlexGridFilter], imports: [ɵngcc1.CommonModule], exports: [WjFlexGridFilter] }); })();return WjGridFilterModule}();exports.WjGridFilterModule=WjGridFilterModule;