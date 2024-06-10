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

import{WjBinding}from"@grapecity/wijmo.knockout.base";import{wjFlexGrid}from"@grapecity/wijmo.knockout.grid";import*as mKo from"knockout";import*as wjcOlap from"@grapecity/wijmo.olap";var wjKo=mKo;export class wjPivotGrid extends wjFlexGrid{_getControlConstructor(){return wjcOlap.PivotGrid}}export class wjPivotChart extends WjBinding{_getControlConstructor(){return wjcOlap.PivotChart}}export class wjPivotPanel extends WjBinding{_getControlConstructor(){return wjcOlap.PivotPanel}}export class wjSlicer extends WjBinding{_getControlConstructor(){return wjcOlap.Slicer}}wjKo.bindingHandlers.wjPivotGrid=new wjPivotGrid;wjKo.bindingHandlers.wjPivotChart=new wjPivotChart;wjKo.bindingHandlers.wjPivotPanel=new wjPivotPanel;wjKo.bindingHandlers.wjSlicer=new wjSlicer;