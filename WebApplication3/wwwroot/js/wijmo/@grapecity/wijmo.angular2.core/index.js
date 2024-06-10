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

var _c0 = ["anchor"];
var __decorate=this&&this.__decorate||function(o,e,t,r){var i,n=arguments.length,p=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(o,e,t,r);else for(var s=o.length-1;s>=0;s--)(i=o[s])&&(p=(n<3?i(p):n>3?i(e,t,p):i(e,t))||p);return n>3&&p&&Object.defineProperty(e,t,p),p},__param=this&&this.__param||function(o,e){return function(t,r){e(t,r,o)}},__importStar=this&&this.__importStar||function(o){if(o&&o.__esModule)return o;var e={};if(null!=o)for(var t in o)Object.hasOwnProperty.call(o,t)&&(e[t]=o[t]);e.default=o;return e};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),common_1=require("@angular/common"),wijmo_angular2_directivebase_1=require("@grapecity/wijmo.angular2.directivebase"),ngCore=__importStar(require("@angular/core")),wjcCore=__importStar(require("@grapecity/wijmo")),wjTooltipMeta={selector:"[wjTooltip]",inputs:[],outputs:["initialized"],exportAs:"wjTooltip",providers:[]};exports.wjTooltipMeta=wjTooltipMeta;var WjTooltip=function(){function WjTooltip(e,t,r){this.isInitialized=!1;this._wjBehaviour=wijmo_angular2_directivebase_1.WjDirectiveBehavior.attach(this,e,t,r);this._elRef=e;o._toolTip||(o._toolTip=new wjcCore.Tooltip);this.created()}o=WjTooltip;WjTooltip.prototype.created=function(){};WjTooltip.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjTooltip.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjTooltip.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy();this.wjTooltip=null};Object.defineProperty(WjTooltip.prototype,"wjTooltip",{get:function(){return this._toolTipText},set:function(e){if(this._toolTipText!=e){this._toolTipText=e;o._toolTip.setTooltip(this._elRef.nativeElement,e,this._toolTipPosition)}},enumerable:!0,configurable:!0});Object.defineProperty(WjTooltip.prototype,"wjTooltipPosition",{get:function(){return this._toolTipPosition},set:function(e){if(this._toolTipText){var t=wjcCore.asEnum(e,wjcCore.PopupPosition);if(this._toolTipPosition!=t){this._toolTipPosition=t;o._toolTip.setTooltip(this._elRef.nativeElement,this._toolTipText,t)}}},enumerable:!0,configurable:!0});var o;WjTooltip.meta={outputs:wjTooltipMeta.outputs};__decorate([core_1.Input()],WjTooltip.prototype,"wjTooltip",null);__decorate([core_1.Input()],WjTooltip.prototype,"wjTooltipPosition",null);
WjTooltip.ɵfac = function WjTooltip_Factory(t) { return new (t || WjTooltip)(ɵngcc0.ɵɵdirectiveInject(core_1.ElementRef), ɵngcc0.ɵɵdirectiveInject(core_1.Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjTooltip.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: WjTooltip, selectors: [["", "wjTooltip", ""]], inputs: { wjTooltip: "wjTooltip", wjTooltipPosition: "wjTooltipPosition" }, outputs: { initialized: "initialized" }, exportAs: ["wjTooltip"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: core_1.forwardRef((function () { return o; })) }].concat(wjTooltipMeta.providers))] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjTooltip, [{
        type: core_1.Directive,
        args: [{ selector: wjTooltipMeta.selector, inputs: wjTooltipMeta.inputs, outputs: wjTooltipMeta.outputs, exportAs: wjTooltipMeta.exportAs, providers: [{ provide: "WjComponent", useExisting: core_1.forwardRef((function () { return o; })) }].concat(wjTooltipMeta.providers) }]
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
            }] }]; }, { wjTooltip: [{
            type: core_1.Input
        }], wjTooltipPosition: [{
            type: core_1.Input
        }] }); })();return WjTooltip=o=__decorate([,__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjTooltip)}();exports.WjTooltip=WjTooltip;var WjComponentLoader=function(){function WjComponentLoader(o,e){this._cmpResolver=o;this._elementRef=e;this._isInit=!1;this.propertiesChange=new ngCore.EventEmitter}Object.defineProperty(WjComponentLoader.prototype,"component",{get:function(){return this._component},set:function(o){if(this._component!==o){this._component=o;this._createComponent()}},enumerable:!0,configurable:!0});Object.defineProperty(WjComponentLoader.prototype,"properties",{get:function(){return this._properties},set:function(o){this._properties=o;this._updateProperties()},enumerable:!0,configurable:!0});WjComponentLoader.prototype.ngOnInit=function(){this._isInit=!0;this._createComponent()};WjComponentLoader.prototype._createComponent=function(){if(this._isInit){if(this._cmpRef){this._cmpRef.destroy();this._cmpRef=null}var o=this._component;if(o&&this._anchor){this._cmpRef=this._anchor.createComponent(this._cmpResolver.resolveComponentFactory(o));this._updateProperties()}}};WjComponentLoader.prototype._updateProperties=function(){var o=this._cmpRef&&this._cmpRef.instance,e=this.properties;if(o&&e)for(var t=0,r=Object.getOwnPropertyNames(e);t<r.length;t++){var i=r[t];o[i]=e[i];var n=o[i+"Change"];n instanceof core_1.EventEmitter&&this._addPropListener(o,i,n)}};WjComponentLoader.prototype._addPropListener=function(o,e,t){var r=this;t.subscribe((function(t){r.properties[e]=r.properties[e]=o[e];r.propertiesChange.next(r.properties)}))};__decorate([core_1.ViewChild("anchor",{read:core_1.ViewContainerRef,static:!0})],WjComponentLoader.prototype,"_anchor",void 0);
WjComponentLoader.ɵfac = function WjComponentLoader_Factory(t) { return new (t || WjComponentLoader)(ɵngcc0.ɵɵdirectiveInject(core_1.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(core_1.ElementRef)); };
WjComponentLoader.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjComponentLoader, selectors: [["wj-component-loader"]], viewQuery: function WjComponentLoader_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 7, core_1.ViewContainerRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._anchor = _t.first);
    } }, inputs: { component: "component", properties: "properties" }, outputs: { propertiesChange: "propertiesChange" }, decls: 2, vars: 0, consts: [["anchor", ""]], template: function WjComponentLoader_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", null, 0);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjComponentLoader, [{
        type: core_1.Component,
        args: [{ selector: "wj-component-loader", template: "<div #anchor></div>", inputs: ["component", "properties"], outputs: ["propertiesChange"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: core_1.Inject,
                args: [core_1.ComponentFactoryResolver]
            }] }, { type: undefined, decorators: [{
                type: core_1.Inject,
                args: [core_1.ElementRef]
            }] }]; }, { _anchor: [{
            type: core_1.ViewChild,
            args: ["anchor", { read: core_1.ViewContainerRef, static: !0 }]
        }] }); })();return WjComponentLoader=__decorate([,__param(0,core_1.Inject(core_1.ComponentFactoryResolver)),__param(1,core_1.Inject(core_1.ElementRef))],WjComponentLoader)}();exports.WjComponentLoader=WjComponentLoader;var moduleExports=[WjTooltip,WjComponentLoader],WjCoreModule=function(){function WjCoreModule(){}
WjCoreModule.ɵfac = function WjCoreModule_Factory(t) { return new (t || WjCoreModule)(); };
WjCoreModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjCoreModule });
WjCoreModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [common_1.CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjCoreModule, [{
        type: core_1.NgModule,
        args: [{ imports: [common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjCoreModule, { declarations: [WjTooltip, WjComponentLoader], imports: [ɵngcc1.CommonModule], exports: [WjTooltip, WjComponentLoader] }); })();return WjCoreModule}();exports.WjCoreModule=WjCoreModule;