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
var WjFlexGridDetail_1,__decorate=this&&this.__decorate||function(e,t,i,r){var a,l=arguments.length,o=l<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(l<3?a(o):l>3?a(t,i,o):a(t,i))||o);return l>3&&o&&Object.defineProperty(t,i,o),o},__param=this&&this.__param||function(e,t){return function(i,r){t(i,r,e)}};import{NgModule,ElementRef,Injector,Directive,ViewContainerRef,TemplateRef,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior}from"@grapecity/wijmo.angular2.directivebase";import*as wjcGridDetail from"@grapecity/wijmo.grid.detail";var wjFlexGridDetailMeta={selector:"[wjFlexGridDetail]",inputs:["wjFlexGridDetail","maxHeight","keyActionEnter","detailVisibilityMode","rowHasDetail","isAnimated"],outputs:["initialized"],exportAs:"wjFlexGridDetail",providers:[]};export{wjFlexGridDetailMeta};let WjFlexGridDetail=WjFlexGridDetail_1=class WjFlexGridDetail extends wjcGridDetail.FlexGridDetailProvider{constructor(e,t,i,r,a){super(i);this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,i);this._viewContainerRef=r;this._templateRef=a;this._init();this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}_init(){this.createDetailCell=(e,t)=>{let i=WjDirectiveBehavior.instantiateTemplate(this.grid.hostElement,this._viewContainerRef,this._templateRef,!1,{row:e,col:t,item:e.dataItem}),r=i.viewRef,a=i.rootElement;r.detectChanges();a.parentElement.removeChild(a);a[WjFlexGridDetail_1._viewRefProp]=r;return a};this.disposeDetailCell=e=>{let t;if(e.detail&&(t=e.detail[WjFlexGridDetail_1._viewRefProp])){e.detail[WjFlexGridDetail_1._viewRefProp]=null;let i=this._viewContainerRef.indexOf(t);i>-1&&this._viewContainerRef.remove(i)}}}};
WjFlexGridDetail.ɵfac = function WjFlexGridDetail_Factory(t) { return new (t || WjFlexGridDetail)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12), ɵngcc0.ɵɵdirectiveInject(ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(TemplateRef)); };
WjFlexGridDetail.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: WjFlexGridDetail, selectors: [["", "wjFlexGridDetail", ""]], inputs: { wjFlexGridDetail: "wjFlexGridDetail", maxHeight: "maxHeight", keyActionEnter: "keyActionEnter", detailVisibilityMode: "detailVisibilityMode", rowHasDetail: "rowHasDetail", isAnimated: "isAnimated" }, outputs: { initialized: "initialized" }, exportAs: ["wjFlexGridDetail"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexGridDetail_1) }, ...wjFlexGridDetailMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature] });WjFlexGridDetail._viewRefProp="__wj_viewRef";WjFlexGridDetail.meta={outputs:wjFlexGridDetailMeta.outputs};WjFlexGridDetail=WjFlexGridDetail_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional()),__param(3,Inject(ViewContainerRef)),__param(4,Inject(TemplateRef))],WjFlexGridDetail);export{WjFlexGridDetail};let moduleExports=[WjFlexGridDetail],WjGridDetailModule=class WjGridDetailModule{};
WjGridDetailModule.ɵfac = function WjGridDetailModule_Factory(t) { return new (t || WjGridDetailModule)(); };
WjGridDetailModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjGridDetailModule });
WjGridDetailModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexGridDetail, [{
        type: Directive,
        args: [{ selector: wjFlexGridDetailMeta.selector, inputs: wjFlexGridDetailMeta.inputs, outputs: wjFlexGridDetailMeta.outputs, exportAs: wjFlexGridDetailMeta.exportAs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjFlexGridDetail_1) }, ...wjFlexGridDetailMeta.providers] }]
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
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [ViewContainerRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [TemplateRef]
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjGridDetailModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: [...moduleExports], exports: [...moduleExports] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjGridDetailModule, { declarations: function () { return [WjFlexGridDetail]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjFlexGridDetail]; } }); })();export{WjGridDetailModule};