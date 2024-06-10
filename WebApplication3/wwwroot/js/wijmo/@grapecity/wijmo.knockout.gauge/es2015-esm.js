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

import{WjBinding}from"@grapecity/wijmo.knockout.base";import*as mKo from"knockout";import*as wjcGauge from"@grapecity/wijmo.gauge";var wjKo=mKo;export class WjGaugeBinding extends WjBinding{_getControlConstructor(){return wjcGauge.Gauge}}export class wjLinearGauge extends WjGaugeBinding{_getControlConstructor(){return wjcGauge.LinearGauge}}export class wjBulletGraph extends wjLinearGauge{_getControlConstructor(){return wjcGauge.BulletGraph}}export class wjRadialGauge extends WjGaugeBinding{_getControlConstructor(){return wjcGauge.RadialGauge}}export class wjRange extends WjBinding{_getControlConstructor(){return wjcGauge.Range}_createControl(e){return new wjcGauge.Range}}wjKo.bindingHandlers.wjLinearGauge=new wjLinearGauge;wjKo.bindingHandlers.wjBulletGraph=new wjBulletGraph;wjKo.bindingHandlers.wjRadialGauge=new wjRadialGauge;wjKo.bindingHandlers.wjRange=new wjRange;