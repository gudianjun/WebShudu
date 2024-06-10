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

"use strict";var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_react_base_1=require("@grapecity/wijmo.react.base"),wjcGridSheet=__importStar(require("@grapecity/wijmo.grid.sheet"));class FlexSheet extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcGridSheet.FlexSheet,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold","columnGroups"]})}}exports.FlexSheet=FlexSheet;class Sheet extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcGridSheet.Sheet,{objectProps:["itemsSource"]});this._parentProp="sheets";this._parentInCtor=!0}}exports.Sheet=Sheet;