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

var __extends=this&&this.__extends||function(){var extendStatics=function(r,o){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var t in o)o.hasOwnProperty(t)&&(r[t]=o[t])})(r,o)};return function(r,o){extendStatics(r,o);function __(){this.constructor=r}r.prototype=null===o?Object.create(o):(__.prototype=o.prototype,new __)}}();import{ComponentBase}from"@grapecity/wijmo.react.base";import*as wjcGridTransposed from"@grapecity/wijmo.grid.transposed";var TransposedGrid=function(r){__extends(TransposedGrid,r);function TransposedGrid(o){return r.call(this,o,wjcGridTransposed.TransposedGrid,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold","columnGroups","rowGroups"]})||this}return TransposedGrid}(ComponentBase);export{TransposedGrid};var TransposedGridRow=function(r){__extends(TransposedGridRow,r);function TransposedGridRow(o){var t=r.call(this,o,wjcGridTransposed.TransposedGridRow,{objectProps:["dataMap","cellTemplate","editor"]})||this;t._parentProp="_rowInfo";return t}TransposedGridRow.prototype._initParent=function(){var o=this.parent.control;if(o.autoGenerateRows){o.autoGenerateRows=!1;o._rowInfo.clear()}r.prototype._initParent.call(this)};return TransposedGridRow}(ComponentBase);export{TransposedGridRow};