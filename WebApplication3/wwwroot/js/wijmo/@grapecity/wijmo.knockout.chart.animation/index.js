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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])})(t,n)};return function(t,n){extendStatics(t,n);function __(){this.constructor=t}t.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}(),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(n[r]=t[r]);n.default=t;return n};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_knockout_base_1=require("@grapecity/wijmo.knockout.base"),mKo=__importStar(require("knockout")),wjcChartAnim=__importStar(require("@grapecity/wijmo.chart.animation")),wjKo=mKo,wjFlexChartAnimation=function(t){__extends(wjFlexChartAnimation,t);function wjFlexChartAnimation(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartAnimation.prototype._getControlConstructor=function(){return wjcChartAnim.ChartAnimation};return wjFlexChartAnimation}(wijmo_knockout_base_1.WjBinding);exports.wjFlexChartAnimation=wjFlexChartAnimation;wjKo.bindingHandlers.wjFlexChartAnimation=new wjFlexChartAnimation;