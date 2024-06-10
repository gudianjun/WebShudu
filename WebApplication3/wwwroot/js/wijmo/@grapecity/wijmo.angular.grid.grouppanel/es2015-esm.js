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

import{WjDirective,_registerNgModule,softRefGridGrouppanel}from"@grapecity/wijmo.angular.base";import*as mNg from"angular";import*as wjcGridGroup from"@grapecity/wijmo.grid.grouppanel";var wjNg=mNg;const wijmoGridGroupName="wj.grid.grouppanel";export const ngModuleName=wijmoGridGroupName;var wijmoGridGroup=_registerNgModule(wijmoGridGroupName);softRefGridGrouppanel()&&wijmoGridGroup.directive("wjGroupPanel",[function(){return new WjGroupPanel}]);export class WjGroupPanel extends WjDirective{get _controlConstructor(){return wjcGridGroup.GroupPanel}}