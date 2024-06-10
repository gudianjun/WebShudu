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

import{WjDirective,_registerNgModule,softRefChartAnimation}from"@grapecity/wijmo.angular.base";import*as mNg from"angular";import*as wjcChartAnimation from"@grapecity/wijmo.chart.animation";var wjNg=mNg;const wijmoChartAnimationName="wj.chart.animation";export const ngModuleName="wj.chart.animation";var wijmoChartAnimation=_registerNgModule("wj.chart.animation");softRefChartAnimation()&&wijmoChartAnimation.directive("wjFlexChartAnimation",[function(){return new WjFlexChartAnimation}]);export class WjFlexChartAnimation extends WjDirective{constructor(){super();this.require=["?^wjFlexChart","?^wjFlexPie","?^wjSunburst","?^wjFinancialChart","?^wjFlexRadar"]}get _controlConstructor(){return wjcChartAnimation.ChartAnimation}}