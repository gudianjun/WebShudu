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

import{WjComponentBehavior}from"@grapecity/wijmo.webcomponents.base";import*as wjcChartFinance from"@grapecity/wijmo.chart.finance";let _wj_ns_exists_4=!0;export class WjcFinancialChart extends wjcChartFinance.FinancialChart{constructor(){super(document.createElement("div"));this._wjBehaviour=WjComponentBehavior._attach(this)}static get observedAttributes(){return WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,i){this._wjBehaviour.lhAttributeChanged(e,t,i)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}}_wj_ns_exists_4&&WjComponentBehavior.register("wjc-financial-chart",WjcFinancialChart);export class WjcFinancialChartSeries extends HTMLElement{constructor(){super();this._wjBehaviour=WjComponentBehavior._attach(this)}static get observedAttributes(){return WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,i){this._wjBehaviour.lhAttributeChanged(e,t,i)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}}WjcFinancialChartSeries.wrappedClass=()=>wjcChartFinance.FinancialSeries;WjcFinancialChartSeries.parentProp="series";WjcFinancialChartSeries.siblingId="series";_wj_ns_exists_4&&WjComponentBehavior.register("wjc-financial-chart-series",WjcFinancialChartSeries);