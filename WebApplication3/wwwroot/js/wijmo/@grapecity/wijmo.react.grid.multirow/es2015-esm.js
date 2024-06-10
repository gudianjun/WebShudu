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

import{ComponentBase}from"@grapecity/wijmo.react.base";import*as wjcGridMultirow from"@grapecity/wijmo.grid.multirow";import*as wjGrid from"@grapecity/wijmo.react.grid";export class MultiRow extends ComponentBase{constructor(e){super(e,wjcGridMultirow.MultiRow,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold","columnGroups","layoutDefinition","headerLayoutDefinition"]})}_createControl(){let e=super._createControl();new wjGrid.DirectiveCellFactory(this,e);return e}_onBeforeWillUnmount(e){super._onBeforeWillUnmount(e);ComponentBase._reactMajorVersion<18&&this.control._layout._dispose()}}export class MultiRowCell extends ComponentBase{constructor(e){super(e,wjcGridMultirow.MultiRowCell,{objectProps:["dataMap","cellTemplate","editor"]});this._parentProp="cells"}}export class MultiRowCellGroup extends ComponentBase{constructor(e){super(e,wjcGridMultirow.MultiRowCellGroup,{objectProps:["dataMap","cellTemplate","editor"]});this._parentProp="layoutDefinition"}}export class MultiRowCellTemplate extends wjGrid.FlexGridCellTemplate{get template(){return this.props[MultiRowCellTemplate._CellRenderFuncProp]}}