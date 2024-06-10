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

"use strict";var __importStar=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(null!=r)for(var s in r)Object.hasOwnProperty.call(r,s)&&(e[s]=r[s]);e.default=r;return e};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_react_base_1=require("@grapecity/wijmo.react.base"),wjcGridTransposed=__importStar(require("@grapecity/wijmo.grid.transposed"));class TransposedGrid extends wijmo_react_base_1.ComponentBase{constructor(r){super(r,wjcGridTransposed.TransposedGrid,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold","columnGroups","rowGroups"]})}}exports.TransposedGrid=TransposedGrid;class TransposedGridRow extends wijmo_react_base_1.ComponentBase{constructor(r){super(r,wjcGridTransposed.TransposedGridRow,{objectProps:["dataMap","cellTemplate","editor"]});this._parentProp="_rowInfo"}_initParent(){var r=this.parent.control;if(r.autoGenerateRows){r.autoGenerateRows=!1;r._rowInfo.clear()}super._initParent()}}exports.TransposedGridRow=TransposedGridRow;