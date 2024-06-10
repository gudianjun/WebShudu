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
* {@module wijmo.angular2.gauge}
* Contains Angular 2 components for the <b>wijmo.gauge</b> module.
*
* <b>wijmo.angular2.gauge</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjGauge from 'wijmo/wijmo.angular2.gauge';
* &nbsp;
* &#64;Component({
*     directives: [wjGauge.WjLinearGauge],
*     template: '&lt;wj-linear-gauge [(value)]="amount" [isReadOnly]="false"&gt;&lt;/wj-linear-gauge&gt;',
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     amount = 0;
* }</pre>
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
import * as wjcGauge from '@grapecity/wijmo.gauge';
declare var wjLinearGaugeMeta: IWjComponentMeta;
export { wjLinearGaugeMeta };
/**
 * Angular 2 component for the {@link wijmo.gauge.LinearGauge} control.
 *
 * Use the <b>wj-linear-gauge</b> component to add <b>LinearGauge</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjLinearGauge</b> component is derived from the <b>LinearGauge</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-linear-gauge</b> component may contain a {@link wijmo.angular2.gauge.WjRange} child component.
*/
export declare class WjLinearGauge extends wjcGauge.LinearGauge implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'value'.
     */
    wjModelProperty: string;
    /**
     * Allows you to override the global <b>WjOptions.asyncBindings</b> setting for this specific component.
     * See the <b>WjOptions.</b>{@link WjOptions.asyncBindings} property description for details.
     */
    asyncBindings: boolean;
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
     * Angular (EventEmitter) version of the Wijmo <b>valueChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>valueChanged</b> Wijmo event name.
     */
    valueChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>value</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>valueChange</b> event name.
     */
    valueChangePC: EventEmitter<any>;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjLinearGauge, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjLinearGauge, "wj-linear-gauge", never, { "asyncBindings": "asyncBindings"; "wjModelProperty": "wjModelProperty"; "isDisabled": "isDisabled"; "tabOrder": "tabOrder"; "value": "value"; "min": "min"; "max": "max"; "origin": "origin"; "isReadOnly": "isReadOnly"; "handleWheel": "handleWheel"; "step": "step"; "format": "format"; "thickness": "thickness"; "hasShadow": "hasShadow"; "isAnimated": "isAnimated"; "showText": "showText"; "showTicks": "showTicks"; "showTickText": "showTickText"; "showRanges": "showRanges"; "stackRanges": "stackRanges"; "thumbSize": "thumbSize"; "tickSpacing": "tickSpacing"; "getText": "getText"; "direction": "direction"; }, { "initialized": "initialized"; "gotFocusNg": "gotFocus"; "lostFocusNg": "lostFocus"; "refreshingNg": "refreshing"; "refreshedNg": "refreshed"; "invalidInputNg": "invalidInput"; "valueChangedNg": "valueChanged"; "valueChangePC": "valueChange"; }, never, ["*"], false, never>;
}
declare var wjBulletGraphMeta: IWjComponentMeta;
export { wjBulletGraphMeta };
/**
 * Angular 2 component for the {@link wijmo.gauge.BulletGraph} control.
 *
 * Use the <b>wj-bullet-graph</b> component to add <b>BulletGraph</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjBulletGraph</b> component is derived from the <b>BulletGraph</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-bullet-graph</b> component may contain a {@link wijmo.angular2.gauge.WjRange} child component.
*/
export declare class WjBulletGraph extends wjcGauge.BulletGraph implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'value'.
     */
    wjModelProperty: string;
    /**
     * Allows you to override the global <b>WjOptions.asyncBindings</b> setting for this specific component.
     * See the <b>WjOptions.</b>{@link WjOptions.asyncBindings} property description for details.
     */
    asyncBindings: boolean;
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
     * Angular (EventEmitter) version of the Wijmo <b>valueChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>valueChanged</b> Wijmo event name.
     */
    valueChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>value</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>valueChange</b> event name.
     */
    valueChangePC: EventEmitter<any>;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjBulletGraph, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjBulletGraph, "wj-bullet-graph", never, { "asyncBindings": "asyncBindings"; "wjModelProperty": "wjModelProperty"; "isDisabled": "isDisabled"; "tabOrder": "tabOrder"; "value": "value"; "min": "min"; "max": "max"; "origin": "origin"; "isReadOnly": "isReadOnly"; "handleWheel": "handleWheel"; "step": "step"; "format": "format"; "thickness": "thickness"; "hasShadow": "hasShadow"; "isAnimated": "isAnimated"; "showText": "showText"; "showTicks": "showTicks"; "showTickText": "showTickText"; "showRanges": "showRanges"; "stackRanges": "stackRanges"; "thumbSize": "thumbSize"; "tickSpacing": "tickSpacing"; "getText": "getText"; "direction": "direction"; "target": "target"; "good": "good"; "bad": "bad"; }, { "initialized": "initialized"; "gotFocusNg": "gotFocus"; "lostFocusNg": "lostFocus"; "refreshingNg": "refreshing"; "refreshedNg": "refreshed"; "invalidInputNg": "invalidInput"; "valueChangedNg": "valueChanged"; "valueChangePC": "valueChange"; }, never, ["*"], false, never>;
}
declare var wjRadialGaugeMeta: IWjComponentMeta;
export { wjRadialGaugeMeta };
/**
 * Angular 2 component for the {@link wijmo.gauge.RadialGauge} control.
 *
 * Use the <b>wj-radial-gauge</b> component to add <b>RadialGauge</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjRadialGauge</b> component is derived from the <b>RadialGauge</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-radial-gauge</b> component may contain a {@link wijmo.angular2.gauge.WjRange} child component.
*/
export declare class WjRadialGauge extends wjcGauge.RadialGauge implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'value'.
     */
    wjModelProperty: string;
    /**
     * Allows you to override the global <b>WjOptions.asyncBindings</b> setting for this specific component.
     * See the <b>WjOptions.</b>{@link WjOptions.asyncBindings} property description for details.
     */
    asyncBindings: boolean;
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
     * Angular (EventEmitter) version of the Wijmo <b>valueChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>valueChanged</b> Wijmo event name.
     */
    valueChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>value</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>valueChange</b> event name.
     */
    valueChangePC: EventEmitter<any>;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjRadialGauge, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjRadialGauge, "wj-radial-gauge", never, { "asyncBindings": "asyncBindings"; "wjModelProperty": "wjModelProperty"; "isDisabled": "isDisabled"; "tabOrder": "tabOrder"; "value": "value"; "min": "min"; "max": "max"; "origin": "origin"; "isReadOnly": "isReadOnly"; "handleWheel": "handleWheel"; "step": "step"; "format": "format"; "thickness": "thickness"; "hasShadow": "hasShadow"; "isAnimated": "isAnimated"; "showText": "showText"; "showTicks": "showTicks"; "showTickText": "showTickText"; "showRanges": "showRanges"; "stackRanges": "stackRanges"; "thumbSize": "thumbSize"; "tickSpacing": "tickSpacing"; "getText": "getText"; "autoScale": "autoScale"; "startAngle": "startAngle"; "sweepAngle": "sweepAngle"; "needleShape": "needleShape"; "needleLength": "needleLength"; "needleElement": "needleElement"; }, { "initialized": "initialized"; "gotFocusNg": "gotFocus"; "lostFocusNg": "lostFocus"; "refreshingNg": "refreshing"; "refreshedNg": "refreshed"; "invalidInputNg": "invalidInput"; "valueChangedNg": "valueChanged"; "valueChangePC": "valueChange"; }, never, ["*"], false, never>;
}
declare var wjRangeMeta: IWjComponentMeta;
export { wjRangeMeta };
/**
 * Angular 2 component for the {@link wijmo.gauge.Range} class.
 *
 * The <b>wj-range</b> component must be
 * contained in one of the following components:
 * {@link wijmo.angular2.gauge.WjLinearGauge}
 * , {@link wijmo.angular2.gauge.WjBulletGraph}
 *  or {@link wijmo.angular2.gauge.WjRadialGauge}.
 *
 * Use the <b>wj-range</b> component to add <b>Range</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjRange</b> component is derived from the <b>Range</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjRange extends wjcGauge.Range implements OnInit, OnDestroy, AfterViewInit {
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
     * Gets or sets a name of a property that this component is assigned to.
     * Default value is 'ranges'.
     */
    wjProperty: string;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjRange, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjRange, "wj-range", never, { "wjProperty": "wjProperty"; "color": "color"; "min": "min"; "max": "max"; "name": "name"; "thickness": "thickness"; }, { "initialized": "initialized"; }, never, never, false, never>;
}
export declare class WjGaugeModule {
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjGaugeModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<WjGaugeModule, [typeof WjLinearGauge, typeof WjBulletGraph, typeof WjRadialGauge, typeof WjRange], [typeof ɵngcc1.CommonModule], [typeof WjLinearGauge, typeof WjBulletGraph, typeof WjRadialGauge, typeof WjRange]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<WjGaugeModule>;
}
