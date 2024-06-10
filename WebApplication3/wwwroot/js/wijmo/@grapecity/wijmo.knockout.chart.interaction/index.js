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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_knockout_base_1=require("@grapecity/wijmo.knockout.base"),mKo=__importStar(require("knockout")),wjcChartInter=__importStar(require("@grapecity/wijmo.chart.interaction")),wjKo=mKo,wjFlexChartRangeSelector=function(e){__extends(wjFlexChartRangeSelector,e);function wjFlexChartRangeSelector(){return null!==e&&e.apply(this,arguments)||this}wjFlexChartRangeSelector.prototype._getControlConstructor=function(){return wjcChartInter.RangeSelector};return wjFlexChartRangeSelector}(wijmo_knockout_base_1.WjBinding);exports.wjFlexChartRangeSelector=wjFlexChartRangeSelector;var wjFlexChartGestures=function(e){__extends(wjFlexChartGestures,e);function wjFlexChartGestures(){return null!==e&&e.apply(this,arguments)||this}wjFlexChartGestures.prototype._getControlConstructor=function(){return wjcChartInter.ChartGestures};return wjFlexChartGestures}(wijmo_knockout_base_1.WjBinding);exports.wjFlexChartGestures=wjFlexChartGestures;wjKo.bindingHandlers.wjFlexChartRangeSelector=new wjFlexChartRangeSelector;wjKo.bindingHandlers.wjFlexChartGestures=new wjFlexChartGestures;