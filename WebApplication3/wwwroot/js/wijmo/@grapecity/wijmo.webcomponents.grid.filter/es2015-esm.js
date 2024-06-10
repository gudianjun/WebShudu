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

import{WjComponentBehavior}from"@grapecity/wijmo.webcomponents.base";import*as wjcGridFilter from"@grapecity/wijmo.grid.filter";let _wj_ns_exists_10=!0;export class WjcFlexGridFilter extends HTMLElement{constructor(){super();this._wjBehaviour=WjComponentBehavior._attach(this)}static get observedAttributes(){return WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,i){this._wjBehaviour.lhAttributeChanged(e,t,i)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}}WjcFlexGridFilter.wrappedClass=()=>wjcGridFilter.FlexGridFilter;WjcFlexGridFilter.parentInCtor=!0;if(_wj_ns_exists_10){WjComponentBehavior.register("wjc-flex-grid-filter",WjcFlexGridFilter);WjComponentBehavior.register("",wjcGridFilter.ColumnFilterEditor);WjComponentBehavior.register("",wjcGridFilter.ConditionFilterEditor);WjComponentBehavior.register("",wjcGridFilter.ValueFilterEditor)}