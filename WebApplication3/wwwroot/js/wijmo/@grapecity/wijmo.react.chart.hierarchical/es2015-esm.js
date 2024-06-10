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

import{ComponentBase}from"@grapecity/wijmo.react.base";import*as wjcChartHierarchical from"@grapecity/wijmo.chart.hierarchical";export class Sunburst extends ComponentBase{constructor(t){super(t,wjcChartHierarchical.Sunburst,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","bindingName","childItemsPath"]})}componentDidMount(){let t=super.componentDidMount();this._setExtra(this.props);return t}componentDidUpdate(t){super.componentDidUpdate(t);this._setExtra(this.props)}_setExtra(t){"tooltipContent"in t&&(this.control.tooltip.content=t.tooltipContent);"labelContent"in t&&(this.control.dataLabel.content=t.labelContent)}}export class TreeMap extends ComponentBase{constructor(t){super(t,wjcChartHierarchical.TreeMap,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","bindingName","childItemsPath"]})}componentDidMount(){let t=super.componentDidMount();this._setExtra(this.props);return t}componentDidUpdate(t){super.componentDidUpdate(t);this._setExtra(this.props)}_setExtra(t){"tooltipContent"in t&&(this.control.tooltip.content=t.tooltipContent);"labelContent"in t&&(this.control.dataLabel.content=t.labelContent)}}