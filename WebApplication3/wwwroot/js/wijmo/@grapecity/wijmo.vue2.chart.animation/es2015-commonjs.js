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

"use strict";var __importStar=this&&this.__importStar||function(i){if(i&&i.__esModule)return i;var t={};if(null!=i)for(var e in i)Object.hasOwnProperty.call(i,e)&&(t[e]=i[e]);t.default=i;return t};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_vue2_base_1=require("@grapecity/wijmo.vue2.base"),wjcChartAnimation=__importStar(require("@grapecity/wijmo.chart.animation"));class WjFlexChartAnimationBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFlexChartAnimationBehavior.tag="wj-flex-chart-animation";WjFlexChartAnimationBehavior.parentInCtor=!0;WjFlexChartAnimationBehavior.props=["animationMode","easing","duration","axisAnimation"];WjFlexChartAnimationBehavior.events=["initialized"];WjFlexChartAnimationBehavior.classCtor=function(){return wjcChartAnimation.ChartAnimation};exports.WjFlexChartAnimation=WjFlexChartAnimationBehavior.register();function registerV3WjFlexChartAnimation(i){i.component(WjFlexChartAnimationBehavior.tag,exports.WjFlexChartAnimation)}function registerChartAnimation(i){wijmo_vue2_base_1.VueApi.isV3Plus&&registerV3WjFlexChartAnimation(i)}exports.registerChartAnimation=registerChartAnimation;