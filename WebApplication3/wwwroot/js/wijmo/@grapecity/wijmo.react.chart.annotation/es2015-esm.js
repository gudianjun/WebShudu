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

import{ComponentBase}from"@grapecity/wijmo.react.base";import*as wjcChartAnnotation from"@grapecity/wijmo.chart.annotation";export class FlexChartAnnotationLayer extends ComponentBase{constructor(t){super(t,wjcChartAnnotation.AnnotationLayer);this._parentInCtor=!0}}export class FlexChartAnnotation extends ComponentBase{constructor(t){super(t,null,{objectProps:["point","offset","style","start","end"]});this._parentProp="items"}_createControl(){return new wjcChartAnnotation[this.props.type]}}