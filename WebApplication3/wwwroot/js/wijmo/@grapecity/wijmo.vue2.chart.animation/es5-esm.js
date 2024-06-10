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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,i){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])})(t,i)};return function(t,i){extendStatics(t,i);function __(){this.constructor=t}t.prototype=null===i?Object.create(i):(__.prototype=i.prototype,new __)}}();import{VueApi,WjComponentBehavior}from"@grapecity/wijmo.vue2.base";import*as wjcChartAnimation from"@grapecity/wijmo.chart.animation";var WjFlexChartAnimationBehavior=function(t){__extends(WjFlexChartAnimationBehavior,t);function WjFlexChartAnimationBehavior(){return null!==t&&t.apply(this,arguments)||this}WjFlexChartAnimationBehavior.tag="wj-flex-chart-animation";WjFlexChartAnimationBehavior.parentInCtor=!0;WjFlexChartAnimationBehavior.props=["animationMode","easing","duration","axisAnimation"];WjFlexChartAnimationBehavior.events=["initialized"];WjFlexChartAnimationBehavior.classCtor=function(){return wjcChartAnimation.ChartAnimation};return WjFlexChartAnimationBehavior}(WjComponentBehavior);export var WjFlexChartAnimation=WjFlexChartAnimationBehavior.register();function registerV3WjFlexChartAnimation(t){t.component(WjFlexChartAnimationBehavior.tag,WjFlexChartAnimation)}export function registerChartAnimation(t){VueApi.isV3Plus&&registerV3WjFlexChartAnimation(t)}