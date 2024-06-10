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

import{VueApi,WjComponentBehavior}from"@grapecity/wijmo.vue2.base";import*as wjcGridGrouppanel from"@grapecity/wijmo.grid.grouppanel";class WjGroupPanelBehavior extends WjComponentBehavior{}WjGroupPanelBehavior.tag="wj-group-panel";WjGroupPanelBehavior.props=["isDisabled","tabOrder","hideGroupedColumns","showDragGlyphs","maxGroups","placeholder","filter","groupDescriptionCreator","grid"];WjGroupPanelBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput"];WjGroupPanelBehavior.classCtor=function(){return wjcGridGrouppanel.GroupPanel};export var WjGroupPanel=WjGroupPanelBehavior.register();function registerV3WjGroupPanel(e){e.component(WjGroupPanelBehavior.tag,WjGroupPanel)}export function registerGridGrouppanel(e){VueApi.isV3Plus&&registerV3WjGroupPanel(e)}