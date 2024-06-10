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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(r,o){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var t in o)o.hasOwnProperty(t)&&(r[t]=o[t])})(r,o)};return function(r,o){extendStatics(r,o);function __(){this.constructor=r}r.prototype=null===o?Object.create(o):(__.prototype=o.prototype,new __)}}(),__importStar=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var o={};if(null!=r)for(var t in r)Object.hasOwnProperty.call(r,t)&&(o[t]=r[t]);o.default=r;return o};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_knockout_base_1=require("@grapecity/wijmo.knockout.base"),mKo=__importStar(require("knockout")),wjcGroup=__importStar(require("@grapecity/wijmo.grid.grouppanel")),wjKo=mKo,wjGroupPanel=function(r){__extends(wjGroupPanel,r);function wjGroupPanel(){return null!==r&&r.apply(this,arguments)||this}wjGroupPanel.prototype._getControlConstructor=function(){return wjcGroup.GroupPanel};return wjGroupPanel}(wijmo_knockout_base_1.WjBinding);exports.wjGroupPanel=wjGroupPanel;wjKo.bindingHandlers.wjGroupPanel=new wjGroupPanel;