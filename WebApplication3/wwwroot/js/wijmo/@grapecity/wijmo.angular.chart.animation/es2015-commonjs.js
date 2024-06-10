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

"use strict";var __importStar=this&&this.__importStar||function(a){if(a&&a.__esModule)return a;var t={};if(null!=a)for(var r in a)Object.hasOwnProperty.call(a,r)&&(t[r]=a[r]);t.default=a;return t};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_angular_base_1=require("@grapecity/wijmo.angular.base"),mNg=__importStar(require("angular")),wjcChartAnimation=__importStar(require("@grapecity/wijmo.chart.animation"));var wjNg=mNg;const wijmoChartAnimationName="wj.chart.animation";exports.ngModuleName="wj.chart.animation";var wijmoChartAnimation=wijmo_angular_base_1._registerNgModule("wj.chart.animation");wijmo_angular_base_1.softRefChartAnimation()&&wijmoChartAnimation.directive("wjFlexChartAnimation",[function(){return new WjFlexChartAnimation}]);class WjFlexChartAnimation extends wijmo_angular_base_1.WjDirective{constructor(){super();this.require=["?^wjFlexChart","?^wjFlexPie","?^wjSunburst","?^wjFinancialChart","?^wjFlexRadar"]}get _controlConstructor(){return wjcChartAnimation.ChartAnimation}}exports.WjFlexChartAnimation=WjFlexChartAnimation;