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

import{WjComponentBehavior}from"@grapecity/wijmo.webcomponents.base";import*as wjcChartAnimation from"@grapecity/wijmo.chart.animation";let _wj_ns_exists_2=!0;export class WjcFlexChartAnimation extends HTMLElement{constructor(){super();this._wjBehaviour=WjComponentBehavior._attach(this)}static get observedAttributes(){return WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(t,e,i){this._wjBehaviour.lhAttributeChanged(t,e,i)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}}WjcFlexChartAnimation.wrappedClass=()=>wjcChartAnimation.ChartAnimation;WjcFlexChartAnimation.parentInCtor=!0;_wj_ns_exists_2&&WjComponentBehavior.register("wjc-flex-chart-animation",WjcFlexChartAnimation);