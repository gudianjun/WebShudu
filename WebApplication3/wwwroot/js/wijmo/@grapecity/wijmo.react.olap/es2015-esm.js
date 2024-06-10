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

import{ComponentBase}from"@grapecity/wijmo.react.base";import*as wjcOlap from"@grapecity/wijmo.olap";export class PivotGrid extends ComponentBase{constructor(e){super(e,wjcOlap.PivotGrid,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold","columnGroups"]})}}export class PivotChart extends ComponentBase{constructor(e){super(e,wjcOlap.PivotChart,{objectProps:["itemsSource","headerStyle","footerStyle"]})}}export class PivotPanel extends ComponentBase{constructor(e){super(e,wjcOlap.PivotPanel,{objectProps:["engine","itemsSource"]})}}export class Slicer extends ComponentBase{constructor(e){super(e,wjcOlap.Slicer,{objectProps:["field"]})}}