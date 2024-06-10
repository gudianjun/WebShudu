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

"use strict";var __importStar=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(null!=r)for(var t in r)Object.hasOwnProperty.call(r,t)&&(e[t]=r[t]);e.default=r;return e};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_angular_base_1=require("@grapecity/wijmo.angular.base"),wijmo_angular_grid_1=require("@grapecity/wijmo.angular.grid"),mNg=__importStar(require("angular")),wjcOlap=__importStar(require("@grapecity/wijmo.olap"));var wjNg=mNg;const wijmoOlapName="wj.olap";exports.ngModuleName="wj.olap";var wijmoOlap=wijmo_angular_base_1._registerNgModule("wj.olap");if(wijmo_angular_base_1.softRefOlap()&&wijmo_angular_base_1.softRefOlap().PivotGrid){wijmoOlap.directive("wjPivotGrid",["$compile","$interpolate",function(r,e){return new WjPivotGrid(r,e)}]);wijmoOlap.directive("wjPivotChart",[function(){return new WjPivotChart}]);wijmoOlap.directive("wjPivotPanel",[function(){return new WjPivotPanel}]);wijmoOlap.directive("wjSlicer",[function(){return new WjSlicer}])}class WjPivotGrid extends wijmo_angular_grid_1.WjFlexGrid{constructor(r,e){super(r,e)}get _controlConstructor(){return wjcOlap.PivotGrid}}exports.WjPivotGrid=WjPivotGrid;class WjPivotChart extends wijmo_angular_base_1.WjDirective{get _controlConstructor(){return wjcOlap.PivotChart}}exports.WjPivotChart=WjPivotChart;class WjPivotPanel extends wijmo_angular_base_1.WjDirective{constructor(){super();this.transclude=!0;this.template="<div ng-transclude />"}get _controlConstructor(){return wjcOlap.PivotPanel}}exports.WjPivotPanel=WjPivotPanel;class WjSlicer extends wijmo_angular_base_1.WjDirective{get _controlConstructor(){return wjcOlap.Slicer}}exports.WjSlicer=WjSlicer;