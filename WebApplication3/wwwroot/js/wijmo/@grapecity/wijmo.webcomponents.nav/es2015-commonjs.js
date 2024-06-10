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

"use strict";var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&(t[o]=e[o]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_webcomponents_base_1=require("@grapecity/wijmo.webcomponents.base"),wjcNav=__importStar(require("@grapecity/wijmo.nav"));let _wj_ns_exists_21=!0;class WjcTreeView extends wjcNav.TreeView{constructor(){super(document.createElement("div"));this._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(this)}static get observedAttributes(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}}exports.WjcTreeView=WjcTreeView;_wj_ns_exists_21&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-tree-view",WjcTreeView);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcNav.TabPanel);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcNav.Accordion);