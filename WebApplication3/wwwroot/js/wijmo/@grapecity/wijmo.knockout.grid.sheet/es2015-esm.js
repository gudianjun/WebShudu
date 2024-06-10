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

import{WjBinding,WjContext}from"@grapecity/wijmo.knockout.base";import{wjFlexGrid}from"@grapecity/wijmo.knockout.grid";import*as mKo from"knockout";import*as wjcSheet from"@grapecity/wijmo.grid.sheet";var wjKo=mKo;export class wjFlexSheet extends wjFlexGrid{_getControlConstructor(){return wjcSheet.FlexSheet}}export class wjSheet extends WjBinding{_getControlConstructor(){return wjcSheet.Sheet}_createWijmoContext(){return new WjSheetContext(this)}}export class WjSheetContext extends WjContext{_initControl(){super._initControl();var e=this.valueAccessor(),t=this.parentWjContext.control,o=wjKo.unwrap(e.itemsSource),n=wjKo.unwrap(e.name);return o?t.addBoundSheet(n,o):t.addUnboundSheet(n,+wjKo.unwrap(e.rowCount),+wjKo.unwrap(e.columnCount))}}wjKo.bindingHandlers.wjFlexSheet=new wjFlexSheet;wjKo.bindingHandlers.wjSheet=new wjSheet;