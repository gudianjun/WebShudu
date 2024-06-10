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

var _c0 = ["anchor"];
var __decorate=this&&this.__decorate||function(t,o,e,i){var n,r=arguments.length,p=r<3?o:null===i?i=Object.getOwnPropertyDescriptor(o,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(t,o,e,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(p=(r<3?n(p):r>3?n(o,e,p):n(o,e))||p);return r>3&&p&&Object.defineProperty(o,e,p),p},__param=this&&this.__param||function(t,o){return function(e,i){o(e,i,t)}};import{Component,EventEmitter,NgModule,ViewChild,ComponentFactoryResolver,ElementRef,Injector,Directive,ViewContainerRef,Optional,forwardRef,Input,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior}from"@grapecity/wijmo.angular2.directivebase";import*as ngCore from"@angular/core";import*as wjcCore from"@grapecity/wijmo";var wjTooltipMeta={selector:"[wjTooltip]",inputs:[],outputs:["initialized"],exportAs:"wjTooltip",providers:[]};export{wjTooltipMeta};var WjTooltip=function(){function WjTooltip(o,e,i){this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,o,e,i);this._elRef=o;t._toolTip||(t._toolTip=new wjcCore.Tooltip);this.created()}t=WjTooltip;WjTooltip.prototype.created=function(){};WjTooltip.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjTooltip.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjTooltip.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy();this.wjTooltip=null};Object.defineProperty(WjTooltip.prototype,"wjTooltip",{get:function(){return this._toolTipText},set:function(o){if(this._toolTipText!=o){this._toolTipText=o;t._toolTip.setTooltip(this._elRef.nativeElement,o,this._toolTipPosition)}},enumerable:!0,configurable:!0});Object.defineProperty(WjTooltip.prototype,"wjTooltipPosition",{get:function(){return this._toolTipPosition},set:function(o){if(this._toolTipText){var e=wjcCore.asEnum(o,wjcCore.PopupPosition);if(this._toolTipPosition!=e){this._toolTipPosition=e;t._toolTip.setTooltip(this._elRef.nativeElement,this._toolTipText,e)}}},enumerable:!0,configurable:!0});var t;WjTooltip.meta={outputs:wjTooltipMeta.outputs};__decorate([Input()],WjTooltip.prototype,"wjTooltip",null);__decorate([Input()],WjTooltip.prototype,"wjTooltipPosition",null);
WjTooltip.ɵfac = function WjTooltip_Factory(t) { return new (t || WjTooltip)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjTooltip.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: WjTooltip, selectors: [["", "wjTooltip", ""]], inputs: { wjTooltip: "wjTooltip", wjTooltipPosition: "wjTooltipPosition" }, outputs: { initialized: "initialized" }, exportAs: ["wjTooltip"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjTooltipMeta.providers))] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjTooltip, [{
        type: Directive,
        args: [{ selector: wjTooltipMeta.selector, inputs: wjTooltipMeta.inputs, outputs: wjTooltipMeta.outputs, exportAs: wjTooltipMeta.exportAs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjTooltipMeta.providers) }]
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
            }] }]; }, { wjTooltip: [{
            type: Input
        }], wjTooltipPosition: [{
            type: Input
        }] }); })();return WjTooltip=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjTooltip)}();export{WjTooltip};var WjComponentLoader=function(){function WjComponentLoader(t,o){this._cmpResolver=t;this._elementRef=o;this._isInit=!1;this.propertiesChange=new ngCore.EventEmitter}Object.defineProperty(WjComponentLoader.prototype,"component",{get:function(){return this._component},set:function(t){if(this._component!==t){this._component=t;this._createComponent()}},enumerable:!0,configurable:!0});Object.defineProperty(WjComponentLoader.prototype,"properties",{get:function(){return this._properties},set:function(t){this._properties=t;this._updateProperties()},enumerable:!0,configurable:!0});WjComponentLoader.prototype.ngOnInit=function(){this._isInit=!0;this._createComponent()};WjComponentLoader.prototype._createComponent=function(){if(this._isInit){if(this._cmpRef){this._cmpRef.destroy();this._cmpRef=null}var t=this._component;if(t&&this._anchor){this._cmpRef=this._anchor.createComponent(this._cmpResolver.resolveComponentFactory(t));this._updateProperties()}}};WjComponentLoader.prototype._updateProperties=function(){var t=this._cmpRef&&this._cmpRef.instance,o=this.properties;if(t&&o)for(var e=0,i=Object.getOwnPropertyNames(o);e<i.length;e++){var n=i[e];t[n]=o[n];var r=t[n+"Change"];r instanceof EventEmitter&&this._addPropListener(t,n,r)}};WjComponentLoader.prototype._addPropListener=function(t,o,e){var i=this;e.subscribe((function(e){i.properties[o]=i.properties[o]=t[o];i.propertiesChange.next(i.properties)}))};__decorate([ViewChild("anchor",{read:ViewContainerRef,static:!0})],WjComponentLoader.prototype,"_anchor",void 0);
WjComponentLoader.ɵfac = function WjComponentLoader_Factory(t) { return new (t || WjComponentLoader)(ɵngcc0.ɵɵdirectiveInject(ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ElementRef)); };
WjComponentLoader.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjComponentLoader, selectors: [["wj-component-loader"]], viewQuery: function WjComponentLoader_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 7, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._anchor = _t.first);
    } }, inputs: { component: "component", properties: "properties" }, outputs: { propertiesChange: "propertiesChange" }, decls: 2, vars: 0, consts: [["anchor", ""]], template: function WjComponentLoader_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", null, 0);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjComponentLoader, [{
        type: Component,
        args: [{ selector: "wj-component-loader", template: "<div #anchor></div>", inputs: ["component", "properties"], outputs: ["propertiesChange"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ComponentFactoryResolver]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }]; }, { _anchor: [{
            type: ViewChild,
            args: ["anchor", { read: ViewContainerRef, static: !0 }]
        }] }); })();return WjComponentLoader=__decorate([,__param(0,Inject(ComponentFactoryResolver)),__param(1,Inject(ElementRef))],WjComponentLoader)}();export{WjComponentLoader};var moduleExports=[WjTooltip,WjComponentLoader],WjCoreModule=function(){function WjCoreModule(){}
WjCoreModule.ɵfac = function WjCoreModule_Factory(t) { return new (t || WjCoreModule)(); };
WjCoreModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjCoreModule });
WjCoreModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjCoreModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjCoreModule, { declarations: function () { return [WjTooltip, WjComponentLoader]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjTooltip, WjComponentLoader]; } }); })();return WjCoreModule}();export{WjCoreModule};