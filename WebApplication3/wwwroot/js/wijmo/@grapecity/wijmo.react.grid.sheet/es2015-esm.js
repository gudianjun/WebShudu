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

import{ComponentBase}from"@grapecity/wijmo.react.base";import*as wjcGridSheet from"@grapecity/wijmo.grid.sheet";export class FlexSheet extends ComponentBase{constructor(e){super(e,wjcGridSheet.FlexSheet,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold","columnGroups"]})}}export class Sheet extends ComponentBase{constructor(e){super(e,wjcGridSheet.Sheet,{objectProps:["itemsSource"]});this._parentProp="sheets";this._parentInCtor=!0}}