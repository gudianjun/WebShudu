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
import { WjComponentBehavior, IPropsMeta } from '@grapecity/wijmo.webcomponents.base';
import * as wjcChartFinance from '@grapecity/wijmo.chart.finance';
export declare class WjcFinancialChart extends wjcChartFinance.FinancialChart {
    _wjBehaviour: WjComponentBehavior;
    constructor();
    static readonly observedAttributes: IPropsMeta;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
    addEventListener(...args: any[]): void;
}
export declare class WjcFinancialChartSeries extends HTMLElement {
    static wrappedClass: () => typeof wjcChartFinance.FinancialSeries;
    static parentProp: string;
    static siblingId: string;
    _wjBehaviour: WjComponentBehavior;
    constructor();
    static readonly observedAttributes: IPropsMeta;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
}
