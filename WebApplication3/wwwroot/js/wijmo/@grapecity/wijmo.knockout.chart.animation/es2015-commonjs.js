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

"use strict";var __importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var r={};if(null!=t)for(var i in t)Object.hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.default=t;return r};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_knockout_base_1=require("@grapecity/wijmo.knockout.base"),mKo=__importStar(require("knockout")),wjcChartAnim=__importStar(require("@grapecity/wijmo.chart.animation"));var wjKo=mKo;class wjFlexChartAnimation extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wjcChartAnim.ChartAnimation}}exports.wjFlexChartAnimation=wjFlexChartAnimation;wjKo.bindingHandlers.wjFlexChartAnimation=new wjFlexChartAnimation;