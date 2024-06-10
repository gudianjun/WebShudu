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

import{VueApi,WjComponentBehavior}from"@grapecity/wijmo.vue2.base";import*as wjcGridSearch from"@grapecity/wijmo.grid.search";class WjFlexGridSearchBehavior extends WjComponentBehavior{}WjFlexGridSearchBehavior.tag="wj-flex-grid-search";WjFlexGridSearchBehavior.props=["isDisabled","tabOrder","text","delay","searchAllColumns","placeholder","cssMatch","grid"];WjFlexGridSearchBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput"];WjFlexGridSearchBehavior.classCtor=function(){return wjcGridSearch.FlexGridSearch};export var WjFlexGridSearch=WjFlexGridSearchBehavior.register();function registerV3WjFlexGridSearch(e){e.component(WjFlexGridSearchBehavior.tag,WjFlexGridSearch)}export function registerGridSearch(e){VueApi.isV3Plus&&registerV3WjFlexGridSearch(e)}