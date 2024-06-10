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
* {@module wijmo.angular2.chart.analytics}
* Contains Angular 2 components for the <b>wijmo.chart.analytics</b> module.
*
* <b>wijmo.angular2.chart.analytics</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjAnalitics from 'wijmo/wijmo.angular2.chart.analytics';</pre>
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
import * as wjcChartAnalytics from '@grapecity/wijmo.chart.analytics';
declare var wjFlexChartTrendLineMeta: IWjComponentMeta;
export { wjFlexChartTrendLineMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.analytics.TrendLine} class.
 *
 * The <b>wj-flex-chart-trend-line</b> component must be
 * contained in one of the following components:
 * {@link wijmo.angular2.chart.WjFlexChart}
 *  or {@link wijmo.angular2.chart.finance.WjFinancialChart}.
 *
 * Use the <b>wj-flex-chart-trend-line</b> component to add <b>TrendLine</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartTrendLine</b> component is derived from the <b>TrendLine</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartTrendLine extends wjcChartAnalytics.TrendLine implements OnInit, OnDestroy, AfterViewInit {
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartTrendLine, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartTrendLine, "wj-flex-chart-trend-line", never, { "asyncBindings": "asyncBindings"; "wjProperty": "wjProperty"; "axisX": "axisX"; "axisY": "axisY"; "binding": "binding"; "bindingX": "bindingX"; "cssClass": "cssClass"; "name": "name"; "style": "style"; "altStyle": "altStyle"; "symbolMarker": "symbolMarker"; "symbolSize": "symbolSize"; "symbolStyle": "symbolStyle"; "visibility": "visibility"; "itemsSource": "itemsSource"; "interpolateNulls": "interpolateNulls"; "tooltipContent": "tooltipContent"; "itemFormatter": "itemFormatter"; "sampleCount": "sampleCount"; "order": "order"; "fitType": "fitType"; }, { "initialized": "initialized"; "renderingNg": "rendering"; "renderedNg": "rendered"; "visibilityChangePC": "visibilityChange"; }, never, never, false, never>;
}
declare var wjFlexChartMovingAverageMeta: IWjComponentMeta;
export { wjFlexChartMovingAverageMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.analytics.MovingAverage} class.
 *
 * The <b>wj-flex-chart-moving-average</b> component must be
 * contained in one of the following components:
 * {@link wijmo.angular2.chart.WjFlexChart}
 *  or {@link wijmo.angular2.chart.finance.WjFinancialChart}.
 *
 * Use the <b>wj-flex-chart-moving-average</b> component to add <b>MovingAverage</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartMovingAverage</b> component is derived from the <b>MovingAverage</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartMovingAverage extends wjcChartAnalytics.MovingAverage implements OnInit, OnDestroy, AfterViewInit {
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartMovingAverage, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartMovingAverage, "wj-flex-chart-moving-average", never, { "asyncBindings": "asyncBindings"; "wjProperty": "wjProperty"; "axisX": "axisX"; "axisY": "axisY"; "binding": "binding"; "bindingX": "bindingX"; "cssClass": "cssClass"; "name": "name"; "style": "style"; "altStyle": "altStyle"; "symbolMarker": "symbolMarker"; "symbolSize": "symbolSize"; "symbolStyle": "symbolStyle"; "visibility": "visibility"; "itemsSource": "itemsSource"; "interpolateNulls": "interpolateNulls"; "tooltipContent": "tooltipContent"; "itemFormatter": "itemFormatter"; "sampleCount": "sampleCount"; "period": "period"; "type": "type"; }, { "initialized": "initialized"; "renderingNg": "rendering"; "renderedNg": "rendered"; "visibilityChangePC": "visibilityChange"; }, never, never, false, never>;
}
declare var wjFlexChartYFunctionSeriesMeta: IWjComponentMeta;
export { wjFlexChartYFunctionSeriesMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.analytics.YFunctionSeries} class.
 *
 * The <b>wj-flex-chart-y-function-series</b> component must be
 * contained in one of the following components:
 * {@link wijmo.angular2.chart.WjFlexChart}
 *  or {@link wijmo.angular2.chart.finance.WjFinancialChart}.
 *
 * Use the <b>wj-flex-chart-y-function-series</b> component to add <b>YFunctionSeries</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartYFunctionSeries</b> component is derived from the <b>YFunctionSeries</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartYFunctionSeries extends wjcChartAnalytics.YFunctionSeries implements OnInit, OnDestroy, AfterViewInit {
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartYFunctionSeries, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartYFunctionSeries, "wj-flex-chart-y-function-series", never, { "asyncBindings": "asyncBindings"; "wjProperty": "wjProperty"; "axisX": "axisX"; "axisY": "axisY"; "binding": "binding"; "bindingX": "bindingX"; "cssClass": "cssClass"; "name": "name"; "style": "style"; "altStyle": "altStyle"; "symbolMarker": "symbolMarker"; "symbolSize": "symbolSize"; "symbolStyle": "symbolStyle"; "visibility": "visibility"; "itemsSource": "itemsSource"; "interpolateNulls": "interpolateNulls"; "tooltipContent": "tooltipContent"; "itemFormatter": "itemFormatter"; "sampleCount": "sampleCount"; "min": "min"; "max": "max"; "func": "func"; }, { "initialized": "initialized"; "renderingNg": "rendering"; "renderedNg": "rendered"; "visibilityChangePC": "visibilityChange"; }, never, never, false, never>;
}
declare var wjFlexChartParametricFunctionSeriesMeta: IWjComponentMeta;
export { wjFlexChartParametricFunctionSeriesMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.analytics.ParametricFunctionSeries} class.
 *
 * The <b>wj-flex-chart-parametric-function-series</b> component must be
 * contained in one of the following components:
 * {@link wijmo.angular2.chart.WjFlexChart}
 *  or {@link wijmo.angular2.chart.finance.WjFinancialChart}.
 *
 * Use the <b>wj-flex-chart-parametric-function-series</b> component to add <b>ParametricFunctionSeries</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartParametricFunctionSeries</b> component is derived from the <b>ParametricFunctionSeries</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartParametricFunctionSeries extends wjcChartAnalytics.ParametricFunctionSeries implements OnInit, OnDestroy, AfterViewInit {
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartParametricFunctionSeries, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartParametricFunctionSeries, "wj-flex-chart-parametric-function-series", never, { "asyncBindings": "asyncBindings"; "wjProperty": "wjProperty"; "axisX": "axisX"; "axisY": "axisY"; "binding": "binding"; "bindingX": "bindingX"; "cssClass": "cssClass"; "name": "name"; "style": "style"; "altStyle": "altStyle"; "symbolMarker": "symbolMarker"; "symbolSize": "symbolSize"; "symbolStyle": "symbolStyle"; "visibility": "visibility"; "itemsSource": "itemsSource"; "interpolateNulls": "interpolateNulls"; "tooltipContent": "tooltipContent"; "itemFormatter": "itemFormatter"; "sampleCount": "sampleCount"; "min": "min"; "max": "max"; "func": "func"; "xFunc": "xFunc"; "yFunc": "yFunc"; }, { "initialized": "initialized"; "renderingNg": "rendering"; "renderedNg": "rendered"; "visibilityChangePC": "visibilityChange"; }, never, never, false, never>;
}
declare var wjFlexChartWaterfallMeta: IWjComponentMeta;
export { wjFlexChartWaterfallMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.analytics.Waterfall} class.
 *
 * The <b>wj-flex-chart-waterfall</b> component must be
 * contained in one of the following components:
 * {@link wijmo.angular2.chart.WjFlexChart}
 *  or {@link wijmo.angular2.chart.finance.WjFinancialChart}.
 *
 * Use the <b>wj-flex-chart-waterfall</b> component to add <b>Waterfall</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartWaterfall</b> component is derived from the <b>Waterfall</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartWaterfall extends wjcChartAnalytics.Waterfall implements OnInit, OnDestroy, AfterViewInit {
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartWaterfall, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartWaterfall, "wj-flex-chart-waterfall", never, { "asyncBindings": "asyncBindings"; "wjProperty": "wjProperty"; "axisX": "axisX"; "axisY": "axisY"; "binding": "binding"; "bindingX": "bindingX"; "cssClass": "cssClass"; "name": "name"; "style": "style"; "altStyle": "altStyle"; "symbolMarker": "symbolMarker"; "symbolSize": "symbolSize"; "symbolStyle": "symbolStyle"; "visibility": "visibility"; "itemsSource": "itemsSource"; "interpolateNulls": "interpolateNulls"; "tooltipContent": "tooltipContent"; "itemFormatter": "itemFormatter"; "relativeData": "relativeData"; "start": "start"; "startLabel": "startLabel"; "showTotal": "showTotal"; "totalLabel": "totalLabel"; "showIntermediateTotal": "showIntermediateTotal"; "intermediateTotalPositions": "intermediateTotalPositions"; "intermediateTotalLabels": "intermediateTotalLabels"; "connectorLines": "connectorLines"; "styles": "styles"; }, { "initialized": "initialized"; "renderingNg": "rendering"; "renderedNg": "rendered"; "visibilityChangePC": "visibilityChange"; }, never, never, false, never>;
}
declare var wjFlexChartBoxWhiskerMeta: IWjComponentMeta;
export { wjFlexChartBoxWhiskerMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.analytics.BoxWhisker} class.
 *
 * The <b>wj-flex-chart-box-whisker</b> component must be
 * contained in one of the following components:
 * {@link wijmo.angular2.chart.WjFlexChart}
 *  or {@link wijmo.angular2.chart.finance.WjFinancialChart}.
 *
 * Use the <b>wj-flex-chart-box-whisker</b> component to add <b>BoxWhisker</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartBoxWhisker</b> component is derived from the <b>BoxWhisker</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartBoxWhisker extends wjcChartAnalytics.BoxWhisker implements OnInit, OnDestroy, AfterViewInit {
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartBoxWhisker, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartBoxWhisker, "wj-flex-chart-box-whisker", never, { "asyncBindings": "asyncBindings"; "wjProperty": "wjProperty"; "axisX": "axisX"; "axisY": "axisY"; "binding": "binding"; "bindingX": "bindingX"; "cssClass": "cssClass"; "name": "name"; "style": "style"; "altStyle": "altStyle"; "symbolMarker": "symbolMarker"; "symbolSize": "symbolSize"; "symbolStyle": "symbolStyle"; "visibility": "visibility"; "itemsSource": "itemsSource"; "interpolateNulls": "interpolateNulls"; "tooltipContent": "tooltipContent"; "itemFormatter": "itemFormatter"; "quartileCalculation": "quartileCalculation"; "groupWidth": "groupWidth"; "gapWidth": "gapWidth"; "showMeanLine": "showMeanLine"; "meanLineStyle": "meanLineStyle"; "showMeanMarker": "showMeanMarker"; "meanMarkerStyle": "meanMarkerStyle"; "showInnerPoints": "showInnerPoints"; "showOutliers": "showOutliers"; }, { "initialized": "initialized"; "renderingNg": "rendering"; "renderedNg": "rendered"; "visibilityChangePC": "visibilityChange"; }, never, never, false, never>;
}
declare var wjFlexChartErrorBarMeta: IWjComponentMeta;
export { wjFlexChartErrorBarMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.analytics.ErrorBar} class.
 *
 * The <b>wj-flex-chart-error-bar</b> component must be
 * contained in a {@link wijmo.angular2.chart.WjFlexChart} component.
 *
 * Use the <b>wj-flex-chart-error-bar</b> component to add <b>ErrorBar</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartErrorBar</b> component is derived from the <b>ErrorBar</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartErrorBar extends wjcChartAnalytics.ErrorBar implements OnInit, OnDestroy, AfterViewInit {
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartErrorBar, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartErrorBar, "wj-flex-chart-error-bar", never, { "asyncBindings": "asyncBindings"; "wjProperty": "wjProperty"; "axisX": "axisX"; "axisY": "axisY"; "binding": "binding"; "bindingX": "bindingX"; "cssClass": "cssClass"; "name": "name"; "style": "style"; "altStyle": "altStyle"; "symbolMarker": "symbolMarker"; "symbolSize": "symbolSize"; "symbolStyle": "symbolStyle"; "visibility": "visibility"; "itemsSource": "itemsSource"; "interpolateNulls": "interpolateNulls"; "tooltipContent": "tooltipContent"; "itemFormatter": "itemFormatter"; "chartType": "chartType"; "errorBarStyle": "errorBarStyle"; "value": "value"; "errorAmount": "errorAmount"; "endStyle": "endStyle"; "direction": "direction"; }, { "initialized": "initialized"; "renderingNg": "rendering"; "renderedNg": "rendered"; "visibilityChangePC": "visibilityChange"; }, never, never, false, never>;
}
declare var wjFlexChartBreakEvenMeta: IWjComponentMeta;
export { wjFlexChartBreakEvenMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.analytics.BreakEven} class.
 *
 * The <b>wj-flex-chart-break-even</b> component must be
 * contained in a {@link wijmo.angular2.chart.WjFlexChart} component.
 *
 * Use the <b>wj-flex-chart-break-even</b> component to add <b>BreakEven</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartBreakEven</b> component is derived from the <b>BreakEven</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartBreakEven extends wjcChartAnalytics.BreakEven implements OnInit, OnDestroy, AfterViewInit {
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartBreakEven, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartBreakEven, "wj-flex-chart-break-even", never, { "asyncBindings": "asyncBindings"; "wjProperty": "wjProperty"; "axisX": "axisX"; "axisY": "axisY"; "binding": "binding"; "bindingX": "bindingX"; "cssClass": "cssClass"; "name": "name"; "style": "style"; "altStyle": "altStyle"; "symbolMarker": "symbolMarker"; "symbolSize": "symbolSize"; "symbolStyle": "symbolStyle"; "visibility": "visibility"; "itemsSource": "itemsSource"; "interpolateNulls": "interpolateNulls"; "tooltipContent": "tooltipContent"; "itemFormatter": "itemFormatter"; "fixedCost": "fixedCost"; "variableCost": "variableCost"; "salesPrice": "salesPrice"; "styles": "styles"; }, { "initialized": "initialized"; "renderingNg": "rendering"; "renderedNg": "rendered"; "visibilityChangePC": "visibilityChange"; }, never, never, false, never>;
}
export declare class WjChartAnalyticsModule {
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjChartAnalyticsModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<WjChartAnalyticsModule, [typeof WjFlexChartTrendLine, typeof WjFlexChartMovingAverage, typeof WjFlexChartYFunctionSeries, typeof WjFlexChartParametricFunctionSeries, typeof WjFlexChartWaterfall, typeof WjFlexChartBoxWhisker, typeof WjFlexChartErrorBar, typeof WjFlexChartBreakEven], [typeof ɵngcc1.CommonModule], [typeof WjFlexChartTrendLine, typeof WjFlexChartMovingAverage, typeof WjFlexChartYFunctionSeries, typeof WjFlexChartParametricFunctionSeries, typeof WjFlexChartWaterfall, typeof WjFlexChartBoxWhisker, typeof WjFlexChartErrorBar, typeof WjFlexChartBreakEven]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<WjChartAnalyticsModule>;
}
