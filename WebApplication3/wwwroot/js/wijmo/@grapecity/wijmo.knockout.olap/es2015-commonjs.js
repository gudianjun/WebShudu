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

"use strict";var __importStar=this&&this.__importStar||function(o){if(o&&o.__esModule)return o;var t={};if(null!=o)for(var r in o)Object.hasOwnProperty.call(o,r)&&(t[r]=o[r]);t.default=o;return t};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_knockout_base_1=require("@grapecity/wijmo.knockout.base"),wijmo_knockout_grid_1=require("@grapecity/wijmo.knockout.grid"),mKo=__importStar(require("knockout")),wjcOlap=__importStar(require("@grapecity/wijmo.olap"));var wjKo=mKo;class wjPivotGrid extends wijmo_knockout_grid_1.wjFlexGrid{_getControlConstructor(){return wjcOlap.PivotGrid}}exports.wjPivotGrid=wjPivotGrid;class wjPivotChart extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wjcOlap.PivotChart}}exports.wjPivotChart=wjPivotChart;class wjPivotPanel extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wjcOlap.PivotPanel}}exports.wjPivotPanel=wjPivotPanel;class wjSlicer extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wjcOlap.Slicer}}exports.wjSlicer=wjSlicer;wjKo.bindingHandlers.wjPivotGrid=new wjPivotGrid;wjKo.bindingHandlers.wjPivotChart=new wjPivotChart;wjKo.bindingHandlers.wjPivotPanel=new wjPivotPanel;wjKo.bindingHandlers.wjSlicer=new wjSlicer;