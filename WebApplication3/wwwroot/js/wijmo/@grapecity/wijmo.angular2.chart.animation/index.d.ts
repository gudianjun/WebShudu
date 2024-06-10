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
* {@module wijmo.angular2.chart.animation}
* Contains Angular 2 components for the <b>wijmo.chart.animation</b> module.
*
* <b>wijmo.angular2.chart.animation</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjAnimation from 'wijmo/wijmo.angular2.chart.animation';
* import * as wjChart from 'wijmo/wijmo.angular2.chart';
* &nbsp;
* &#64;Component({
*     directives: [wjChart.WjFlexChart, wjAnimation.WjFlexChartAnimation, wjChart.WjFlexChartSeries],
*     template: `
*       &lt;wj-flex-chart [itemsSource]="data" [bindingX]="'x'"&gt;
*           &lt;wj-flex-chart-animation [animationMode]="'Point'"&gt;&lt;/wj-flex-chart-animation&gt;
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
import * as wjcChartAnimation from '@grapecity/wijmo.chart.animation';
declare var wjFlexChartAnimationMeta: IWjComponentMeta;
export { wjFlexChartAnimationMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.animation.ChartAnimation} class.
 *
 * The <b>wj-flex-chart-animation</b> component must be
 * contained in one of the following components:
 * {@link wijmo.angular2.chart.WjFlexChart}
 * , {@link wijmo.angular2.chart.WjFlexPie}
 * , {@link wijmo.angular2.chart.finance.WjFinancialChart}
 *  or {@link wijmo.angular2.chart.radar.WjFlexRadar}.
 *
 * Use the <b>wj-flex-chart-animation</b> component to add <b>ChartAnimation</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartAnimation</b> component is derived from the <b>ChartAnimation</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartAnimation extends wjcChartAnimation.ChartAnimation implements OnInit, OnDestroy, AfterViewInit {
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartAnimation, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartAnimation, "wj-flex-chart-animation", never, { "wjProperty": "wjProperty"; "animationMode": "animationMode"; "easing": "easing"; "duration": "duration"; "axisAnimation": "axisAnimation"; }, { "initialized": "initialized"; }, never, never, false, never>;
}
export declare class WjChartAnimationModule {
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjChartAnimationModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<WjChartAnimationModule, [typeof WjFlexChartAnimation], [typeof ɵngcc1.CommonModule], [typeof WjFlexChartAnimation]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<WjChartAnimationModule>;
}
