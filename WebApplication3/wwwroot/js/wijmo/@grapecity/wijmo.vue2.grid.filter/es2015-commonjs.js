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

"use strict";var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.default=e;return r};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_vue2_base_1=require("@grapecity/wijmo.vue2.base"),wjcGridFilter=__importStar(require("@grapecity/wijmo.grid.filter"));class WjFlexGridFilterBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFlexGridFilterBehavior.tag="wj-flex-grid-filter";WjFlexGridFilterBehavior.parentInCtor=!0;WjFlexGridFilterBehavior.props=["showFilterIcons","showSortButtons","defaultFilterType","exclusiveValueSearch","filterColumns","reApplyFilterOnUpdate"];WjFlexGridFilterBehavior.events=["initialized","editingFilter","filterChanging","filterChanged","filterApplied"];WjFlexGridFilterBehavior.classCtor=function(){return wjcGridFilter.FlexGridFilter};exports.WjFlexGridFilter=WjFlexGridFilterBehavior.register();function registerV3WjFlexGridFilter(e){e.component(WjFlexGridFilterBehavior.tag,exports.WjFlexGridFilter)}function registerGridFilter(e){wijmo_vue2_base_1.VueApi.isV3Plus&&registerV3WjFlexGridFilter(e)}exports.registerGridFilter=registerGridFilter;