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
var WjGroupPanel_1,__decorate=this&&this.__decorate||function(e,r,o,t){var a,n=arguments.length,i=n<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,r,o,t);else for(var p=e.length-1;p>=0;p--)(a=e[p])&&(i=(n<3?a(i):n>3?a(r,o,i):a(r,o))||i);return n>3&&i&&Object.defineProperty(r,o,i),i},__param=this&&this.__param||function(e,r){return function(o,t){r(o,t,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"@grapecity/wijmo.angular2.directivebase";import*as wjcGridGrouppanel from"@grapecity/wijmo.grid.grouppanel";var wjGroupPanelMeta={selector:"wj-group-panel",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","hideGroupedColumns","showDragGlyphs","maxGroups","placeholder","filter","groupDescriptionCreator","grid"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjGroupPanelMeta};let WjGroupPanel=WjGroupPanel_1=class WjGroupPanel extends wjcGridGrouppanel.GroupPanel{constructor(e,r,o){super(WjDirectiveBehavior.getHostElement(e,r));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,r,o);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,r,o,t=!1){let a=WjDirectiveBehavior,n=a.getZone(this);n&&a.outsideZoneEvents[r]?n.runOutsideAngular(()=>{super.addEventListener(e,r,o,t)}):super.addEventListener(e,r,o,t)}};
WjGroupPanel.ɵfac = function WjGroupPanel_Factory(t) { return new (t || WjGroupPanel)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjGroupPanel.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjGroupPanel, selectors: [["wj-group-panel"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", hideGroupedColumns: "hideGroupedColumns", showDragGlyphs: "showDragGlyphs", maxGroups: "maxGroups", placeholder: "placeholder", filter: "filter", groupDescriptionCreator: "groupDescriptionCreator", grid: "grid" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjGroupPanel_1) }, ...wjGroupPanelMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjGroupPanel_Template(rf, ctx) { }, encapsulation: 2 });WjGroupPanel.meta={outputs:wjGroupPanelMeta.outputs};WjGroupPanel=WjGroupPanel_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjGroupPanel);export{WjGroupPanel};let moduleExports=[WjGroupPanel],WjGridGrouppanelModule=class WjGridGrouppanelModule{};
WjGridGrouppanelModule.ɵfac = function WjGridGrouppanelModule_Factory(t) { return new (t || WjGridGrouppanelModule)(); };
WjGridGrouppanelModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjGridGrouppanelModule });
WjGridGrouppanelModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjGroupPanel, [{
        type: Component,
        args: [{ selector: wjGroupPanelMeta.selector, template: wjGroupPanelMeta.template, inputs: wjGroupPanelMeta.inputs, outputs: wjGroupPanelMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjGroupPanel_1) }, ...wjGroupPanelMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjGridGrouppanelModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: [...moduleExports], exports: [...moduleExports] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjGridGrouppanelModule, { declarations: function () { return [WjGroupPanel]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjGroupPanel]; } }); })();export{WjGridGrouppanelModule};