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
var __extends=this&&this.__extends||function(){var extendStatics=function(e,r){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(e,r)};return function(e,r){extendStatics(e,r);function __(){this.constructor=e}e.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,r,t,o){var n,a=arguments.length,i=a<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,r,t,o);else for(var u=e.length-1;u>=0;u--)(n=e[u])&&(i=(a<3?n(i):a>3?n(r,t,i):n(r,t))||i);return a>3&&i&&Object.defineProperty(r,t,i),i},__param=this&&this.__param||function(e,r){return function(t,o){r(t,o,e)}},__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(r[t]=e[t]);r.default=e;return r};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),wijmo_angular2_directivebase_1=require("@grapecity/wijmo.angular2.directivebase"),wjcGridGrouppanel=__importStar(require("@grapecity/wijmo.grid.grouppanel")),wjGroupPanelMeta={selector:"wj-group-panel",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","hideGroupedColumns","showDragGlyphs","maxGroups","placeholder","filter","groupDescriptionCreator","grid"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directivebase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjGroupPanelMeta=wjGroupPanelMeta;var WjGroupPanel=function(e){__extends(WjGroupPanel,e);function WjGroupPanel(r,t,o){var n=e.call(this,wijmo_angular2_directivebase_1.WjDirectiveBehavior.getHostElement(r,t))||this;n.isInitialized=!1;n._wjBehaviour=wijmo_angular2_directivebase_1.WjDirectiveBehavior.attach(n,r,t,o);n.created();return n}r=WjGroupPanel;WjGroupPanel.prototype.created=function(){};WjGroupPanel.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjGroupPanel.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjGroupPanel.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjGroupPanel.prototype.addEventListener=function(r,t,o,n){var a=this;void 0===n&&(n=!1);var i=wijmo_angular2_directivebase_1.WjDirectiveBehavior,u=i.getZone(this);u&&i.outsideZoneEvents[t]?u.runOutsideAngular((function(){e.prototype.addEventListener.call(a,r,t,o,n)})):e.prototype.addEventListener.call(this,r,t,o,n)};var r;WjGroupPanel.meta={outputs:wjGroupPanelMeta.outputs};
WjGroupPanel.ɵfac = function WjGroupPanel_Factory(t) { return new (t || WjGroupPanel)(ɵngcc0.ɵɵdirectiveInject(core_1.ElementRef), ɵngcc0.ɵɵdirectiveInject(core_1.Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjGroupPanel.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjGroupPanel, selectors: [["wj-group-panel"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", hideGroupedColumns: "hideGroupedColumns", showDragGlyphs: "showDragGlyphs", maxGroups: "maxGroups", placeholder: "placeholder", filter: "filter", groupDescriptionCreator: "groupDescriptionCreator", grid: "grid" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: core_1.forwardRef((function () { return r; })) }].concat(wjGroupPanelMeta.providers))], decls: 0, vars: 0, template: function WjGroupPanel_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjGroupPanel, [{
        type: core_1.Component,
        args: [{ selector: wjGroupPanelMeta.selector, template: wjGroupPanelMeta.template, inputs: wjGroupPanelMeta.inputs, outputs: wjGroupPanelMeta.outputs, providers: [{ provide: "WjComponent", useExisting: core_1.forwardRef((function () { return r; })) }].concat(wjGroupPanelMeta.providers) }]
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
            }] }]; }, null); })();return WjGroupPanel=r=__decorate([,__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjGroupPanel)}(wjcGridGrouppanel.GroupPanel);exports.WjGroupPanel=WjGroupPanel;var moduleExports=[WjGroupPanel],WjGridGrouppanelModule=function(){function WjGridGrouppanelModule(){}
WjGridGrouppanelModule.ɵfac = function WjGridGrouppanelModule_Factory(t) { return new (t || WjGridGrouppanelModule)(); };
WjGridGrouppanelModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjGridGrouppanelModule });
WjGridGrouppanelModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [common_1.CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjGridGrouppanelModule, [{
        type: core_1.NgModule,
        args: [{ imports: [common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjGridGrouppanelModule, { declarations: [WjGroupPanel], imports: [ɵngcc1.CommonModule], exports: [WjGroupPanel] }); })();return WjGridGrouppanelModule}();exports.WjGridGrouppanelModule=WjGridGrouppanelModule;