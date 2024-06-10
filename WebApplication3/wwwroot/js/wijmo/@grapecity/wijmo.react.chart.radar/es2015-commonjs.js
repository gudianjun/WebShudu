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

"use strict";var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_react_base_1=require("@grapecity/wijmo.react.base"),wjcChartRadar=__importStar(require("@grapecity/wijmo.chart.radar"));class FlexRadar extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcChartRadar.FlexRadar,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","options","selection","renderEngine"]})}componentDidMount(){let e=super.componentDidMount();this._setExtra(this.props);return e}componentDidUpdate(e){super.componentDidUpdate(e);this._setExtra(this.props)}_setExtra(e){"tooltipContent"in e&&(this.control.tooltip.content=e.tooltipContent);"labelContent"in e&&(this.control.dataLabel.content=e.labelContent)}}exports.FlexRadar=FlexRadar;class FlexRadarAxis extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcChartRadar.FlexRadarAxis,{objectProps:["plotArea","itemsSource"]});this._parentProp="axes"}}exports.FlexRadarAxis=FlexRadarAxis;class FlexRadarSeries extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcChartRadar.FlexRadarSeries,{objectProps:["axisX","axisY","style","altStyle","symbolStyle","itemsSource","tooltipContent"]});this._parentProp="series";this._siblingId="series"}}exports.FlexRadarSeries=FlexRadarSeries;