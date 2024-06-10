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

import{_registerNgModule,softRefGridMultirow}from"@grapecity/wijmo.angular.base";import{WjFlexGrid}from"@grapecity/wijmo.angular.grid";import*as mNg from"angular";import*as wjcGridMultirow from"@grapecity/wijmo.grid.multirow";var wjNg=mNg;const wijmoGridMultirowName="wj.grid.multirow";export const ngModuleName="wj.grid.multirow";var wijmoGridMultirow=_registerNgModule("wj.grid.multirow");softRefGridMultirow()&&wijmoGridMultirow.directive("wjMultiRow",["$compile","$interpolate",function(r,i){return new WjMultiRow(r,i)}]);export class WjMultiRow extends WjFlexGrid{constructor(r,i){super(r,i)}get _controlConstructor(){return wjcGridMultirow.MultiRow}}