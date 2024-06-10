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
import * as wjcChartInteraction from '@grapecity/wijmo.chart.interaction';
export declare class WjcFlexChartRangeSelector extends HTMLElement {
    static wrappedClass: () => typeof wjcChartInteraction.RangeSelector;
    static parentInCtor: boolean;
    _wjBehaviour: WjComponentBehavior;
    constructor();
    static readonly observedAttributes: IPropsMeta;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
}
export declare class WjcFlexChartGestures extends HTMLElement {
    static wrappedClass: () => typeof wjcChartInteraction.ChartGestures;
    static parentInCtor: boolean;
    _wjBehaviour: WjComponentBehavior;
    constructor();
    static readonly observedAttributes: IPropsMeta;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
}
