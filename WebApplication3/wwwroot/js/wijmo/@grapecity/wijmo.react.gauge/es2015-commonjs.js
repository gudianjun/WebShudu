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

"use strict";var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(a[r]=e[r]);a.default=e;return a};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_react_base_1=require("@grapecity/wijmo.react.base"),wjcGauge=__importStar(require("@grapecity/wijmo.gauge"));class LinearGauge extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcGauge.LinearGauge)}}exports.LinearGauge=LinearGauge;class BulletGraph extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcGauge.BulletGraph)}}exports.BulletGraph=BulletGraph;class RadialGauge extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcGauge.RadialGauge,{objectProps:["needleElement"]})}}exports.RadialGauge=RadialGauge;class Range extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcGauge.Range);this._parentProp="ranges"}}exports.Range=Range;