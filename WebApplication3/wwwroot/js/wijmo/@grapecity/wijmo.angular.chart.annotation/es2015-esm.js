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

import{WjDirective,WjLink,_registerNgModule,softRefChartAnnotation}from"@grapecity/wijmo.angular.base";import*as mNg from"angular";import*as wjcChartAnnotation from"@grapecity/wijmo.chart.annotation";var wjNg=mNg;const wijmoChartAnnotationName="wj.chart.annotation";export const ngModuleName="wj.chart.annotation";var wijmoChartAnnotation=_registerNgModule("wj.chart.annotation");if(softRefChartAnnotation()){wijmoChartAnnotation.directive("wjFlexChartAnnotationLayer",[function(){return new WjFlexChartAnnotationLayer}]);wijmoChartAnnotation.directive("wjFlexChartAnnotation",[function(){return new WjFlexChartAnnotation}])}export class WjFlexChartAnnotationLayer extends WjDirective{constructor(){super();this.require=["?^wjFlexChart","?^wjFinancialChart"];this.template='<div class="wjFlexChartAnnotationLayer" ng-transclude />';this.transclude=!0}get _controlConstructor(){return wjcChartAnnotation.AnnotationLayer}}export class WjFlexChartAnnotation extends WjDirective{constructor(){super();this.require="^wjFlexChartAnnotationLayer";this.template='<div class="wjFlexChartAnnotation" ng-transclude />';this.transclude=!0}_createLink(){return new WjFlexChartAnnotationLink}_getMetaDataId(){return"FlexChartAnnotation"}}export class WjFlexChartAnnotationLink extends WjLink{_initControl(){return new wjcChartAnnotation[this.scope.type]}}