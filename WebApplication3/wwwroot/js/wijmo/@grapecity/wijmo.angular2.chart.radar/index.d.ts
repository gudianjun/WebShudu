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
* {@module wijmo.angular2.chart.radar}
* Contains Angular 2 components for the <b>wijmo.chart.radar</b> module.
*
* <b>wijmo.angular2.chart.radar</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjRadar from 'wijmo/wijmo.angular2.chart.radar';
* &nbsp;
* &#64;Component({
*     directives: [wjRadar.WjFlexRadar, wjRadar.WjFlexRadarSeries],
*     template: `
*       &lt;wj-flex-radar [itemsSource]="data" [bindingX]="'x'"&gt;
*           &lt;wj-flex-radar-series [binding]="'y'"&gt;&lt;/wj-flex-radar-series&gt;
*       &lt;/wj-flex-radar&gt;`,
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     data: any[];
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
import * as wjcChartRadar from '@grapecity/wijmo.chart.radar';
declare var wjFlexRadarMeta: IWjComponentMeta;
export { wjFlexRadarMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.radar.FlexRadar} control.
 *
 * Use the <b>wj-flex-radar</b> component to add <b>FlexRadar</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexRadar</b> component is derived from the <b>FlexRadar</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-radar</b> component may contain the following child components:
 * {@link wijmo.angular2.chart.animation.WjFlexChartAnimation}
 * , {@link wijmo.angular2.chart.radar.WjFlexRadarAxis}
 * , {@link wijmo.angular2.chart.radar.WjFlexRadarSeries}
 *  and {@link wijmo.angular2.chart.WjFlexChartLegend}.
*/
export declare class WjFlexRadar extends wjcChartRadar.FlexRadar implements OnInit, OnDestroy, AfterViewInit {
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
     * Angular (EventEmitter) version of the Wijmo <b>rendering</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>rendering</b> Wijmo event name.
     */
    renderingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>rendered</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>rendered</b> Wijmo event name.
     */
    renderedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>selectionChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>selectionChanged</b> Wijmo event name.
     */
    selectionChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selection</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectionChange</b> event name.
     */
    selectionChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>itemsSourceChanging</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>itemsSourceChanging</b> Wijmo event name.
     */
    itemsSourceChangingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>itemsSourceChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>itemsSourceChanged</b> Wijmo event name.
     */
    itemsSourceChangedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>seriesVisibilityChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>seriesVisibilityChanged</b> Wijmo event name.
     */
    seriesVisibilityChangedNg: EventEmitter<any>;
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
    tooltipContent: any;
    labelContent: any;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexRadar, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexRadar, "wj-flex-radar", never, { "asyncBindings": "asyncBindings"; "wjModelProperty": "wjModelProperty"; "renderEngine": "renderEngine"; "isDisabled": "isDisabled"; "tabOrder": "tabOrder"; "binding": "binding"; "footer": "footer"; "header": "header"; "selectionMode": "selectionMode"; "palette": "palette"; "plotMargin": "plotMargin"; "footerStyle": "footerStyle"; "headerStyle": "headerStyle"; "tooltipContent": "tooltipContent"; "itemsSource": "itemsSource"; "bindingX": "bindingX"; "interpolateNulls": "interpolateNulls"; "legendToggle": "legendToggle"; "symbolSize": "symbolSize"; "options": "options"; "selection": "selection"; "itemFormatter": "itemFormatter"; "labelContent": "labelContent"; "chartType": "chartType"; "startAngle": "startAngle"; "totalAngle": "totalAngle"; "reversed": "reversed"; "stacking": "stacking"; }, { "initialized": "initialized"; "gotFocusNg": "gotFocus"; "lostFocusNg": "lostFocus"; "refreshingNg": "refreshing"; "refreshedNg": "refreshed"; "invalidInputNg": "invalidInput"; "renderingNg": "rendering"; "renderedNg": "rendered"; "selectionChangedNg": "selectionChanged"; "selectionChangePC": "selectionChange"; "itemsSourceChangingNg": "itemsSourceChanging"; "itemsSourceChangedNg": "itemsSourceChanged"; "seriesVisibilityChangedNg": "seriesVisibilityChanged"; }, never, ["*"], false, never>;
}
declare var wjFlexRadarAxisMeta: IWjComponentMeta;
export { wjFlexRadarAxisMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.radar.FlexRadarAxis} class.
 *
 * The <b>wj-flex-radar-axis</b> component must be
 * contained in one of the following components:
 * {@link wijmo.angular2.chart.radar.WjFlexRadar}
 *  or {@link wijmo.angular2.chart.radar.WjFlexRadarSeries}.
 *
 * Use the <b>wj-flex-radar-axis</b> component to add <b>FlexRadarAxis</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexRadarAxis</b> component is derived from the <b>FlexRadarAxis</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexRadarAxis extends wjcChartRadar.FlexRadarAxis implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'axes'.
     */
    wjProperty: string;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>rangeChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>rangeChanged</b> Wijmo event name.
     */
    rangeChangedNg: EventEmitter<any>;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexRadarAxis, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexRadarAxis, "wj-flex-radar-axis", never, { "wjProperty": "wjProperty"; "axisLine": "axisLine"; "format": "format"; "labels": "labels"; "majorGrid": "majorGrid"; "majorTickMarks": "majorTickMarks"; "majorUnit": "majorUnit"; "max": "max"; "min": "min"; "position": "position"; "reversed": "reversed"; "title": "title"; "labelAngle": "labelAngle"; "minorGrid": "minorGrid"; "minorTickMarks": "minorTickMarks"; "minorUnit": "minorUnit"; "origin": "origin"; "logBase": "logBase"; "plotArea": "plotArea"; "labelAlign": "labelAlign"; "name": "name"; "overlappingLabels": "overlappingLabels"; "labelPadding": "labelPadding"; "itemFormatter": "itemFormatter"; "itemsSource": "itemsSource"; "binding": "binding"; "labelMin": "labelMin"; "labelMax": "labelMax"; }, { "initialized": "initialized"; "rangeChangedNg": "rangeChanged"; }, never, never, false, never>;
}
declare var wjFlexRadarSeriesMeta: IWjComponentMeta;
export { wjFlexRadarSeriesMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.radar.FlexRadarSeries} class.
 *
 * The <b>wj-flex-radar-series</b> component must be
 * contained in a {@link wijmo.angular2.chart.radar.WjFlexRadar} component.
 *
 * Use the <b>wj-flex-radar-series</b> component to add <b>FlexRadarSeries</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexRadarSeries</b> component is derived from the <b>FlexRadarSeries</b> class and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-radar-series</b> component may contain a {@link wijmo.angular2.chart.radar.WjFlexRadarAxis} child component.
*/
export declare class WjFlexRadarSeries extends wjcChartRadar.FlexRadarSeries implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'series'.
     */
    wjProperty: string;
    /**
     * Allows you to override the global <b>WjOptions.asyncBindings</b> setting for this specific component.
     * See the <b>WjOptions.</b>{@link WjOptions.asyncBindings} property description for details.
     */
    asyncBindings: boolean;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>rendering</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>rendering</b> Wijmo event name.
     */
    renderingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>rendered</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>rendered</b> Wijmo event name.
     */
    renderedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>visibility</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>visibilityChange</b> event name.
     */
    visibilityChangePC: EventEmitter<any>;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexRadarSeries, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexRadarSeries, "wj-flex-radar-series", never, { "asyncBindings": "asyncBindings"; "wjProperty": "wjProperty"; "axisX": "axisX"; "axisY": "axisY"; "binding": "binding"; "bindingX": "bindingX"; "cssClass": "cssClass"; "name": "name"; "style": "style"; "altStyle": "altStyle"; "symbolMarker": "symbolMarker"; "symbolSize": "symbolSize"; "symbolStyle": "symbolStyle"; "visibility": "visibility"; "itemsSource": "itemsSource"; "interpolateNulls": "interpolateNulls"; "tooltipContent": "tooltipContent"; "itemFormatter": "itemFormatter"; "chartType": "chartType"; }, { "initialized": "initialized"; "renderingNg": "rendering"; "renderedNg": "rendered"; "visibilityChangePC": "visibilityChange"; }, never, ["*"], false, never>;
}
export declare class WjChartRadarModule {
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjChartRadarModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<WjChartRadarModule, [typeof WjFlexRadar, typeof WjFlexRadarAxis, typeof WjFlexRadarSeries], [typeof ɵngcc1.CommonModule], [typeof WjFlexRadar, typeof WjFlexRadarAxis, typeof WjFlexRadarSeries]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<WjChartRadarModule>;
}
