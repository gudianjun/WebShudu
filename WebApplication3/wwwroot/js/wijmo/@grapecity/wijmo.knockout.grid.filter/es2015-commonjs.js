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

"use strict";var __importStar=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(null!=r)for(var t in r)Object.hasOwnProperty.call(r,t)&&(e[t]=r[t]);e.default=r;return e};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_knockout_base_1=require("@grapecity/wijmo.knockout.base"),mKo=__importStar(require("knockout")),wjcFilter=__importStar(require("@grapecity/wijmo.grid.filter"));var wjKo=mKo;class wjFlexGridFilter extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wjcFilter.FlexGridFilter}}exports.wjFlexGridFilter=wjFlexGridFilter;wjKo.bindingHandlers.wjFlexGridFilter=new wjFlexGridFilter;