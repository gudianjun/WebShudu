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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,o){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)o.hasOwnProperty(r)&&(t[r]=o[r])})(t,o)};return function(t,o){extendStatics(t,o);function __(){this.constructor=t}t.prototype=null===o?Object.create(o):(__.prototype=o.prototype,new __)}}(),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var o={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.default=t;return o};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_knockout_grid_1=require("@grapecity/wijmo.knockout.grid"),mKo=__importStar(require("knockout")),wjcMultirow=__importStar(require("@grapecity/wijmo.grid.multirow")),wjKo=mKo,wjMultiRow=function(t){__extends(wjMultiRow,t);function wjMultiRow(){return null!==t&&t.apply(this,arguments)||this}wjMultiRow.prototype._getControlConstructor=function(){return wjcMultirow.MultiRow};return wjMultiRow}(wijmo_knockout_grid_1.wjFlexGrid);exports.wjMultiRow=wjMultiRow;wjKo.bindingHandlers.wjMultiRow=new wjMultiRow;