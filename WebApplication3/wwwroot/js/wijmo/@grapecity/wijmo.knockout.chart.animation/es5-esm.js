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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])})(t,n)};return function(t,n){extendStatics(t,n);function __(){this.constructor=t}t.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}();import{WjBinding}from"@grapecity/wijmo.knockout.base";import*as mKo from"knockout";import*as wjcChartAnim from"@grapecity/wijmo.chart.animation";var wjKo=mKo,wjFlexChartAnimation=function(t){__extends(wjFlexChartAnimation,t);function wjFlexChartAnimation(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartAnimation.prototype._getControlConstructor=function(){return wjcChartAnim.ChartAnimation};return wjFlexChartAnimation}(WjBinding);export{wjFlexChartAnimation};wjKo.bindingHandlers.wjFlexChartAnimation=new wjFlexChartAnimation;