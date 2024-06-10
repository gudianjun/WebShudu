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

import{_registerNgModule,softRefChartFinance}from"@grapecity/wijmo.angular.base";import{WjSeriesBase,WjFlexChartCore}from"@grapecity/wijmo.angular.chart";import*as mNg from"angular";import*as wjcChartFinance from"@grapecity/wijmo.chart.finance";var wjNg=mNg;const wijmoChartFinanceName="wj.chart.finance";export const ngModuleName="wj.chart.finance";var wijmoChartFinance=_registerNgModule("wj.chart.finance");if(softRefChartFinance()){wijmoChartFinance.directive("wjFinancialChart",[function(){return new WjFinancialChart}]);wijmoChartFinance.directive("wjFinancialChartSeries",[function(){return new WjFinancialChartSeries}])}export class WjFinancialChart extends WjFlexChartCore{get _controlConstructor(){return wjcChartFinance.FinancialChart}}export class WjFinancialChartSeries extends WjSeriesBase{constructor(){super();this.require="^wjFinancialChart";this.template='<div class="wjFinancialChartSeries" ng-transclude />'}get _controlConstructor(){return wjcChartFinance.FinancialSeries}}