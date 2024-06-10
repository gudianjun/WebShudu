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

import{WjDirective,_registerNgModule,softRefGauge}from"@grapecity/wijmo.angular.base";import*as mNg from"angular";import*as wjcGauge from"@grapecity/wijmo.gauge";var wjNg=mNg;const wijmoGaugeName="wj.gauge";export const ngModuleName="wj.gauge";var wijmoGauge=_registerNgModule("wj.gauge");if(softRefGauge()&&softRefGauge().LinearGauge){wijmoGauge.directive("wjLinearGauge",[function(){return new WjLinearGauge}]);wijmoGauge.directive("wjBulletGraph",[function(){return new WjBulletGraph}]);wijmoGauge.directive("wjRadialGauge",[function(){return new WjRadialGauge}]);wijmoGauge.directive("wjRange",[function(){return new WjRange}])}export class WjGauge extends WjDirective{constructor(){super();this.template="<div ng-transclude />";this.transclude=!0}get _controlConstructor(){return wjcGauge.Gauge}}export class WjLinearGauge extends WjGauge{constructor(){super()}get _controlConstructor(){return wjcGauge.LinearGauge}}export class WjBulletGraph extends WjLinearGauge{constructor(){super()}get _controlConstructor(){return wjcGauge.BulletGraph}}export class WjRadialGauge extends WjGauge{constructor(){super()}get _controlConstructor(){return wjcGauge.RadialGauge}}export class WjRange extends WjDirective{constructor(){super();this.require=["?^wjLinearGauge","?^wjRadialGauge","?^wjBulletGraph"];this.template="<div ng-transclude />";this.transclude=!0;this._property="ranges";this._isPropertyArray=!0}get _controlConstructor(){return wjcGauge.Range}_initControl(e){return new wjcGauge.Range}}