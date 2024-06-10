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

var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();import{ComponentBase}from"@grapecity/wijmo.react.base";import*as wjcGauge from"@grapecity/wijmo.gauge";var LinearGauge=function(e){__extends(LinearGauge,e);function LinearGauge(t){return e.call(this,t,wjcGauge.LinearGauge)||this}return LinearGauge}(ComponentBase);export{LinearGauge};var BulletGraph=function(e){__extends(BulletGraph,e);function BulletGraph(t){return e.call(this,t,wjcGauge.BulletGraph)||this}return BulletGraph}(ComponentBase);export{BulletGraph};var RadialGauge=function(e){__extends(RadialGauge,e);function RadialGauge(t){return e.call(this,t,wjcGauge.RadialGauge,{objectProps:["needleElement"]})||this}return RadialGauge}(ComponentBase);export{RadialGauge};var Range=function(e){__extends(Range,e);function Range(t){var n=e.call(this,t,wjcGauge.Range)||this;n._parentProp="ranges";return n}return Range}(ComponentBase);export{Range};