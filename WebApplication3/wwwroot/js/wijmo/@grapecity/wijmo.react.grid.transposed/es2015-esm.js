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

import{ComponentBase}from"@grapecity/wijmo.react.base";import*as wjcGridTransposed from"@grapecity/wijmo.grid.transposed";export class TransposedGrid extends ComponentBase{constructor(r){super(r,wjcGridTransposed.TransposedGrid,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold","columnGroups","rowGroups"]})}}export class TransposedGridRow extends ComponentBase{constructor(r){super(r,wjcGridTransposed.TransposedGridRow,{objectProps:["dataMap","cellTemplate","editor"]});this._parentProp="_rowInfo"}_initParent(){var r=this.parent.control;if(r.autoGenerateRows){r.autoGenerateRows=!1;r._rowInfo.clear()}super._initParent()}}