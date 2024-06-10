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

import{WjDirective,_registerNgModule,softRefOlap}from"@grapecity/wijmo.angular.base";import{WjFlexGrid}from"@grapecity/wijmo.angular.grid";import*as mNg from"angular";import*as wjcOlap from"@grapecity/wijmo.olap";var wjNg=mNg;const wijmoOlapName="wj.olap";export const ngModuleName="wj.olap";var wijmoOlap=_registerNgModule("wj.olap");if(softRefOlap()&&softRefOlap().PivotGrid){wijmoOlap.directive("wjPivotGrid",["$compile","$interpolate",function(t,r){return new WjPivotGrid(t,r)}]);wijmoOlap.directive("wjPivotChart",[function(){return new WjPivotChart}]);wijmoOlap.directive("wjPivotPanel",[function(){return new WjPivotPanel}]);wijmoOlap.directive("wjSlicer",[function(){return new WjSlicer}])}export class WjPivotGrid extends WjFlexGrid{constructor(t,r){super(t,r)}get _controlConstructor(){return wjcOlap.PivotGrid}}export class WjPivotChart extends WjDirective{get _controlConstructor(){return wjcOlap.PivotChart}}export class WjPivotPanel extends WjDirective{constructor(){super();this.transclude=!0;this.template="<div ng-transclude />"}get _controlConstructor(){return wjcOlap.PivotPanel}}export class WjSlicer extends WjDirective{get _controlConstructor(){return wjcOlap.Slicer}}