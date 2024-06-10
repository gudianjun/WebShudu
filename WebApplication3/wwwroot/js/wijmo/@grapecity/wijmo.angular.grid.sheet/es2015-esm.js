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

import{WjDirective,_registerNgModule,softRefGridSheet}from"@grapecity/wijmo.angular.base";import{WjFlexGrid}from"@grapecity/wijmo.angular.grid";import*as mNg from"angular";import*as wjcGridSheet from"@grapecity/wijmo.grid.sheet";var wjNg=mNg;const wijmoGridSheetName="wj.grid.sheet";export const ngModuleName="wj.grid.sheet";var wijmoGridSheet=_registerNgModule("wj.grid.sheet");if(softRefGridSheet()){wijmoGridSheet.directive("wjFlexSheet",["$compile","$interpolate",function(e,r){return new WjFlexSheet(e,r)}]);wijmoGridSheet.directive("wjSheet",[function(){return new WjSheet}])}class WjFlexSheet extends WjFlexGrid{constructor(e,r){super(e,r)}get _controlConstructor(){return wjcGridSheet.FlexSheet}}class WjSheet extends WjDirective{constructor(){super();this.require="^wjFlexSheet"}get _controlConstructor(){return wjcGridSheet.Sheet}_initControl(e){return super._initControl(void 0)}}