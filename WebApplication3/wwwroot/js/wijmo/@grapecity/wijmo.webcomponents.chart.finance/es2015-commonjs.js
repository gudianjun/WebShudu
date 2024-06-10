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

"use strict";var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_webcomponents_base_1=require("@grapecity/wijmo.webcomponents.base"),wjcChartFinance=__importStar(require("@grapecity/wijmo.chart.finance"));let _wj_ns_exists_4=!0;class WjcFinancialChart extends wjcChartFinance.FinancialChart{constructor(){super(document.createElement("div"));this._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(this)}static get observedAttributes(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,i){this._wjBehaviour.lhAttributeChanged(e,t,i)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}}exports.WjcFinancialChart=WjcFinancialChart;_wj_ns_exists_4&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-financial-chart",WjcFinancialChart);class WjcFinancialChartSeries extends HTMLElement{constructor(){super();this._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(this)}static get observedAttributes(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,i){this._wjBehaviour.lhAttributeChanged(e,t,i)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}}WjcFinancialChartSeries.wrappedClass=()=>wjcChartFinance.FinancialSeries;WjcFinancialChartSeries.parentProp="series";WjcFinancialChartSeries.siblingId="series";exports.WjcFinancialChartSeries=WjcFinancialChartSeries;_wj_ns_exists_4&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-financial-chart-series",WjcFinancialChartSeries);