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

const _c0 = ["anchor"];
var WjTooltip_1,__decorate=this&&this.__decorate||function(t,o,e,i){var r,p=arguments.length,n=p<3?o:null===i?i=Object.getOwnPropertyDescriptor(o,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,o,e,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(p<3?r(n):p>3?r(o,e,n):r(o,e))||n);return p>3&&n&&Object.defineProperty(o,e,n),n},__param=this&&this.__param||function(t,o){return function(e,i){o(e,i,t)}};import{Component,EventEmitter,NgModule,ViewChild,ComponentFactoryResolver,ElementRef,Injector,Directive,ViewContainerRef,Optional,forwardRef,Input,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior}from"@grapecity/wijmo.angular2.directivebase";import*as ngCore from"@angular/core";import*as wjcCore from"@grapecity/wijmo";var wjTooltipMeta={selector:"[wjTooltip]",inputs:[],outputs:["initialized"],exportAs:"wjTooltip",providers:[]};export{wjTooltipMeta};let WjTooltip=WjTooltip_1=class WjTooltip{constructor(t,o,e){this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,t,o,e);this._elRef=t;WjTooltip_1._toolTip||(WjTooltip_1._toolTip=new wjcCore.Tooltip);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy();this.wjTooltip=null}get wjTooltip(){return this._toolTipText}set wjTooltip(t){if(this._toolTipText!=t){this._toolTipText=t;WjTooltip_1._toolTip.setTooltip(this._elRef.nativeElement,t,this._toolTipPosition)}}get wjTooltipPosition(){return this._toolTipPosition}set wjTooltipPosition(t){if(this._toolTipText){const o=wjcCore.asEnum(t,wjcCore.PopupPosition);if(this._toolTipPosition!=o){this._toolTipPosition=o;WjTooltip_1._toolTip.setTooltip(this._elRef.nativeElement,this._toolTipText,o)}}}};
WjTooltip.ɵfac = function WjTooltip_Factory(t) { return new (t || WjTooltip)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjTooltip.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: WjTooltip, selectors: [["", "wjTooltip", ""]], inputs: { wjTooltip: "wjTooltip", wjTooltipPosition: "wjTooltipPosition" }, outputs: { initialized: "initialized" }, exportAs: ["wjTooltip"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjTooltip_1) }, ...wjTooltipMeta.providers])] });WjTooltip.meta={outputs:wjTooltipMeta.outputs};__decorate([Input()],WjTooltip.prototype,"wjTooltip",null);__decorate([Input()],WjTooltip.prototype,"wjTooltipPosition",null);WjTooltip=WjTooltip_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjTooltip);export{WjTooltip};let WjComponentLoader=class WjComponentLoader{constructor(t,o){this._cmpResolver=t;this._elementRef=o;this._isInit=!1;this.propertiesChange=new ngCore.EventEmitter}get component(){return this._component}set component(t){if(this._component!==t){this._component=t;this._createComponent()}}get properties(){return this._properties}set properties(t){this._properties=t;this._updateProperties()}ngOnInit(){this._isInit=!0;this._createComponent()}_createComponent(){if(this._isInit){if(this._cmpRef){this._cmpRef.destroy();this._cmpRef=null}let t=this._component;if(t&&this._anchor){this._cmpRef=this._anchor.createComponent(this._cmpResolver.resolveComponentFactory(t));this._updateProperties()}}}_updateProperties(){let t=this._cmpRef&&this._cmpRef.instance,o=this.properties;if(t&&o){let e=Object.getOwnPropertyNames(o);for(let i of e){t[i]=o[i];let e=t[i+"Change"];e instanceof EventEmitter&&this._addPropListener(t,i,e)}}}_addPropListener(t,o,e){e.subscribe(e=>{this.properties[o]=this.properties[o]=t[o];this.propertiesChange.next(this.properties)})}};
WjComponentLoader.ɵfac = function WjComponentLoader_Factory(t) { return new (t || WjComponentLoader)(ɵngcc0.ɵɵdirectiveInject(ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ElementRef)); };
WjComponentLoader.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjComponentLoader, selectors: [["wj-component-loader"]], viewQuery: function WjComponentLoader_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 7, ViewContainerRef);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._anchor = _t.first);
    } }, inputs: { component: "component", properties: "properties" }, outputs: { propertiesChange: "propertiesChange" }, decls: 2, vars: 0, consts: [["anchor", ""]], template: function WjComponentLoader_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", null, 0);
    } }, encapsulation: 2 });__decorate([ViewChild("anchor",{read:ViewContainerRef,static:!0})],WjComponentLoader.prototype,"_anchor",void 0);WjComponentLoader=__decorate([,__param(0,Inject(ComponentFactoryResolver)),__param(1,Inject(ElementRef))],WjComponentLoader);export{WjComponentLoader};let moduleExports=[WjTooltip,WjComponentLoader],WjCoreModule=class WjCoreModule{};
WjCoreModule.ɵfac = function WjCoreModule_Factory(t) { return new (t || WjCoreModule)(); };
WjCoreModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjCoreModule });
WjCoreModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjTooltip, [{
        type: Directive,
        args: [{ selector: wjTooltipMeta.selector, inputs: wjTooltipMeta.inputs, outputs: wjTooltipMeta.outputs, exportAs: wjTooltipMeta.exportAs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjTooltip_1) }, ...wjTooltipMeta.providers] }]
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
        }] }); })();
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
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjCoreModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: [...moduleExports], exports: [...moduleExports] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjCoreModule, { declarations: function () { return [WjTooltip, WjComponentLoader]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjTooltip, WjComponentLoader]; } }); })();export{WjCoreModule};