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

var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();import{ComponentBase}from"@grapecity/wijmo.react.base";import*as wjcGridSheet from"@grapecity/wijmo.grid.sheet";var FlexSheet=function(e){__extends(FlexSheet,e);function FlexSheet(t){return e.call(this,t,wjcGridSheet.FlexSheet,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold","columnGroups"]})||this}return FlexSheet}(ComponentBase);export{FlexSheet};var Sheet=function(e){__extends(Sheet,e);function Sheet(t){var r=e.call(this,t,wjcGridSheet.Sheet,{objectProps:["itemsSource"]})||this;r._parentProp="sheets";r._parentInCtor=!0;return r}return Sheet}(ComponentBase);export{Sheet};