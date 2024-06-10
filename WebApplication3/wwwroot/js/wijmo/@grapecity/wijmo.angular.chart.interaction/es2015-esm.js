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

import{WjDirective,_registerNgModule,softRefChartInteraction}from"@grapecity/wijmo.angular.base";import*as mNg from"angular";import*as wjcChartInteraction from"@grapecity/wijmo.chart.interaction";var wjNg=mNg;const wijmoChartInteractionName="wj.chart.interaction";export const ngModuleName="wj.chart.interaction";var wijmoChartInteraction=_registerNgModule("wj.chart.interaction");if(softRefChartInteraction()){wijmoChartInteraction.directive("wjFlexChartRangeSelector",[function(){return new WjFlexChartRangeSelector}]);wijmoChartInteraction.directive("wjFlexChartGestures",[function(){return new WjFlexChartChartGestures}]);wijmoChartInteraction.directive("wjFlexChartChartGestures",[function(){return new WjFlexChartChartGestures}])}export class WjFlexChartRangeSelector extends WjDirective{constructor(){super();this.require=["?^wjFlexChart","?^wjFinancialChart"]}get _controlConstructor(){return wjcChartInteraction.RangeSelector}}export class WjFlexChartChartGestures extends WjDirective{constructor(){super();this.require=["?^wjFlexChart","?^wjFinancialChart"]}get _controlConstructor(){return wjcChartInteraction.ChartGestures}}