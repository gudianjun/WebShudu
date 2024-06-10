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

import{ComponentBase}from"@grapecity/wijmo.react.base";import*as wjcGauge from"@grapecity/wijmo.gauge";export class LinearGauge extends ComponentBase{constructor(e){super(e,wjcGauge.LinearGauge)}}export class BulletGraph extends ComponentBase{constructor(e){super(e,wjcGauge.BulletGraph)}}export class RadialGauge extends ComponentBase{constructor(e){super(e,wjcGauge.RadialGauge,{objectProps:["needleElement"]})}}export class Range extends ComponentBase{constructor(e){super(e,wjcGauge.Range);this._parentProp="ranges"}}