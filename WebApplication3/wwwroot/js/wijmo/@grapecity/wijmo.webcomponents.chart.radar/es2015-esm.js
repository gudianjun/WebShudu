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

import{WjComponentBehavior}from"@grapecity/wijmo.webcomponents.base";import*as wjcChartRadar from"@grapecity/wijmo.chart.radar";let _wj_ns_exists_7=!0;export class WjcFlexRadar extends wjcChartRadar.FlexRadar{constructor(){super(document.createElement("div"));this._wjBehaviour=WjComponentBehavior._attach(this)}static get observedAttributes(){return WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,a){this._wjBehaviour.lhAttributeChanged(e,t,a)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}}_wj_ns_exists_7&&WjComponentBehavior.register("wjc-flex-radar",WjcFlexRadar);export class WjcFlexRadarAxis extends HTMLElement{constructor(){super();this._wjBehaviour=WjComponentBehavior._attach(this)}static get observedAttributes(){return WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,a){this._wjBehaviour.lhAttributeChanged(e,t,a)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}}WjcFlexRadarAxis.wrappedClass=()=>wjcChartRadar.FlexRadarAxis;WjcFlexRadarAxis.parentProp="axes";_wj_ns_exists_7&&WjComponentBehavior.register("wjc-flex-radar-axis",WjcFlexRadarAxis);export class WjcFlexRadarSeries extends HTMLElement{constructor(){super();this._wjBehaviour=WjComponentBehavior._attach(this)}static get observedAttributes(){return WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,a){this._wjBehaviour.lhAttributeChanged(e,t,a)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}}WjcFlexRadarSeries.wrappedClass=()=>wjcChartRadar.FlexRadarSeries;WjcFlexRadarSeries.parentProp="series";WjcFlexRadarSeries.siblingId="series";_wj_ns_exists_7&&WjComponentBehavior.register("wjc-flex-radar-series",WjcFlexRadarSeries);