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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,r){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var i in r)r.hasOwnProperty(i)&&(e[i]=r[i])})(e,r)};return function(e,r){extendStatics(e,r);function __(){this.constructor=e}e.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)}}(),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.default=e;return r};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_vue2_base_1=require("@grapecity/wijmo.vue2.base"),wjcGridSearch=__importStar(require("@grapecity/wijmo.grid.search")),WjFlexGridSearchBehavior=function(e){__extends(WjFlexGridSearchBehavior,e);function WjFlexGridSearchBehavior(){return null!==e&&e.apply(this,arguments)||this}WjFlexGridSearchBehavior.tag="wj-flex-grid-search";WjFlexGridSearchBehavior.props=["isDisabled","tabOrder","text","delay","searchAllColumns","placeholder","cssMatch","grid"];WjFlexGridSearchBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput"];WjFlexGridSearchBehavior.classCtor=function(){return wjcGridSearch.FlexGridSearch};return WjFlexGridSearchBehavior}(wijmo_vue2_base_1.WjComponentBehavior);exports.WjFlexGridSearch=WjFlexGridSearchBehavior.register();function registerV3WjFlexGridSearch(e){e.component(WjFlexGridSearchBehavior.tag,exports.WjFlexGridSearch)}function registerGridSearch(e){wijmo_vue2_base_1.VueApi.isV3Plus&&registerV3WjFlexGridSearch(e)}exports.registerGridSearch=registerGridSearch;