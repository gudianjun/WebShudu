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

"use strict";var __importStar=this&&this.__importStar||function(o){if(o&&o.__esModule)return o;var t={};if(null!=o)for(var e in o)Object.hasOwnProperty.call(o,e)&&(t[e]=o[e]);t.default=o;return t};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_knockout_base_1=require("@grapecity/wijmo.knockout.base"),wijmo_1=require("@grapecity/wijmo"),mKo=__importStar(require("knockout"));var wjKo=mKo;class wjTooltip extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wijmo_1.Tooltip}_createControl(o){return super._createControl(null)}_createWijmoContext(){return new WjTooltipContext(this)}}exports.wjTooltip=wjTooltip;class WjTooltipContext extends wijmo_knockout_base_1.WjContext{update(o,t,e,r,i){super.update(o,t,e,r,i);this._updateTooltip()}_updateTooltip(){this.control.setTooltip(this.element,wjKo.unwrap(this.valueAccessor()))}}exports.WjTooltipContext=WjTooltipContext;wjKo.bindingHandlers.wjTooltip=new wjTooltip;