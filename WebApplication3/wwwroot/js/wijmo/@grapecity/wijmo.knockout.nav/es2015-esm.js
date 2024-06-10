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

import{WjBinding}from"@grapecity/wijmo.knockout.base";import*as mKo from"knockout";import*as wjcNav from"@grapecity/wijmo.nav";var wjKo=mKo;export class wjTreeView extends WjBinding{_getControlConstructor(){return wjcNav.TreeView}}wjKo.bindingHandlers.wjTreeView=new wjTreeView;