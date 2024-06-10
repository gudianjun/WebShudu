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

import{ComponentBase}from"@grapecity/wijmo.react.base";import*as wjcChartRadar from"@grapecity/wijmo.chart.radar";export class FlexRadar extends ComponentBase{constructor(t){super(t,wjcChartRadar.FlexRadar,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","options","selection","renderEngine"]})}componentDidMount(){let t=super.componentDidMount();this._setExtra(this.props);return t}componentDidUpdate(t){super.componentDidUpdate(t);this._setExtra(this.props)}_setExtra(t){"tooltipContent"in t&&(this.control.tooltip.content=t.tooltipContent);"labelContent"in t&&(this.control.dataLabel.content=t.labelContent)}}export class FlexRadarAxis extends ComponentBase{constructor(t){super(t,wjcChartRadar.FlexRadarAxis,{objectProps:["plotArea","itemsSource"]});this._parentProp="axes"}}export class FlexRadarSeries extends ComponentBase{constructor(t){super(t,wjcChartRadar.FlexRadarSeries,{objectProps:["axisX","axisY","style","altStyle","symbolStyle","itemsSource","tooltipContent"]});this._parentProp="series";this._siblingId="series"}}