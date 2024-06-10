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

"use strict";var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&(r[o]=e[o]);r.default=e;return r};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_knockout_base_1=require("@grapecity/wijmo.knockout.base"),mKo=__importStar(require("knockout")),wjcNav=__importStar(require("@grapecity/wijmo.nav"));var wjKo=mKo;class wjTreeView extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wjcNav.TreeView}}exports.wjTreeView=wjTreeView;wjKo.bindingHandlers.wjTreeView=new wjTreeView;