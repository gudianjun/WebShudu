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

import{WjBinding}from"@grapecity/wijmo.knockout.base";import*as mKo from"knockout";import*as wjcChartInter from"@grapecity/wijmo.chart.interaction";var wjKo=mKo;export class wjFlexChartRangeSelector extends WjBinding{_getControlConstructor(){return wjcChartInter.RangeSelector}}export class wjFlexChartGestures extends WjBinding{_getControlConstructor(){return wjcChartInter.ChartGestures}}wjKo.bindingHandlers.wjFlexChartRangeSelector=new wjFlexChartRangeSelector;wjKo.bindingHandlers.wjFlexChartGestures=new wjFlexChartGestures;