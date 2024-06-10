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

import{WjComponentBehavior}from"@grapecity/wijmo.webcomponents.base";import*as wjcGridSheet from"@grapecity/wijmo.grid.sheet";let _wj_ns_exists_14=!0;export class WjcFlexSheet extends wjcGridSheet.FlexSheet{constructor(){super(document.createElement("div"));this._wjBehaviour=WjComponentBehavior._attach(this)}static get observedAttributes(){return WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,r){this._wjBehaviour.lhAttributeChanged(e,t,r)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}}if(_wj_ns_exists_14){WjComponentBehavior.register("",wjcGridSheet._TabHolder);WjComponentBehavior.register("",wjcGridSheet._ContextMenu);WjComponentBehavior.register("",wjcGridSheet._SheetContextMenu);WjComponentBehavior.register("",wjcGridSheet._SheetTabContextMenu);WjComponentBehavior.register("",wjcGridSheet.FlexSheetColumnFilterEditor);WjComponentBehavior.register("",wjcGridSheet.FlexSheetValueFilterEditor);WjComponentBehavior.register("",wjcGridSheet._SheetTabs);WjComponentBehavior.register("wjc-flex-sheet",WjcFlexSheet)}export class WjcSheet extends HTMLElement{constructor(){super();this._wjBehaviour=WjComponentBehavior._attach(this)}static get observedAttributes(){return WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,r){this._wjBehaviour.lhAttributeChanged(e,t,r)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}}WjcSheet.wrappedClass=()=>wjcGridSheet.Sheet;WjcSheet.parentProp="sheets";WjcSheet.parentInCtor=!0;_wj_ns_exists_14&&WjComponentBehavior.register("wjc-sheet",WjcSheet);