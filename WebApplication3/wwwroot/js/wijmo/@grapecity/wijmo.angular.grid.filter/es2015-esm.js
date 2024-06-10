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

import{WjDirective,_registerNgModule,softRefGridFilter}from"@grapecity/wijmo.angular.base";import*as mNg from"angular";import*as wjcGridFilter from"@grapecity/wijmo.grid.filter";var wjNg=mNg;const wijmoGridFilterName="wj.grid.filter";export const ngModuleName="wj.grid.filter";var wijmoGridFilter=_registerNgModule("wj.grid.filter");softRefGridFilter()&&wijmoGridFilter.directive("wjFlexGridFilter",[function(){return new WjFlexGridFilter}]);export class WjFlexGridFilter extends WjDirective{constructor(){super();this.require="^wjFlexGrid";this.template="<div />"}get _controlConstructor(){return wjcGridFilter.FlexGridFilter}}