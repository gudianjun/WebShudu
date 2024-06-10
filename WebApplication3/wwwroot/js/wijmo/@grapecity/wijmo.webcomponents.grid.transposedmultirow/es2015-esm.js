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

import{WjComponentBehavior}from"@grapecity/wijmo.webcomponents.base";import*as wjcGridTransposedmultirow from"@grapecity/wijmo.grid.transposedmultirow";let _wj_ns_exists_16=!0;export class WjcTransposedMultiRow extends wjcGridTransposedmultirow.TransposedMultiRow{constructor(){super(document.createElement("div"));this._wjBehaviour=WjComponentBehavior._attach(this)}static get observedAttributes(){return WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,s){this._wjBehaviour.lhAttributeChanged(e,t,s)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}}_wj_ns_exists_16&&WjComponentBehavior.register("wjc-transposed-multi-row",WjcTransposedMultiRow);