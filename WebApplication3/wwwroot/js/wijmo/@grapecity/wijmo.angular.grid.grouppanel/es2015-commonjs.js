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

"use strict";var __importStar=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(null!=r)for(var o in r)Object.hasOwnProperty.call(r,o)&&(e[o]=r[o]);e.default=r;return e};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_angular_base_1=require("@grapecity/wijmo.angular.base"),mNg=__importStar(require("angular")),wjcGridGroup=__importStar(require("@grapecity/wijmo.grid.grouppanel"));var wjNg=mNg;const wijmoGridGroupName="wj.grid.grouppanel";exports.ngModuleName=wijmoGridGroupName;var wijmoGridGroup=wijmo_angular_base_1._registerNgModule(wijmoGridGroupName);wijmo_angular_base_1.softRefGridGrouppanel()&&wijmoGridGroup.directive("wjGroupPanel",[function(){return new WjGroupPanel}]);class WjGroupPanel extends wijmo_angular_base_1.WjDirective{get _controlConstructor(){return wjcGridGroup.GroupPanel}}exports.WjGroupPanel=WjGroupPanel;