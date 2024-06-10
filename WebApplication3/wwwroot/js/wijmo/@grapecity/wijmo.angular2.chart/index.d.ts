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
* {@module wijmo.angular2.chart}
* Contains Angular 2 components for the <b>wijmo.chart</b> module.
*
* <b>wijmo.angular2.chart</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjChart from 'wijmo/wijmo.angular2.chart';
* &nbsp;
* &#64;Component({
*     directives: [wjChart.WjFlexChart, wjChart.WjFlexChartSeries],
*     template: `
*       &lt;wj-flex-chart [itemsSource]="data" [bindingX]="'x'"&gt;
*           &lt;wj-flex-chart-series [binding]="'y'"&gt;&lt;/wj-flex-chart-series&gt;
*       &lt;/wj-flex-chart&gt;`,
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
import * as wjcChart from '@grapecity/wijmo.chart';
declare var wjFlexChartMeta: IWjComponentMeta;
export { wjFlexChartMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.FlexChart} control.
 *
 * Use the <b>wj-flex-chart</b> component to add <b>FlexChart</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChart</b> component is derived from the <b>FlexChart</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-chart</b> component may contain the following child components:
 * {@link wijmo.angular2.chart.analytics.WjFlexChartTrendLine}
 * , {@link wijmo.angular2.chart.analytics.WjFlexChartMovingAverage}
 * , {@link wijmo.angular2.chart.analytics.WjFlexChartYFunctionSeries}
 * , {@link wijmo.angular2.chart.analytics.WjFlexChartParametricFunctionSeries}
 * , {@link wijmo.angular2.chart.analytics.WjFlexChartWaterfall}
 * , {@link wijmo.angular2.chart.analytics.WjFlexChartBoxWhisker}
 * , {@link wijmo.angular2.chart.analytics.WjFlexChartErrorBar}
 * , {@link wijmo.angular2.chart.analytics.WjFlexChartBreakEven}
 * , {@link wijmo.angular2.chart.animation.WjFlexChartAnimation}
 * , {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer}
 * , {@link wijmo.angular2.chart.interaction.WjFlexChartRangeSelector}
 * , {@link wijmo.angular2.chart.interaction.WjFlexChartGestures}
 * , {@link wijmo.angular2.chart.WjFlexChartAxis}
 * , {@link wijmo.angular2.chart.WjFlexChartLegend}
 * , {@link wijmo.angular2.chart.WjFlexChartDataLabel}
 * , {@link wijmo.angular2.chart.WjFlexChartSeries}
 * , {@link wijmo.angular2.chart.WjFlexChartLineMarker}
 *  and {@link wijmo.angular2.chart.WjFlexChartPlotArea}.
*/
export declare class WjFlexChart extends wjcChart.FlexChart implements OnInit, OnDestroy, AfterViewInit {
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChart, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChart, "wj-flex-chart", never, { "asyncBindings": "asyncBindings"; "wjModelProperty": "wjModelProperty"; "renderEngine": "renderEngine"; "isDisabled": "isDisabled"; "tabOrder": "tabOrder"; "binding": "binding"; "footer": "footer"; "header": "header"; "selectionMode": "selectionMode"; "palette": "palette"; "plotMargin": "plotMargin"; "footerStyle": "footerStyle"; "headerStyle": "headerStyle"; "tooltipContent": "tooltipContent"; "itemsSource": "itemsSource"; "bindingX": "bindingX"; "interpolateNulls": "interpolateNulls"; "legendToggle": "legendToggle"; "symbolSize": "symbolSize"; "options": "options"; "selection": "selection"; "itemFormatter": "itemFormatter"; "labelContent": "labelContent"; "chartType": "chartType"; "rotated": "rotated"; "stacking": "stacking"; }, { "initialized": "initialized"; "gotFocusNg": "gotFocus"; "lostFocusNg": "lostFocus"; "refreshingNg": "refreshing"; "refreshedNg": "refreshed"; "invalidInputNg": "invalidInput"; "renderingNg": "rendering"; "renderedNg": "rendered"; "selectionChangedNg": "selectionChanged"; "selectionChangePC": "selectionChange"; "itemsSourceChangingNg": "itemsSourceChanging"; "itemsSourceChangedNg": "itemsSourceChanged"; "seriesVisibilityChangedNg": "seriesVisibilityChanged"; }, never, ["*"], false, never>;
}
declare var wjFlexPieMeta: IWjComponentMeta;
export { wjFlexPieMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.FlexPie} control.
 *
 * Use the <b>wj-flex-pie</b> component to add <b>FlexPie</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexPie</b> component is derived from the <b>FlexPie</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-pie</b> component may contain the following child components:
 * {@link wijmo.angular2.chart.animation.WjFlexChartAnimation}
 * , {@link wijmo.angular2.chart.WjFlexChartLegend}
 *  and {@link wijmo.angular2.chart.WjFlexPieDataLabel}.
*/
export declare class WjFlexPie extends wjcChart.FlexPie implements OnInit, OnDestroy, AfterViewInit {
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexPie, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexPie, "wj-flex-pie", never, { "wjModelProperty": "wjModelProperty"; "isDisabled": "isDisabled"; "tabOrder": "tabOrder"; "binding": "binding"; "footer": "footer"; "header": "header"; "selectionMode": "selectionMode"; "palette": "palette"; "plotMargin": "plotMargin"; "footerStyle": "footerStyle"; "headerStyle": "headerStyle"; "tooltipContent": "tooltipContent"; "itemsSource": "itemsSource"; "bindingName": "bindingName"; "innerRadius": "innerRadius"; "isAnimated": "isAnimated"; "offset": "offset"; "reversed": "reversed"; "startAngle": "startAngle"; "selectedIndex": "selectedIndex"; "selectedItemPosition": "selectedItemPosition"; "selectedItemOffset": "selectedItemOffset"; "itemFormatter": "itemFormatter"; "labelContent": "labelContent"; "titles": "titles"; "chartsPerLine": "chartsPerLine"; "innerText": "innerText"; "innerTextStyle": "innerTextStyle"; }, { "initialized": "initialized"; "gotFocusNg": "gotFocus"; "lostFocusNg": "lostFocus"; "refreshingNg": "refreshing"; "refreshedNg": "refreshed"; "invalidInputNg": "invalidInput"; "renderingNg": "rendering"; "renderedNg": "rendered"; "selectionChangedNg": "selectionChanged"; "itemsSourceChangingNg": "itemsSourceChanging"; "itemsSourceChangedNg": "itemsSourceChanged"; }, never, ["*"], false, never>;
}
declare var wjFlexChartAxisMeta: IWjComponentMeta;
export { wjFlexChartAxisMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.Axis} class.
 *
 * The <b>wj-flex-chart-axis</b> component must be
 * contained in one of the following components:
 * {@link wijmo.angular2.chart.WjFlexChart}
 * , {@link wijmo.angular2.chart.WjFlexChartSeries}
 * , {@link wijmo.angular2.chart.finance.WjFinancialChart}
 *  or {@link wijmo.angular2.chart.finance.WjFinancialChartSeries}.
 *
 * Use the <b>wj-flex-chart-axis</b> component to add <b>Axis</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartAxis</b> component is derived from the <b>Axis</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartAxis extends wjcChart.Axis implements OnInit, OnDestroy, AfterViewInit {
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartAxis, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartAxis, "wj-flex-chart-axis", never, { "wjProperty": "wjProperty"; "axisLine": "axisLine"; "format": "format"; "labels": "labels"; "majorGrid": "majorGrid"; "majorTickMarks": "majorTickMarks"; "majorUnit": "majorUnit"; "max": "max"; "min": "min"; "position": "position"; "reversed": "reversed"; "title": "title"; "labelAngle": "labelAngle"; "minorGrid": "minorGrid"; "minorTickMarks": "minorTickMarks"; "minorUnit": "minorUnit"; "origin": "origin"; "logBase": "logBase"; "plotArea": "plotArea"; "labelAlign": "labelAlign"; "name": "name"; "overlappingLabels": "overlappingLabels"; "labelPadding": "labelPadding"; "itemFormatter": "itemFormatter"; "itemsSource": "itemsSource"; "binding": "binding"; "labelMin": "labelMin"; "labelMax": "labelMax"; "groupsOptions": "groupsOptions"; }, { "initialized": "initialized"; "rangeChangedNg": "rangeChanged"; }, never, never, false, never>;
}
declare var wjFlexChartLegendMeta: IWjComponentMeta;
export { wjFlexChartLegendMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.Legend} class.
 *
 * The <b>wj-flex-chart-legend</b> component must be
 * contained in one of the following components:
 * {@link wijmo.angular2.chart.WjFlexChart}
 * , {@link wijmo.angular2.chart.WjFlexPie}
 * , {@link wijmo.angular2.chart.finance.WjFinancialChart}
 * , {@link wijmo.angular2.chart.radar.WjFlexRadar}
 * , {@link wijmo.angular2.chart.hierarchical.WjSunburst}
 *  or {@link wijmo.angular2.chart.map.WjFlexMap}.
 *
 * Use the <b>wj-flex-chart-legend</b> component to add <b>Legend</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartLegend</b> component is derived from the <b>Legend</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartLegend extends wjcChart.Legend implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'legend'.
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartLegend, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartLegend, "wj-flex-chart-legend", never, { "wjProperty": "wjProperty"; "orientation": "orientation"; "position": "position"; "title": "title"; "titleAlign": "titleAlign"; "maxSize": "maxSize"; "scrollbar": "scrollbar"; }, { "initialized": "initialized"; }, never, never, false, never>;
}
declare var wjFlexChartDataLabelMeta: IWjComponentMeta;
export { wjFlexChartDataLabelMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.DataLabel} class.
 *
 * The <b>wj-flex-chart-data-label</b> component must be
 * contained in a {@link wijmo.angular2.chart.WjFlexChart} component.
 *
 * Use the <b>wj-flex-chart-data-label</b> component to add <b>DataLabel</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartDataLabel</b> component is derived from the <b>DataLabel</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartDataLabel extends wjcChart.DataLabel implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'dataLabel'.
     */
    wjProperty: string;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>rendering</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>rendering</b> Wijmo event name.
     */
    renderingNg: EventEmitter<any>;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartDataLabel, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartDataLabel, "wj-flex-chart-data-label", never, { "wjProperty": "wjProperty"; "content": "content"; "border": "border"; "offset": "offset"; "connectingLine": "connectingLine"; "position": "position"; }, { "initialized": "initialized"; "renderingNg": "rendering"; }, never, never, false, never>;
}
declare var wjFlexPieDataLabelMeta: IWjComponentMeta;
export { wjFlexPieDataLabelMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.PieDataLabel} class.
 *
 * The <b>wj-flex-pie-data-label</b> component must be
 * contained in a {@link wijmo.angular2.chart.WjFlexPie} component.
 *
 * Use the <b>wj-flex-pie-data-label</b> component to add <b>PieDataLabel</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexPieDataLabel</b> component is derived from the <b>PieDataLabel</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexPieDataLabel extends wjcChart.PieDataLabel implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'dataLabel'.
     */
    wjProperty: string;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>rendering</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>rendering</b> Wijmo event name.
     */
    renderingNg: EventEmitter<any>;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexPieDataLabel, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexPieDataLabel, "wj-flex-pie-data-label", never, { "wjProperty": "wjProperty"; "content": "content"; "border": "border"; "offset": "offset"; "connectingLine": "connectingLine"; "position": "position"; }, { "initialized": "initialized"; "renderingNg": "rendering"; }, never, never, false, never>;
}
declare var wjFlexChartSeriesMeta: IWjComponentMeta;
export { wjFlexChartSeriesMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.Series} class.
 *
 * The <b>wj-flex-chart-series</b> component must be
 * contained in a {@link wijmo.angular2.chart.WjFlexChart} component.
 *
 * Use the <b>wj-flex-chart-series</b> component to add <b>Series</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartSeries</b> component is derived from the <b>Series</b> class and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-chart-series</b> component may contain a {@link wijmo.angular2.chart.WjFlexChartAxis} child component.
*/
export declare class WjFlexChartSeries extends wjcChart.Series implements OnInit, OnDestroy, AfterViewInit {
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartSeries, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartSeries, "wj-flex-chart-series", never, { "asyncBindings": "asyncBindings"; "wjProperty": "wjProperty"; "axisX": "axisX"; "axisY": "axisY"; "binding": "binding"; "bindingX": "bindingX"; "cssClass": "cssClass"; "name": "name"; "style": "style"; "altStyle": "altStyle"; "symbolMarker": "symbolMarker"; "symbolSize": "symbolSize"; "symbolStyle": "symbolStyle"; "visibility": "visibility"; "itemsSource": "itemsSource"; "interpolateNulls": "interpolateNulls"; "tooltipContent": "tooltipContent"; "itemFormatter": "itemFormatter"; "chartType": "chartType"; }, { "initialized": "initialized"; "renderingNg": "rendering"; "renderedNg": "rendered"; "visibilityChangePC": "visibilityChange"; }, never, ["*"], false, never>;
}
declare var wjFlexChartLineMarkerMeta: IWjComponentMeta;
export { wjFlexChartLineMarkerMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.LineMarker} class.
 *
 * The <b>wj-flex-line-marker</b> component must be
 * contained in one of the following components:
 * {@link wijmo.angular2.chart.WjFlexChart}
 *  or {@link wijmo.angular2.chart.finance.WjFinancialChart}.
 *
 * Use the <b>wj-flex-line-marker</b> component to add <b>LineMarker</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartLineMarker</b> component is derived from the <b>LineMarker</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartLineMarker extends wjcChart.LineMarker implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is ''.
     */
    wjProperty: string;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>positionChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>positionChanged</b> Wijmo event name.
     */
    positionChangedNg: EventEmitter<any>;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartLineMarker, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartLineMarker, "wj-flex-line-marker", never, { "wjProperty": "wjProperty"; "isVisible": "isVisible"; "seriesIndex": "seriesIndex"; "horizontalPosition": "horizontalPosition"; "content": "content"; "verticalPosition": "verticalPosition"; "alignment": "alignment"; "lines": "lines"; "interaction": "interaction"; "dragLines": "dragLines"; "dragThreshold": "dragThreshold"; "dragContent": "dragContent"; }, { "initialized": "initialized"; "positionChangedNg": "positionChanged"; }, never, never, false, never>;
}
declare var wjFlexChartDataPointMeta: IWjComponentMeta;
export { wjFlexChartDataPointMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.DataPoint} class.
 *
 * The <b>wj-flex-chart-data-point</b> component must be
 * contained in one of the following components:
 * {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationText}
 * , {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationEllipse}
 * , {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationRectangle}
 * , {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationLine}
 * , {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationPolygon}
 * , {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationCircle}
 * , {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationSquare}
 *  or {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationImage}.
 *
 * Use the <b>wj-flex-chart-data-point</b> component to add <b>DataPoint</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartDataPoint</b> component is derived from the <b>DataPoint</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartDataPoint extends wjcChart.DataPoint implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is ''.
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartDataPoint, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartDataPoint, "wj-flex-chart-data-point", never, { "wjProperty": "wjProperty"; "x": "x"; "y": "y"; }, { "initialized": "initialized"; }, never, never, false, never>;
}
declare var wjFlexChartPlotAreaMeta: IWjComponentMeta;
export { wjFlexChartPlotAreaMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.PlotArea} class.
 *
 * The <b>wj-flex-chart-plot-area</b> component must be
 * contained in one of the following components:
 * {@link wijmo.angular2.chart.WjFlexChart}
 *  or {@link wijmo.angular2.chart.finance.WjFinancialChart}.
 *
 * Use the <b>wj-flex-chart-plot-area</b> component to add <b>PlotArea</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartPlotArea</b> component is derived from the <b>PlotArea</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartPlotArea extends wjcChart.PlotArea implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'plotAreas'.
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartPlotArea, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartPlotArea, "wj-flex-chart-plot-area", never, { "wjProperty": "wjProperty"; "column": "column"; "height": "height"; "name": "name"; "row": "row"; "style": "style"; "width": "width"; }, { "initialized": "initialized"; }, never, never, false, never>;
}
export declare class WjChartModule {
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjChartModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<WjChartModule, [typeof WjFlexChart, typeof WjFlexPie, typeof WjFlexChartAxis, typeof WjFlexChartLegend, typeof WjFlexChartDataLabel, typeof WjFlexPieDataLabel, typeof WjFlexChartSeries, typeof WjFlexChartLineMarker, typeof WjFlexChartDataPoint, typeof WjFlexChartPlotArea], [typeof ɵngcc1.CommonModule], [typeof WjFlexChart, typeof WjFlexPie, typeof WjFlexChartAxis, typeof WjFlexChartLegend, typeof WjFlexChartDataLabel, typeof WjFlexPieDataLabel, typeof WjFlexChartSeries, typeof WjFlexChartLineMarker, typeof WjFlexChartDataPoint, typeof WjFlexChartPlotArea]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<WjChartModule>;
}
