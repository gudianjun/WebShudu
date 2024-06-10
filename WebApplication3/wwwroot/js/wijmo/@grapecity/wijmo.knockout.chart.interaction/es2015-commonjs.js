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

"use strict";var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(r[t]=e[t]);r.default=e;return r};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_knockout_base_1=require("@grapecity/wijmo.knockout.base"),mKo=__importStar(require("knockout")),wjcChartInter=__importStar(require("@grapecity/wijmo.chart.interaction"));var wjKo=mKo;class wjFlexChartRangeSelector extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wjcChartInter.RangeSelector}}exports.wjFlexChartRangeSelector=wjFlexChartRangeSelector;class wjFlexChartGestures extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wjcChartInter.ChartGestures}}exports.wjFlexChartGestures=wjFlexChartGestures;wjKo.bindingHandlers.wjFlexChartRangeSelector=new wjFlexChartRangeSelector;wjKo.bindingHandlers.wjFlexChartGestures=new wjFlexChartGestures;