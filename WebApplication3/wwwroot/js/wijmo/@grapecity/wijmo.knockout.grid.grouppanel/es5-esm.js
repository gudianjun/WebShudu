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

var __extends=this&&this.__extends||function(){var extendStatics=function(o,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,n){o.__proto__=n}||function(o,n){for(var r in n)n.hasOwnProperty(r)&&(o[r]=n[r])})(o,n)};return function(o,n){extendStatics(o,n);function __(){this.constructor=o}o.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}();import{WjBinding}from"@grapecity/wijmo.knockout.base";import*as mKo from"knockout";import*as wjcGroup from"@grapecity/wijmo.grid.grouppanel";var wjKo=mKo,wjGroupPanel=function(o){__extends(wjGroupPanel,o);function wjGroupPanel(){return null!==o&&o.apply(this,arguments)||this}wjGroupPanel.prototype._getControlConstructor=function(){return wjcGroup.GroupPanel};return wjGroupPanel}(WjBinding);export{wjGroupPanel};wjKo.bindingHandlers.wjGroupPanel=new wjGroupPanel;