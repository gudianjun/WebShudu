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

import{WjComponentBehavior}from"@grapecity/wijmo.webcomponents.base";import*as wjcGridSearch from"@grapecity/wijmo.grid.search";let _wj_ns_exists_12=!0;export class WjcFlexGridSearch extends wjcGridSearch.FlexGridSearch{constructor(){super(document.createElement("div"));this._wjBehaviour=WjComponentBehavior._attach(this)}static get observedAttributes(){return WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,r){this._wjBehaviour.lhAttributeChanged(e,t,r)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}}_wj_ns_exists_12&&WjComponentBehavior.register("wjc-flex-grid-search",WjcFlexGridSearch);