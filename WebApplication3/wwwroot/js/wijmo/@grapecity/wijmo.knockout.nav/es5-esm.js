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

var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();import{WjBinding}from"@grapecity/wijmo.knockout.base";import*as mKo from"knockout";import*as wjcNav from"@grapecity/wijmo.nav";var wjKo=mKo,wjTreeView=function(e){__extends(wjTreeView,e);function wjTreeView(){return null!==e&&e.apply(this,arguments)||this}wjTreeView.prototype._getControlConstructor=function(){return wjcNav.TreeView};return wjTreeView}(WjBinding);export{wjTreeView};wjKo.bindingHandlers.wjTreeView=new wjTreeView;