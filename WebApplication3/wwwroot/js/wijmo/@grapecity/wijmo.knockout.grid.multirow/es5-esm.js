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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,o){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)o.hasOwnProperty(r)&&(t[r]=o[r])})(t,o)};return function(t,o){extendStatics(t,o);function __(){this.constructor=t}t.prototype=null===o?Object.create(o):(__.prototype=o.prototype,new __)}}();import{wjFlexGrid}from"@grapecity/wijmo.knockout.grid";import*as mKo from"knockout";import*as wjcMultirow from"@grapecity/wijmo.grid.multirow";var wjKo=mKo,wjMultiRow=function(t){__extends(wjMultiRow,t);function wjMultiRow(){return null!==t&&t.apply(this,arguments)||this}wjMultiRow.prototype._getControlConstructor=function(){return wjcMultirow.MultiRow};return wjMultiRow}(wjFlexGrid);export{wjMultiRow};wjKo.bindingHandlers.wjMultiRow=new wjMultiRow;