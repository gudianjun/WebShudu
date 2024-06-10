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

"use strict";var __importStar=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var o={};if(null!=r)for(var e in r)Object.hasOwnProperty.call(r,e)&&(o[e]=r[e]);o.default=r;return o};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_knockout_base_1=require("@grapecity/wijmo.knockout.base"),mKo=__importStar(require("knockout")),wjcGroup=__importStar(require("@grapecity/wijmo.grid.grouppanel"));var wjKo=mKo;class wjGroupPanel extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wjcGroup.GroupPanel}}exports.wjGroupPanel=wjGroupPanel;wjKo.bindingHandlers.wjGroupPanel=new wjGroupPanel;