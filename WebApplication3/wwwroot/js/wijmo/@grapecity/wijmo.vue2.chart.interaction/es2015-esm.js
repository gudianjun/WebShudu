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

import{VueApi,WjComponentBehavior}from"@grapecity/wijmo.vue2.base";import*as wjcChartInteraction from"@grapecity/wijmo.chart.interaction";class WjFlexChartRangeSelectorBehavior extends WjComponentBehavior{}WjFlexChartRangeSelectorBehavior.tag="wj-flex-chart-range-selector";WjFlexChartRangeSelectorBehavior.parentInCtor=!0;WjFlexChartRangeSelectorBehavior.props=["isVisible","min","max","orientation","seamless","minScale","maxScale"];WjFlexChartRangeSelectorBehavior.events=["initialized","rangeChanged"];WjFlexChartRangeSelectorBehavior.classCtor=function(){return wjcChartInteraction.RangeSelector};export var WjFlexChartRangeSelector=WjFlexChartRangeSelectorBehavior.register();function registerV3WjFlexChartRangeSelector(e){e.component(WjFlexChartRangeSelectorBehavior.tag,WjFlexChartRangeSelector)}class WjFlexChartGesturesBehavior extends WjComponentBehavior{}WjFlexChartGesturesBehavior.tag="wj-flex-chart-gestures";WjFlexChartGesturesBehavior.parentInCtor=!0;WjFlexChartGesturesBehavior.props=["mouseAction","interactiveAxes","enable","scaleX","scaleY","posX","posY"];WjFlexChartGesturesBehavior.events=["initialized"];WjFlexChartGesturesBehavior.classCtor=function(){return wjcChartInteraction.ChartGestures};export var WjFlexChartGestures=WjFlexChartGesturesBehavior.register();function registerV3WjFlexChartGestures(e){e.component(WjFlexChartGesturesBehavior.tag,WjFlexChartGestures)}export function registerChartInteraction(e){if(VueApi.isV3Plus){registerV3WjFlexChartRangeSelector(e);registerV3WjFlexChartGestures(e)}}