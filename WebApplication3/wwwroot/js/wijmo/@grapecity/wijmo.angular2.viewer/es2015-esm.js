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
var WjReportViewer_1,WjPdfViewer_1,__decorate=this&&this.__decorate||function(e,o,r,t){var a,i=arguments.length,n=i<3?o:null===t?t=Object.getOwnPropertyDescriptor(o,r):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,o,r,t);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(n=(i<3?a(n):i>3?a(o,r,n):a(o,r))||n);return i>3&&n&&Object.defineProperty(o,r,n),n},__param=this&&this.__param||function(e,o){return function(r,t){o(r,t,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"@grapecity/wijmo.angular2.directivebase";import*as wjcViewer from"@grapecity/wijmo.viewer";var wjReportViewerMeta={selector:"wj-report-viewer",template:"",inputs:["asyncBindings","wjModelProperty","isDisabled","tabOrder","serviceUrl","filePath","fullScreen","zoomFactor","zoomMode","mouseMode","viewMode","requestHeaders","parameters","paginated","reportName"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","pageIndexChangedNg: pageIndexChanged","viewModeChangedNg: viewModeChanged","viewModeChangePC: viewModeChange","mouseModeChangedNg: mouseModeChanged","mouseModeChangePC: mouseModeChange","fullScreenChangedNg: fullScreenChanged","fullScreenChangePC: fullScreenChange","zoomFactorChangedNg: zoomFactorChanged","zoomFactorChangePC: zoomFactorChange","zoomModeChangedNg: zoomModeChanged","zoomModeChangePC: zoomModeChange","queryLoadingDataNg: queryLoadingData","beforeSendRequestNg: beforeSendRequest"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjReportViewerMeta};let WjReportViewer=WjReportViewer_1=class WjReportViewer extends wjcViewer.ReportViewer{constructor(e,o,r){super(WjDirectiveBehavior.getHostElement(e,o));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,o,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,o,r,t=!1){let a=WjDirectiveBehavior,i=a.getZone(this);i&&a.outsideZoneEvents[o]?i.runOutsideAngular(()=>{super.addEventListener(e,o,r,t)}):super.addEventListener(e,o,r,t)}};
WjReportViewer.ɵfac = function WjReportViewer_Factory(t) { return new (t || WjReportViewer)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjReportViewer.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjReportViewer, selectors: [["wj-report-viewer"]], inputs: { asyncBindings: "asyncBindings", wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", serviceUrl: "serviceUrl", filePath: "filePath", fullScreen: "fullScreen", zoomFactor: "zoomFactor", zoomMode: "zoomMode", mouseMode: "mouseMode", viewMode: "viewMode", requestHeaders: "requestHeaders", parameters: "parameters", paginated: "paginated", reportName: "reportName" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", pageIndexChangedNg: "pageIndexChanged", viewModeChangedNg: "viewModeChanged", viewModeChangePC: "viewModeChange", mouseModeChangedNg: "mouseModeChanged", mouseModeChangePC: "mouseModeChange", fullScreenChangedNg: "fullScreenChanged", fullScreenChangePC: "fullScreenChange", zoomFactorChangedNg: "zoomFactorChanged", zoomFactorChangePC: "zoomFactorChange", zoomModeChangedNg: "zoomModeChanged", zoomModeChangePC: "zoomModeChange", queryLoadingDataNg: "queryLoadingData", beforeSendRequestNg: "beforeSendRequest" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjReportViewer_1) }, ...wjReportViewerMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjReportViewer_Template(rf, ctx) { }, encapsulation: 2 });WjReportViewer.meta={outputs:wjReportViewerMeta.outputs,changeEvents:{viewModeChanged:["viewMode"],mouseModeChanged:["mouseMode"],fullScreenChanged:["fullScreen"],zoomFactorChanged:["zoomFactor"],zoomModeChanged:["zoomMode"]}};WjReportViewer=WjReportViewer_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjReportViewer);export{WjReportViewer};var wjPdfViewerMeta={selector:"wj-pdf-viewer",template:"",inputs:["asyncBindings","wjModelProperty","isDisabled","tabOrder","serviceUrl","filePath","fullScreen","zoomFactor","zoomMode","mouseMode","viewMode","requestHeaders"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","pageIndexChangedNg: pageIndexChanged","viewModeChangedNg: viewModeChanged","viewModeChangePC: viewModeChange","mouseModeChangedNg: mouseModeChanged","mouseModeChangePC: mouseModeChange","fullScreenChangedNg: fullScreenChanged","fullScreenChangePC: fullScreenChange","zoomFactorChangedNg: zoomFactorChanged","zoomFactorChangePC: zoomFactorChange","zoomModeChangedNg: zoomModeChanged","zoomModeChangePC: zoomModeChange","queryLoadingDataNg: queryLoadingData","beforeSendRequestNg: beforeSendRequest"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjPdfViewerMeta};let WjPdfViewer=WjPdfViewer_1=class WjPdfViewer extends wjcViewer.PdfViewer{constructor(e,o,r){super(WjDirectiveBehavior.getHostElement(e,o));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,o,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,o,r,t=!1){let a=WjDirectiveBehavior,i=a.getZone(this);i&&a.outsideZoneEvents[o]?i.runOutsideAngular(()=>{super.addEventListener(e,o,r,t)}):super.addEventListener(e,o,r,t)}};
WjPdfViewer.ɵfac = function WjPdfViewer_Factory(t) { return new (t || WjPdfViewer)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjPdfViewer.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjPdfViewer, selectors: [["wj-pdf-viewer"]], inputs: { asyncBindings: "asyncBindings", wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", serviceUrl: "serviceUrl", filePath: "filePath", fullScreen: "fullScreen", zoomFactor: "zoomFactor", zoomMode: "zoomMode", mouseMode: "mouseMode", viewMode: "viewMode", requestHeaders: "requestHeaders" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", pageIndexChangedNg: "pageIndexChanged", viewModeChangedNg: "viewModeChanged", viewModeChangePC: "viewModeChange", mouseModeChangedNg: "mouseModeChanged", mouseModeChangePC: "mouseModeChange", fullScreenChangedNg: "fullScreenChanged", fullScreenChangePC: "fullScreenChange", zoomFactorChangedNg: "zoomFactorChanged", zoomFactorChangePC: "zoomFactorChange", zoomModeChangedNg: "zoomModeChanged", zoomModeChangePC: "zoomModeChange", queryLoadingDataNg: "queryLoadingData", beforeSendRequestNg: "beforeSendRequest" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjPdfViewer_1) }, ...wjPdfViewerMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjPdfViewer_Template(rf, ctx) { }, encapsulation: 2 });WjPdfViewer.meta={outputs:wjPdfViewerMeta.outputs,changeEvents:{viewModeChanged:["viewMode"],mouseModeChanged:["mouseMode"],fullScreenChanged:["fullScreen"],zoomFactorChanged:["zoomFactor"],zoomModeChanged:["zoomMode"]}};WjPdfViewer=WjPdfViewer_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjPdfViewer);export{WjPdfViewer};let moduleExports=[WjReportViewer,WjPdfViewer],WjViewerModule=class WjViewerModule{};
WjViewerModule.ɵfac = function WjViewerModule_Factory(t) { return new (t || WjViewerModule)(); };
WjViewerModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjViewerModule });
WjViewerModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjReportViewer, [{
        type: Component,
        args: [{ selector: wjReportViewerMeta.selector, template: wjReportViewerMeta.template, inputs: wjReportViewerMeta.inputs, outputs: wjReportViewerMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjReportViewer_1) }, ...wjReportViewerMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjPdfViewer, [{
        type: Component,
        args: [{ selector: wjPdfViewerMeta.selector, template: wjPdfViewerMeta.template, inputs: wjPdfViewerMeta.inputs, outputs: wjPdfViewerMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjPdfViewer_1) }, ...wjPdfViewerMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjViewerModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: [...moduleExports], exports: [...moduleExports] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjViewerModule, { declarations: function () { return [WjReportViewer, WjPdfViewer]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjReportViewer, WjPdfViewer]; } }); })();export{WjViewerModule};