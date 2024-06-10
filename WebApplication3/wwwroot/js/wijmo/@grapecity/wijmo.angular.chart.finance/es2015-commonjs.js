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

"use strict";var __importStar=this&&this.__importStar||function(a){if(a&&a.__esModule)return a;var r={};if(null!=a)for(var e in a)Object.hasOwnProperty.call(a,e)&&(r[e]=a[e]);r.default=a;return r};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_angular_base_1=require("@grapecity/wijmo.angular.base"),wijmo_angular_chart_1=require("@grapecity/wijmo.angular.chart"),mNg=__importStar(require("angular")),wjcChartFinance=__importStar(require("@grapecity/wijmo.chart.finance"));var wjNg=mNg;const wijmoChartFinanceName="wj.chart.finance";exports.ngModuleName="wj.chart.finance";var wijmoChartFinance=wijmo_angular_base_1._registerNgModule("wj.chart.finance");if(wijmo_angular_base_1.softRefChartFinance()){wijmoChartFinance.directive("wjFinancialChart",[function(){return new WjFinancialChart}]);wijmoChartFinance.directive("wjFinancialChartSeries",[function(){return new WjFinancialChartSeries}])}class WjFinancialChart extends wijmo_angular_chart_1.WjFlexChartCore{get _controlConstructor(){return wjcChartFinance.FinancialChart}}exports.WjFinancialChart=WjFinancialChart;class WjFinancialChartSeries extends wijmo_angular_chart_1.WjSeriesBase{constructor(){super();this.require="^wjFinancialChart";this.template='<div class="wjFinancialChartSeries" ng-transclude />'}get _controlConstructor(){return wjcChartFinance.FinancialSeries}}exports.WjFinancialChartSeries=WjFinancialChartSeries;