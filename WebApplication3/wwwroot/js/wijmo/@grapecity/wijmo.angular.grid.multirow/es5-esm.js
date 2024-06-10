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

var __extends=this&&this.__extends||function(){var extendStatics=function(r,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var o in t)t.hasOwnProperty(o)&&(r[o]=t[o])})(r,t)};return function(r,t){extendStatics(r,t);function __(){this.constructor=r}r.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();import{_registerNgModule,softRefGridMultirow}from"@grapecity/wijmo.angular.base";import{WjFlexGrid}from"@grapecity/wijmo.angular.grid";import*as mNg from"angular";import*as wjcGridMultirow from"@grapecity/wijmo.grid.multirow";var wjNg=mNg,wijmoGridMultirowName="wj.grid.multirow";export var ngModuleName=wijmoGridMultirowName;var wijmoGridMultirow=_registerNgModule(wijmoGridMultirowName);softRefGridMultirow()&&wijmoGridMultirow.directive("wjMultiRow",["$compile","$interpolate",function(r,t){return new WjMultiRow(r,t)}]);var WjMultiRow=function(r){__extends(WjMultiRow,r);function WjMultiRow(t,o){return r.call(this,t,o)||this}Object.defineProperty(WjMultiRow.prototype,"_controlConstructor",{get:function(){return wjcGridMultirow.MultiRow},enumerable:!0,configurable:!0});return WjMultiRow}(WjFlexGrid);export{WjMultiRow};