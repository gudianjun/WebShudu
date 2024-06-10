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

import{ComponentBase}from"@grapecity/wijmo.react.base";import*as wjcChartMap from"@grapecity/wijmo.chart.map";export class FlexMap extends ComponentBase{constructor(t){super(t,wjcChartMap.FlexMap,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","center"]})}componentDidMount(){let t=super.componentDidMount();this._setExtra(this.props);return t}componentDidUpdate(t){super.componentDidUpdate(t);this._setExtra(this.props)}_setExtra(t){"tooltipContent"in t&&(this.control.tooltip.content=t.tooltipContent)}}export class ScatterMapLayer extends ComponentBase{constructor(t){super(t,wjcChartMap.ScatterMapLayer,{objectProps:["style","itemsSource"]});this._parentProp="layers";this._siblingId="layers"}}export class GeoMapLayer extends ComponentBase{constructor(t){super(t,wjcChartMap.GeoMapLayer,{objectProps:["style","itemsSource","itemFormatter"]});this._parentProp="layers";this._siblingId="layers"}}export class GeoGridLayer extends ComponentBase{constructor(t){super(t,wjcChartMap.GeoGridLayer,{objectProps:["style","itemsSource"]});this._parentProp="layers";this._siblingId="layers"}}export class ColorScale extends ComponentBase{constructor(t){super(t,wjcChartMap.ColorScale,{objectProps:["colors"]});this._parentProp="colorScale"}}