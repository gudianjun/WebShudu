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
var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,o,r){var n,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var p=e.length-1;p>=0;p--)(n=e[p])&&(i=(a<3?n(i):a>3?n(t,o,i):n(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i},__param=this&&this.__param||function(e,t){return function(o,r){t(o,r,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"@grapecity/wijmo.angular2.directivebase";import*as wjcGridGrouppanel from"@grapecity/wijmo.grid.grouppanel";var wjGroupPanelMeta={selector:"wj-group-panel",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","hideGroupedColumns","showDragGlyphs","maxGroups","placeholder","filter","groupDescriptionCreator","grid"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjGroupPanelMeta};var WjGroupPanel=function(e){__extends(WjGroupPanel,e);function WjGroupPanel(t,o,r){var n=e.call(this,WjDirectiveBehavior.getHostElement(t,o))||this;n.isInitialized=!1;n._wjBehaviour=WjDirectiveBehavior.attach(n,t,o,r);n.created();return n}t=WjGroupPanel;WjGroupPanel.prototype.created=function(){};WjGroupPanel.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjGroupPanel.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjGroupPanel.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjGroupPanel.prototype.addEventListener=function(t,o,r,n){var a=this;void 0===n&&(n=!1);var i=WjDirectiveBehavior,p=i.getZone(this);p&&i.outsideZoneEvents[o]?p.runOutsideAngular((function(){e.prototype.addEventListener.call(a,t,o,r,n)})):e.prototype.addEventListener.call(this,t,o,r,n)};var t;WjGroupPanel.meta={outputs:wjGroupPanelMeta.outputs};
WjGroupPanel.ɵfac = function WjGroupPanel_Factory(t) { return new (t || WjGroupPanel)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjGroupPanel.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjGroupPanel, selectors: [["wj-group-panel"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", hideGroupedColumns: "hideGroupedColumns", showDragGlyphs: "showDragGlyphs", maxGroups: "maxGroups", placeholder: "placeholder", filter: "filter", groupDescriptionCreator: "groupDescriptionCreator", grid: "grid" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjGroupPanelMeta.providers))], decls: 0, vars: 0, template: function WjGroupPanel_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjGroupPanel, [{
        type: Component,
        args: [{ selector: wjGroupPanelMeta.selector, template: wjGroupPanelMeta.template, inputs: wjGroupPanelMeta.inputs, outputs: wjGroupPanelMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjGroupPanelMeta.providers) }]
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
            }] }]; }, null); })();return WjGroupPanel=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjGroupPanel)}(wjcGridGrouppanel.GroupPanel);export{WjGroupPanel};var moduleExports=[WjGroupPanel],WjGridGrouppanelModule=function(){function WjGridGrouppanelModule(){}
WjGridGrouppanelModule.ɵfac = function WjGridGrouppanelModule_Factory(t) { return new (t || WjGridGrouppanelModule)(); };
WjGridGrouppanelModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjGridGrouppanelModule });
WjGridGrouppanelModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjGridGrouppanelModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjGridGrouppanelModule, { declarations: function () { return [WjGroupPanel]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjGroupPanel]; } }); })();return WjGridGrouppanelModule}();export{WjGridGrouppanelModule};