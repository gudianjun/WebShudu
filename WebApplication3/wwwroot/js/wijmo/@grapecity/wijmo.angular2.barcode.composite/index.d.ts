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
/**
* {@module wijmo.angular2.barcode.composite}
* Contains Angular 2 components for the <b>wijmo.barcode.composite</b> module.
*
* <b>wijmo.angular2.barcode.composite</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
*
*
*/
/**
 *
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare var ___keepComment: any;
import { EventEmitter, AfterViewInit, ElementRef, Injector, OnInit, OnDestroy } from '@angular/core';
import { IWjComponentMetadata, IWjComponentMeta } from '@grapecity/wijmo.angular2.directivebase';
import * as wjcBarcodeComposite from '@grapecity/wijmo.barcode.composite';
declare var wjBarcodeGs1DataBarOmnidirectionalMeta: IWjComponentMeta;
export { wjBarcodeGs1DataBarOmnidirectionalMeta };
/**
 * Angular 2 component for the {@link wijmo.barcode.composite.Gs1DataBarOmnidirectional} control.
 *
 * Use the <b>wj-barcode-gs1-data-bar-omnidirectional</b> component to add <b>Gs1DataBarOmnidirectional</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjBarcodeGs1DataBarOmnidirectional</b> component is derived from the <b>Gs1DataBarOmnidirectional</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjBarcodeGs1DataBarOmnidirectional extends wjcBarcodeComposite.Gs1DataBarOmnidirectional implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Defines a name of a property represented by [(ngModel)] directive (if specified).
     * Default value is ''.
     */
    wjModelProperty: string;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>gotFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>gotFocus</b> Wijmo event name.
     */
    gotFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>lostFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>lostFocus</b> Wijmo event name.
     */
    lostFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshing</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshing</b> Wijmo event name.
     */
    refreshingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshed</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshed</b> Wijmo event name.
     */
    refreshedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>invalidInput</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>invalidInput</b> Wijmo event name.
     */
    invalidInputNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>isValidChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isValidChanged</b> Wijmo event name.
     */
    isValidChangedNg: EventEmitter<any>;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    addEventListener(target: EventTarget, type: string, fn: any, capture?: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjBarcodeGs1DataBarOmnidirectional, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjBarcodeGs1DataBarOmnidirectional, "wj-barcode-gs1-data-bar-omnidirectional", never, { "wjModelProperty": "wjModelProperty"; "isDisabled": "isDisabled"; "tabOrder": "tabOrder"; "value": "value"; "quietZone": "quietZone"; "renderType": "renderType"; "color": "color"; "backgroundColor": "backgroundColor"; "hideExtraChecksum": "hideExtraChecksum"; "font": "font"; "showLabel": "showLabel"; "labelPosition": "labelPosition"; "linkage": "linkage"; "linkageVersion": "linkageVersion"; "linkageHeight": "linkageHeight"; "hideLinkageText": "hideLinkageText"; "hideAiText": "hideAiText"; }, { "initialized": "initialized"; "gotFocusNg": "gotFocus"; "lostFocusNg": "lostFocus"; "refreshingNg": "refreshing"; "refreshedNg": "refreshed"; "invalidInputNg": "invalidInput"; "isValidChangedNg": "isValidChanged"; }, never, never, false, never>;
}
declare var wjBarcodeGs1DataBarTruncatedMeta: IWjComponentMeta;
export { wjBarcodeGs1DataBarTruncatedMeta };
/**
 * Angular 2 component for the {@link wijmo.barcode.composite.Gs1DataBarTruncated} control.
 *
 * Use the <b>wj-barcode-gs1-data-bar-truncated</b> component to add <b>Gs1DataBarTruncated</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjBarcodeGs1DataBarTruncated</b> component is derived from the <b>Gs1DataBarTruncated</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjBarcodeGs1DataBarTruncated extends wjcBarcodeComposite.Gs1DataBarTruncated implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Defines a name of a property represented by [(ngModel)] directive (if specified).
     * Default value is ''.
     */
    wjModelProperty: string;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>gotFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>gotFocus</b> Wijmo event name.
     */
    gotFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>lostFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>lostFocus</b> Wijmo event name.
     */
    lostFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshing</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshing</b> Wijmo event name.
     */
    refreshingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshed</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshed</b> Wijmo event name.
     */
    refreshedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>invalidInput</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>invalidInput</b> Wijmo event name.
     */
    invalidInputNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>isValidChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isValidChanged</b> Wijmo event name.
     */
    isValidChangedNg: EventEmitter<any>;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    addEventListener(target: EventTarget, type: string, fn: any, capture?: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjBarcodeGs1DataBarTruncated, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjBarcodeGs1DataBarTruncated, "wj-barcode-gs1-data-bar-truncated", never, { "wjModelProperty": "wjModelProperty"; "isDisabled": "isDisabled"; "tabOrder": "tabOrder"; "value": "value"; "quietZone": "quietZone"; "renderType": "renderType"; "color": "color"; "backgroundColor": "backgroundColor"; "hideExtraChecksum": "hideExtraChecksum"; "font": "font"; "showLabel": "showLabel"; "labelPosition": "labelPosition"; "linkage": "linkage"; "linkageVersion": "linkageVersion"; "linkageHeight": "linkageHeight"; "hideLinkageText": "hideLinkageText"; "hideAiText": "hideAiText"; }, { "initialized": "initialized"; "gotFocusNg": "gotFocus"; "lostFocusNg": "lostFocus"; "refreshingNg": "refreshing"; "refreshedNg": "refreshed"; "invalidInputNg": "invalidInput"; "isValidChangedNg": "isValidChanged"; }, never, never, false, never>;
}
declare var wjBarcodeGs1DataBarStackedMeta: IWjComponentMeta;
export { wjBarcodeGs1DataBarStackedMeta };
/**
 * Angular 2 component for the {@link wijmo.barcode.composite.Gs1DataBarStacked} control.
 *
 * Use the <b>wj-barcode-gs1-data-bar-stacked</b> component to add <b>Gs1DataBarStacked</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjBarcodeGs1DataBarStacked</b> component is derived from the <b>Gs1DataBarStacked</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjBarcodeGs1DataBarStacked extends wjcBarcodeComposite.Gs1DataBarStacked implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Defines a name of a property represented by [(ngModel)] directive (if specified).
     * Default value is ''.
     */
    wjModelProperty: string;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>gotFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>gotFocus</b> Wijmo event name.
     */
    gotFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>lostFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>lostFocus</b> Wijmo event name.
     */
    lostFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshing</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshing</b> Wijmo event name.
     */
    refreshingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshed</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshed</b> Wijmo event name.
     */
    refreshedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>invalidInput</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>invalidInput</b> Wijmo event name.
     */
    invalidInputNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>isValidChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isValidChanged</b> Wijmo event name.
     */
    isValidChangedNg: EventEmitter<any>;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    addEventListener(target: EventTarget, type: string, fn: any, capture?: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjBarcodeGs1DataBarStacked, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjBarcodeGs1DataBarStacked, "wj-barcode-gs1-data-bar-stacked", never, { "wjModelProperty": "wjModelProperty"; "isDisabled": "isDisabled"; "tabOrder": "tabOrder"; "value": "value"; "quietZone": "quietZone"; "renderType": "renderType"; "color": "color"; "backgroundColor": "backgroundColor"; "hideExtraChecksum": "hideExtraChecksum"; "font": "font"; "showLabel": "showLabel"; "labelPosition": "labelPosition"; "linkage": "linkage"; "linkageVersion": "linkageVersion"; "linkageHeight": "linkageHeight"; "hideLinkageText": "hideLinkageText"; "hideAiText": "hideAiText"; "ratio": "ratio"; }, { "initialized": "initialized"; "gotFocusNg": "gotFocus"; "lostFocusNg": "lostFocus"; "refreshingNg": "refreshing"; "refreshedNg": "refreshed"; "invalidInputNg": "invalidInput"; "isValidChangedNg": "isValidChanged"; }, never, never, false, never>;
}
declare var wjBarcodeGs1DataBarStackedOmnidirectionalMeta: IWjComponentMeta;
export { wjBarcodeGs1DataBarStackedOmnidirectionalMeta };
/**
 * Angular 2 component for the {@link wijmo.barcode.composite.Gs1DataBarStackedOmnidirectional} control.
 *
 * Use the <b>wj-barcode-gs1-data-bar-stacked-omnidirectional</b> component to add <b>Gs1DataBarStackedOmnidirectional</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjBarcodeGs1DataBarStackedOmnidirectional</b> component is derived from the <b>Gs1DataBarStackedOmnidirectional</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjBarcodeGs1DataBarStackedOmnidirectional extends wjcBarcodeComposite.Gs1DataBarStackedOmnidirectional implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Defines a name of a property represented by [(ngModel)] directive (if specified).
     * Default value is ''.
     */
    wjModelProperty: string;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>gotFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>gotFocus</b> Wijmo event name.
     */
    gotFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>lostFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>lostFocus</b> Wijmo event name.
     */
    lostFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshing</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshing</b> Wijmo event name.
     */
    refreshingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshed</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshed</b> Wijmo event name.
     */
    refreshedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>invalidInput</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>invalidInput</b> Wijmo event name.
     */
    invalidInputNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>isValidChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isValidChanged</b> Wijmo event name.
     */
    isValidChangedNg: EventEmitter<any>;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    addEventListener(target: EventTarget, type: string, fn: any, capture?: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjBarcodeGs1DataBarStackedOmnidirectional, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjBarcodeGs1DataBarStackedOmnidirectional, "wj-barcode-gs1-data-bar-stacked-omnidirectional", never, { "wjModelProperty": "wjModelProperty"; "isDisabled": "isDisabled"; "tabOrder": "tabOrder"; "value": "value"; "quietZone": "quietZone"; "renderType": "renderType"; "color": "color"; "backgroundColor": "backgroundColor"; "hideExtraChecksum": "hideExtraChecksum"; "font": "font"; "showLabel": "showLabel"; "labelPosition": "labelPosition"; "linkage": "linkage"; "linkageVersion": "linkageVersion"; "linkageHeight": "linkageHeight"; "hideLinkageText": "hideLinkageText"; "hideAiText": "hideAiText"; "ratio": "ratio"; }, { "initialized": "initialized"; "gotFocusNg": "gotFocus"; "lostFocusNg": "lostFocus"; "refreshingNg": "refreshing"; "refreshedNg": "refreshed"; "invalidInputNg": "invalidInput"; "isValidChangedNg": "isValidChanged"; }, never, never, false, never>;
}
declare var wjBarcodeGs1DataBarLimitedMeta: IWjComponentMeta;
export { wjBarcodeGs1DataBarLimitedMeta };
/**
 * Angular 2 component for the {@link wijmo.barcode.composite.Gs1DataBarLimited} control.
 *
 * Use the <b>wj-barcode-gs1-data-bar-limited</b> component to add <b>Gs1DataBarLimited</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjBarcodeGs1DataBarLimited</b> component is derived from the <b>Gs1DataBarLimited</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjBarcodeGs1DataBarLimited extends wjcBarcodeComposite.Gs1DataBarLimited implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Defines a name of a property represented by [(ngModel)] directive (if specified).
     * Default value is ''.
     */
    wjModelProperty: string;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>gotFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>gotFocus</b> Wijmo event name.
     */
    gotFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>lostFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>lostFocus</b> Wijmo event name.
     */
    lostFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshing</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshing</b> Wijmo event name.
     */
    refreshingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshed</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshed</b> Wijmo event name.
     */
    refreshedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>invalidInput</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>invalidInput</b> Wijmo event name.
     */
    invalidInputNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>isValidChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isValidChanged</b> Wijmo event name.
     */
    isValidChangedNg: EventEmitter<any>;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    addEventListener(target: EventTarget, type: string, fn: any, capture?: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjBarcodeGs1DataBarLimited, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjBarcodeGs1DataBarLimited, "wj-barcode-gs1-data-bar-limited", never, { "wjModelProperty": "wjModelProperty"; "isDisabled": "isDisabled"; "tabOrder": "tabOrder"; "value": "value"; "quietZone": "quietZone"; "renderType": "renderType"; "color": "color"; "backgroundColor": "backgroundColor"; "hideExtraChecksum": "hideExtraChecksum"; "font": "font"; "showLabel": "showLabel"; "labelPosition": "labelPosition"; "linkage": "linkage"; "linkageVersion": "linkageVersion"; "linkageHeight": "linkageHeight"; "hideLinkageText": "hideLinkageText"; "hideAiText": "hideAiText"; }, { "initialized": "initialized"; "gotFocusNg": "gotFocus"; "lostFocusNg": "lostFocus"; "refreshingNg": "refreshing"; "refreshedNg": "refreshed"; "invalidInputNg": "invalidInput"; "isValidChangedNg": "isValidChanged"; }, never, never, false, never>;
}
declare var wjBarcodeGs1DataBarExpandedMeta: IWjComponentMeta;
export { wjBarcodeGs1DataBarExpandedMeta };
/**
 * Angular 2 component for the {@link wijmo.barcode.composite.Gs1DataBarExpanded} control.
 *
 * Use the <b>wj-barcode-gs1-data-bar-expanded</b> component to add <b>Gs1DataBarExpanded</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjBarcodeGs1DataBarExpanded</b> component is derived from the <b>Gs1DataBarExpanded</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjBarcodeGs1DataBarExpanded extends wjcBarcodeComposite.Gs1DataBarExpanded implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Defines a name of a property represented by [(ngModel)] directive (if specified).
     * Default value is ''.
     */
    wjModelProperty: string;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>gotFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>gotFocus</b> Wijmo event name.
     */
    gotFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>lostFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>lostFocus</b> Wijmo event name.
     */
    lostFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshing</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshing</b> Wijmo event name.
     */
    refreshingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshed</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshed</b> Wijmo event name.
     */
    refreshedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>invalidInput</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>invalidInput</b> Wijmo event name.
     */
    invalidInputNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>isValidChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isValidChanged</b> Wijmo event name.
     */
    isValidChangedNg: EventEmitter<any>;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    addEventListener(target: EventTarget, type: string, fn: any, capture?: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjBarcodeGs1DataBarExpanded, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjBarcodeGs1DataBarExpanded, "wj-barcode-gs1-data-bar-expanded", never, { "wjModelProperty": "wjModelProperty"; "isDisabled": "isDisabled"; "tabOrder": "tabOrder"; "value": "value"; "quietZone": "quietZone"; "renderType": "renderType"; "color": "color"; "backgroundColor": "backgroundColor"; "hideExtraChecksum": "hideExtraChecksum"; "font": "font"; "showLabel": "showLabel"; "labelPosition": "labelPosition"; "linkage": "linkage"; "linkageVersion": "linkageVersion"; "linkageHeight": "linkageHeight"; "hideLinkageText": "hideLinkageText"; "hideAiText": "hideAiText"; "autoWidth": "autoWidth"; "autoWidthZoom": "autoWidthZoom"; }, { "initialized": "initialized"; "gotFocusNg": "gotFocus"; "lostFocusNg": "lostFocus"; "refreshingNg": "refreshing"; "refreshedNg": "refreshed"; "invalidInputNg": "invalidInput"; "isValidChangedNg": "isValidChanged"; }, never, never, false, never>;
}
declare var wjBarcodeGs1DataBarExpandedStackedMeta: IWjComponentMeta;
export { wjBarcodeGs1DataBarExpandedStackedMeta };
/**
 * Angular 2 component for the {@link wijmo.barcode.composite.Gs1DataBarExpandedStacked} control.
 *
 * Use the <b>wj-barcode-gs1-data-bar-expanded-stacked</b> component to add <b>Gs1DataBarExpandedStacked</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjBarcodeGs1DataBarExpandedStacked</b> component is derived from the <b>Gs1DataBarExpandedStacked</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjBarcodeGs1DataBarExpandedStacked extends wjcBarcodeComposite.Gs1DataBarExpandedStacked implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Defines a name of a property represented by [(ngModel)] directive (if specified).
     * Default value is ''.
     */
    wjModelProperty: string;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>gotFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>gotFocus</b> Wijmo event name.
     */
    gotFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>lostFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>lostFocus</b> Wijmo event name.
     */
    lostFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshing</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshing</b> Wijmo event name.
     */
    refreshingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshed</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshed</b> Wijmo event name.
     */
    refreshedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>invalidInput</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>invalidInput</b> Wijmo event name.
     */
    invalidInputNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>isValidChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isValidChanged</b> Wijmo event name.
     */
    isValidChangedNg: EventEmitter<any>;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    addEventListener(target: EventTarget, type: string, fn: any, capture?: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjBarcodeGs1DataBarExpandedStacked, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjBarcodeGs1DataBarExpandedStacked, "wj-barcode-gs1-data-bar-expanded-stacked", never, { "wjModelProperty": "wjModelProperty"; "isDisabled": "isDisabled"; "tabOrder": "tabOrder"; "value": "value"; "quietZone": "quietZone"; "renderType": "renderType"; "color": "color"; "backgroundColor": "backgroundColor"; "hideExtraChecksum": "hideExtraChecksum"; "font": "font"; "showLabel": "showLabel"; "labelPosition": "labelPosition"; "linkage": "linkage"; "linkageVersion": "linkageVersion"; "linkageHeight": "linkageHeight"; "hideLinkageText": "hideLinkageText"; "hideAiText": "hideAiText"; "autoWidth": "autoWidth"; "autoWidthZoom": "autoWidthZoom"; "rowCount": "rowCount"; }, { "initialized": "initialized"; "gotFocusNg": "gotFocus"; "lostFocusNg": "lostFocus"; "refreshingNg": "refreshing"; "refreshedNg": "refreshed"; "invalidInputNg": "invalidInput"; "isValidChangedNg": "isValidChanged"; }, never, never, false, never>;
}
declare var wjBarcodePdf417Meta: IWjComponentMeta;
export { wjBarcodePdf417Meta };
/**
 * Angular 2 component for the {@link wijmo.barcode.composite.Pdf417} control.
 *
 * Use the <b>wj-barcode-pdf417</b> component to add <b>Pdf417</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjBarcodePdf417</b> component is derived from the <b>Pdf417</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjBarcodePdf417 extends wjcBarcodeComposite.Pdf417 implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Defines a name of a property represented by [(ngModel)] directive (if specified).
     * Default value is ''.
     */
    wjModelProperty: string;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>gotFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>gotFocus</b> Wijmo event name.
     */
    gotFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>lostFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>lostFocus</b> Wijmo event name.
     */
    lostFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshing</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshing</b> Wijmo event name.
     */
    refreshingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshed</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshed</b> Wijmo event name.
     */
    refreshedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>invalidInput</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>invalidInput</b> Wijmo event name.
     */
    invalidInputNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>isValidChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isValidChanged</b> Wijmo event name.
     */
    isValidChangedNg: EventEmitter<any>;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    addEventListener(target: EventTarget, type: string, fn: any, capture?: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjBarcodePdf417, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjBarcodePdf417, "wj-barcode-pdf417", never, { "wjModelProperty": "wjModelProperty"; "isDisabled": "isDisabled"; "tabOrder": "tabOrder"; "value": "value"; "quietZone": "quietZone"; "renderType": "renderType"; "color": "color"; "backgroundColor": "backgroundColor"; "hideExtraChecksum": "hideExtraChecksum"; "font": "font"; "autoWidth": "autoWidth"; "autoWidthZoom": "autoWidthZoom"; "errorCorrectionLevel": "errorCorrectionLevel"; "columns": "columns"; "rows": "rows"; "compact": "compact"; }, { "initialized": "initialized"; "gotFocusNg": "gotFocus"; "lostFocusNg": "lostFocus"; "refreshingNg": "refreshing"; "refreshedNg": "refreshed"; "invalidInputNg": "invalidInput"; "isValidChangedNg": "isValidChanged"; }, never, never, false, never>;
}
declare var wjBarcodeMicroPdf417Meta: IWjComponentMeta;
export { wjBarcodeMicroPdf417Meta };
/**
 * Angular 2 component for the {@link wijmo.barcode.composite.MicroPdf417} control.
 *
 * Use the <b>wj-barcode-micro-pdf417</b> component to add <b>MicroPdf417</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjBarcodeMicroPdf417</b> component is derived from the <b>MicroPdf417</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjBarcodeMicroPdf417 extends wjcBarcodeComposite.MicroPdf417 implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Defines a name of a property represented by [(ngModel)] directive (if specified).
     * Default value is ''.
     */
    wjModelProperty: string;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>gotFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>gotFocus</b> Wijmo event name.
     */
    gotFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>lostFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>lostFocus</b> Wijmo event name.
     */
    lostFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshing</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshing</b> Wijmo event name.
     */
    refreshingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshed</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshed</b> Wijmo event name.
     */
    refreshedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>invalidInput</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>invalidInput</b> Wijmo event name.
     */
    invalidInputNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>isValidChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isValidChanged</b> Wijmo event name.
     */
    isValidChangedNg: EventEmitter<any>;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    addEventListener(target: EventTarget, type: string, fn: any, capture?: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjBarcodeMicroPdf417, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjBarcodeMicroPdf417, "wj-barcode-micro-pdf417", never, { "wjModelProperty": "wjModelProperty"; "isDisabled": "isDisabled"; "tabOrder": "tabOrder"; "value": "value"; "quietZone": "quietZone"; "renderType": "renderType"; "color": "color"; "backgroundColor": "backgroundColor"; "hideExtraChecksum": "hideExtraChecksum"; "font": "font"; "dimensions": "dimensions"; "compactionMode": "compactionMode"; "structuredAppend": "structuredAppend"; "segmentIndex": "segmentIndex"; "fileId": "fileId"; "optionalFields": "optionalFields"; }, { "initialized": "initialized"; "gotFocusNg": "gotFocus"; "lostFocusNg": "lostFocus"; "refreshingNg": "refreshing"; "refreshedNg": "refreshed"; "invalidInputNg": "invalidInput"; "isValidChangedNg": "isValidChanged"; }, never, never, false, never>;
}
export declare class WjBarcodeCompositeModule {
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjBarcodeCompositeModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<WjBarcodeCompositeModule, [typeof WjBarcodeGs1DataBarOmnidirectional, typeof WjBarcodeGs1DataBarTruncated, typeof WjBarcodeGs1DataBarStacked, typeof WjBarcodeGs1DataBarStackedOmnidirectional, typeof WjBarcodeGs1DataBarLimited, typeof WjBarcodeGs1DataBarExpanded, typeof WjBarcodeGs1DataBarExpandedStacked, typeof WjBarcodePdf417, typeof WjBarcodeMicroPdf417], [typeof ɵngcc1.CommonModule], [typeof WjBarcodeGs1DataBarOmnidirectional, typeof WjBarcodeGs1DataBarTruncated, typeof WjBarcodeGs1DataBarStacked, typeof WjBarcodeGs1DataBarStackedOmnidirectional, typeof WjBarcodeGs1DataBarLimited, typeof WjBarcodeGs1DataBarExpanded, typeof WjBarcodeGs1DataBarExpandedStacked, typeof WjBarcodePdf417, typeof WjBarcodeMicroPdf417]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<WjBarcodeCompositeModule>;
}
