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

var __extends=this&&this.__extends||function(){var extendStatics=function(e,r){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var i in r)r.hasOwnProperty(i)&&(e[i]=r[i])})(e,r)};return function(e,r){extendStatics(e,r);function __(){this.constructor=e}e.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)}}();import{VueApi,WjComponentBehavior}from"@grapecity/wijmo.vue2.base";import*as wjcGridFilter from"@grapecity/wijmo.grid.filter";var WjFlexGridFilterBehavior=function(e){__extends(WjFlexGridFilterBehavior,e);function WjFlexGridFilterBehavior(){return null!==e&&e.apply(this,arguments)||this}WjFlexGridFilterBehavior.tag="wj-flex-grid-filter";WjFlexGridFilterBehavior.parentInCtor=!0;WjFlexGridFilterBehavior.props=["showFilterIcons","showSortButtons","defaultFilterType","exclusiveValueSearch","filterColumns","reApplyFilterOnUpdate"];WjFlexGridFilterBehavior.events=["initialized","editingFilter","filterChanging","filterChanged","filterApplied"];WjFlexGridFilterBehavior.classCtor=function(){return wjcGridFilter.FlexGridFilter};return WjFlexGridFilterBehavior}(WjComponentBehavior);export var WjFlexGridFilter=WjFlexGridFilterBehavior.register();function registerV3WjFlexGridFilter(e){e.component(WjFlexGridFilterBehavior.tag,WjFlexGridFilter)}export function registerGridFilter(e){VueApi.isV3Plus&&registerV3WjFlexGridFilter(e)}