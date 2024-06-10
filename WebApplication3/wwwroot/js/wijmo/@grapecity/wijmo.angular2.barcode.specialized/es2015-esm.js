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
var WjBarcodeDataMatrixEcc000_1,WjBarcodeDataMatrixEcc200_1,WjBarcodeCode49_1,WjBarcodeCode93_1,WjBarcodeItf14_1,WjBarcodeInterleaved2of5_1,WjBarcodeJapanesePostal_1,__decorate=this&&this.__decorate||function(e,t,a,r){var o,i=arguments.length,d=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(d=(i<3?o(d):i>3?o(t,a,d):o(t,a))||d);return i>3&&d&&Object.defineProperty(t,a,d),d},__param=this&&this.__param||function(e,t){return function(a,r){t(a,r,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"@grapecity/wijmo.angular2.directivebase";import*as wjcBarcodeSpecialized from"@grapecity/wijmo.barcode.specialized";var wjBarcodeDataMatrixEcc000Meta={selector:"wj-barcode-data-matrix-ecc000",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","version","symbolSize"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeDataMatrixEcc000Meta};let WjBarcodeDataMatrixEcc000=WjBarcodeDataMatrixEcc000_1=class WjBarcodeDataMatrixEcc000 extends wjcBarcodeSpecialized.DataMatrixEcc000{constructor(e,t,a){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,a,r=!1){let o=WjDirectiveBehavior,i=o.getZone(this);i&&o.outsideZoneEvents[t]?i.runOutsideAngular(()=>{super.addEventListener(e,t,a,r)}):super.addEventListener(e,t,a,r)}};
WjBarcodeDataMatrixEcc000.ɵfac = function WjBarcodeDataMatrixEcc000_Factory(t) { return new (t || WjBarcodeDataMatrixEcc000)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeDataMatrixEcc000.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeDataMatrixEcc000, selectors: [["wj-barcode-data-matrix-ecc000"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", version: "version", symbolSize: "symbolSize" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeDataMatrixEcc000_1) }, ...wjBarcodeDataMatrixEcc000Meta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjBarcodeDataMatrixEcc000_Template(rf, ctx) { }, encapsulation: 2 });WjBarcodeDataMatrixEcc000.meta={outputs:wjBarcodeDataMatrixEcc000Meta.outputs};WjBarcodeDataMatrixEcc000=WjBarcodeDataMatrixEcc000_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeDataMatrixEcc000);export{WjBarcodeDataMatrixEcc000};var wjBarcodeDataMatrixEcc200Meta={selector:"wj-barcode-data-matrix-ecc200",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","symbolSize","encodingMode","structuredAppend","structureNumber","fileIdentifier"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeDataMatrixEcc200Meta};let WjBarcodeDataMatrixEcc200=WjBarcodeDataMatrixEcc200_1=class WjBarcodeDataMatrixEcc200 extends wjcBarcodeSpecialized.DataMatrixEcc200{constructor(e,t,a){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,a,r=!1){let o=WjDirectiveBehavior,i=o.getZone(this);i&&o.outsideZoneEvents[t]?i.runOutsideAngular(()=>{super.addEventListener(e,t,a,r)}):super.addEventListener(e,t,a,r)}};
WjBarcodeDataMatrixEcc200.ɵfac = function WjBarcodeDataMatrixEcc200_Factory(t) { return new (t || WjBarcodeDataMatrixEcc200)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeDataMatrixEcc200.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeDataMatrixEcc200, selectors: [["wj-barcode-data-matrix-ecc200"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", symbolSize: "symbolSize", encodingMode: "encodingMode", structuredAppend: "structuredAppend", structureNumber: "structureNumber", fileIdentifier: "fileIdentifier" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeDataMatrixEcc200_1) }, ...wjBarcodeDataMatrixEcc200Meta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjBarcodeDataMatrixEcc200_Template(rf, ctx) { }, encapsulation: 2 });WjBarcodeDataMatrixEcc200.meta={outputs:wjBarcodeDataMatrixEcc200Meta.outputs};WjBarcodeDataMatrixEcc200=WjBarcodeDataMatrixEcc200_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeDataMatrixEcc200);export{WjBarcodeDataMatrixEcc200};var wjBarcodeCode49Meta={selector:"wj-barcode-code49",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","showLabel","grouping","groupIndex","labelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeCode49Meta};let WjBarcodeCode49=WjBarcodeCode49_1=class WjBarcodeCode49 extends wjcBarcodeSpecialized.Code49{constructor(e,t,a){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,a,r=!1){let o=WjDirectiveBehavior,i=o.getZone(this);i&&o.outsideZoneEvents[t]?i.runOutsideAngular(()=>{super.addEventListener(e,t,a,r)}):super.addEventListener(e,t,a,r)}};
WjBarcodeCode49.ɵfac = function WjBarcodeCode49_Factory(t) { return new (t || WjBarcodeCode49)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeCode49.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeCode49, selectors: [["wj-barcode-code49"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", showLabel: "showLabel", grouping: "grouping", groupIndex: "groupIndex", labelPosition: "labelPosition" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeCode49_1) }, ...wjBarcodeCode49Meta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjBarcodeCode49_Template(rf, ctx) { }, encapsulation: 2 });WjBarcodeCode49.meta={outputs:wjBarcodeCode49Meta.outputs};WjBarcodeCode49=WjBarcodeCode49_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeCode49);export{WjBarcodeCode49};var wjBarcodeCode93Meta={selector:"wj-barcode-code93",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","autoWidth","autoWidthZoom","showLabel","checkDigit","fullAscii","labelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeCode93Meta};let WjBarcodeCode93=WjBarcodeCode93_1=class WjBarcodeCode93 extends wjcBarcodeSpecialized.Code93{constructor(e,t,a){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,a,r=!1){let o=WjDirectiveBehavior,i=o.getZone(this);i&&o.outsideZoneEvents[t]?i.runOutsideAngular(()=>{super.addEventListener(e,t,a,r)}):super.addEventListener(e,t,a,r)}};
WjBarcodeCode93.ɵfac = function WjBarcodeCode93_Factory(t) { return new (t || WjBarcodeCode93)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeCode93.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeCode93, selectors: [["wj-barcode-code93"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", autoWidth: "autoWidth", autoWidthZoom: "autoWidthZoom", showLabel: "showLabel", checkDigit: "checkDigit", fullAscii: "fullAscii", labelPosition: "labelPosition" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeCode93_1) }, ...wjBarcodeCode93Meta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjBarcodeCode93_Template(rf, ctx) { }, encapsulation: 2 });WjBarcodeCode93.meta={outputs:wjBarcodeCode93Meta.outputs};WjBarcodeCode93=WjBarcodeCode93_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeCode93);export{WjBarcodeCode93};var wjBarcodeItf14Meta={selector:"wj-barcode-itf14",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","showLabel","nwRatio","bearerBar","labelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeItf14Meta};let WjBarcodeItf14=WjBarcodeItf14_1=class WjBarcodeItf14 extends wjcBarcodeSpecialized.Itf14{constructor(e,t,a){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,a,r=!1){let o=WjDirectiveBehavior,i=o.getZone(this);i&&o.outsideZoneEvents[t]?i.runOutsideAngular(()=>{super.addEventListener(e,t,a,r)}):super.addEventListener(e,t,a,r)}};
WjBarcodeItf14.ɵfac = function WjBarcodeItf14_Factory(t) { return new (t || WjBarcodeItf14)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeItf14.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeItf14, selectors: [["wj-barcode-itf14"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", showLabel: "showLabel", nwRatio: "nwRatio", bearerBar: "bearerBar", labelPosition: "labelPosition" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeItf14_1) }, ...wjBarcodeItf14Meta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjBarcodeItf14_Template(rf, ctx) { }, encapsulation: 2 });WjBarcodeItf14.meta={outputs:wjBarcodeItf14Meta.outputs};WjBarcodeItf14=WjBarcodeItf14_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeItf14);export{WjBarcodeItf14};var wjBarcodeInterleaved2of5Meta={selector:"wj-barcode-interleaved2of5",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","autoWidth","autoWidthZoom","showLabel","nwRatio","bearerBar","labelPosition","checkCharacter"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeInterleaved2of5Meta};let WjBarcodeInterleaved2of5=WjBarcodeInterleaved2of5_1=class WjBarcodeInterleaved2of5 extends wjcBarcodeSpecialized.Interleaved2of5{constructor(e,t,a){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,a,r=!1){let o=WjDirectiveBehavior,i=o.getZone(this);i&&o.outsideZoneEvents[t]?i.runOutsideAngular(()=>{super.addEventListener(e,t,a,r)}):super.addEventListener(e,t,a,r)}};
WjBarcodeInterleaved2of5.ɵfac = function WjBarcodeInterleaved2of5_Factory(t) { return new (t || WjBarcodeInterleaved2of5)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeInterleaved2of5.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeInterleaved2of5, selectors: [["wj-barcode-interleaved2of5"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", autoWidth: "autoWidth", autoWidthZoom: "autoWidthZoom", showLabel: "showLabel", nwRatio: "nwRatio", bearerBar: "bearerBar", labelPosition: "labelPosition", checkCharacter: "checkCharacter" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeInterleaved2of5_1) }, ...wjBarcodeInterleaved2of5Meta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjBarcodeInterleaved2of5_Template(rf, ctx) { }, encapsulation: 2 });WjBarcodeInterleaved2of5.meta={outputs:wjBarcodeInterleaved2of5Meta.outputs};WjBarcodeInterleaved2of5=WjBarcodeInterleaved2of5_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeInterleaved2of5);export{WjBarcodeInterleaved2of5};var wjBarcodeJapanesePostalMeta={selector:"wj-barcode-japanese-postal",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","showLabel","labelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeJapanesePostalMeta};let WjBarcodeJapanesePostal=WjBarcodeJapanesePostal_1=class WjBarcodeJapanesePostal extends wjcBarcodeSpecialized.JapanesePostal{constructor(e,t,a){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,a,r=!1){let o=WjDirectiveBehavior,i=o.getZone(this);i&&o.outsideZoneEvents[t]?i.runOutsideAngular(()=>{super.addEventListener(e,t,a,r)}):super.addEventListener(e,t,a,r)}};
WjBarcodeJapanesePostal.ɵfac = function WjBarcodeJapanesePostal_Factory(t) { return new (t || WjBarcodeJapanesePostal)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeJapanesePostal.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeJapanesePostal, selectors: [["wj-barcode-japanese-postal"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", showLabel: "showLabel", labelPosition: "labelPosition" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeJapanesePostal_1) }, ...wjBarcodeJapanesePostalMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjBarcodeJapanesePostal_Template(rf, ctx) { }, encapsulation: 2 });WjBarcodeJapanesePostal.meta={outputs:wjBarcodeJapanesePostalMeta.outputs};WjBarcodeJapanesePostal=WjBarcodeJapanesePostal_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeJapanesePostal);export{WjBarcodeJapanesePostal};let moduleExports=[WjBarcodeDataMatrixEcc000,WjBarcodeDataMatrixEcc200,WjBarcodeCode49,WjBarcodeCode93,WjBarcodeItf14,WjBarcodeInterleaved2of5,WjBarcodeJapanesePostal],WjBarcodeSpecializedModule=class WjBarcodeSpecializedModule{};
WjBarcodeSpecializedModule.ɵfac = function WjBarcodeSpecializedModule_Factory(t) { return new (t || WjBarcodeSpecializedModule)(); };
WjBarcodeSpecializedModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjBarcodeSpecializedModule });
WjBarcodeSpecializedModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeDataMatrixEcc000, [{
        type: Component,
        args: [{ selector: wjBarcodeDataMatrixEcc000Meta.selector, template: wjBarcodeDataMatrixEcc000Meta.template, inputs: wjBarcodeDataMatrixEcc000Meta.inputs, outputs: wjBarcodeDataMatrixEcc000Meta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeDataMatrixEcc000_1) }, ...wjBarcodeDataMatrixEcc000Meta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeDataMatrixEcc200, [{
        type: Component,
        args: [{ selector: wjBarcodeDataMatrixEcc200Meta.selector, template: wjBarcodeDataMatrixEcc200Meta.template, inputs: wjBarcodeDataMatrixEcc200Meta.inputs, outputs: wjBarcodeDataMatrixEcc200Meta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeDataMatrixEcc200_1) }, ...wjBarcodeDataMatrixEcc200Meta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeCode49, [{
        type: Component,
        args: [{ selector: wjBarcodeCode49Meta.selector, template: wjBarcodeCode49Meta.template, inputs: wjBarcodeCode49Meta.inputs, outputs: wjBarcodeCode49Meta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeCode49_1) }, ...wjBarcodeCode49Meta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeCode93, [{
        type: Component,
        args: [{ selector: wjBarcodeCode93Meta.selector, template: wjBarcodeCode93Meta.template, inputs: wjBarcodeCode93Meta.inputs, outputs: wjBarcodeCode93Meta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeCode93_1) }, ...wjBarcodeCode93Meta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeItf14, [{
        type: Component,
        args: [{ selector: wjBarcodeItf14Meta.selector, template: wjBarcodeItf14Meta.template, inputs: wjBarcodeItf14Meta.inputs, outputs: wjBarcodeItf14Meta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeItf14_1) }, ...wjBarcodeItf14Meta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeInterleaved2of5, [{
        type: Component,
        args: [{ selector: wjBarcodeInterleaved2of5Meta.selector, template: wjBarcodeInterleaved2of5Meta.template, inputs: wjBarcodeInterleaved2of5Meta.inputs, outputs: wjBarcodeInterleaved2of5Meta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeInterleaved2of5_1) }, ...wjBarcodeInterleaved2of5Meta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeJapanesePostal, [{
        type: Component,
        args: [{ selector: wjBarcodeJapanesePostalMeta.selector, template: wjBarcodeJapanesePostalMeta.template, inputs: wjBarcodeJapanesePostalMeta.inputs, outputs: wjBarcodeJapanesePostalMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeJapanesePostal_1) }, ...wjBarcodeJapanesePostalMeta.providers] }]
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeSpecializedModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: [...moduleExports], exports: [...moduleExports] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjBarcodeSpecializedModule, { declarations: function () { return [WjBarcodeDataMatrixEcc000, WjBarcodeDataMatrixEcc200, WjBarcodeCode49, WjBarcodeCode93, WjBarcodeItf14, WjBarcodeInterleaved2of5, WjBarcodeJapanesePostal]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjBarcodeDataMatrixEcc000, WjBarcodeDataMatrixEcc200, WjBarcodeCode49, WjBarcodeCode93, WjBarcodeItf14, WjBarcodeInterleaved2of5, WjBarcodeJapanesePostal]; } }); })();export{WjBarcodeSpecializedModule};