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

var __extends=this&&this.__extends||function(){var extendStatics=function(r,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var t in e)e.hasOwnProperty(t)&&(r[t]=e[t])})(r,e)};return function(r,e){extendStatics(r,e);function __(){this.constructor=r}r.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}();import{WjDirective,_registerNgModule,softRefGridFilter}from"@grapecity/wijmo.angular.base";import*as mNg from"angular";import*as wjcGridFilter from"@grapecity/wijmo.grid.filter";var wjNg=mNg,wijmoGridFilterName="wj.grid.filter";export var ngModuleName=wijmoGridFilterName;var wijmoGridFilter=_registerNgModule(wijmoGridFilterName);softRefGridFilter()&&wijmoGridFilter.directive("wjFlexGridFilter",[function(){return new WjFlexGridFilter}]);var WjFlexGridFilter=function(r){__extends(WjFlexGridFilter,r);function WjFlexGridFilter(){var e=r.call(this)||this;e.require="^wjFlexGrid";e.template="<div />";return e}Object.defineProperty(WjFlexGridFilter.prototype,"_controlConstructor",{get:function(){return wjcGridFilter.FlexGridFilter},enumerable:!0,configurable:!0});return WjFlexGridFilter}(WjDirective);export{WjFlexGridFilter};