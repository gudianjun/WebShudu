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

"use strict";var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(r[t]=e[t]);r.default=e;return r};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_react_base_1=require("@grapecity/wijmo.react.base"),wjcViewer=__importStar(require("@grapecity/wijmo.viewer"));class ReportViewer extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcViewer.ReportViewer,{objectProps:["requestHeaders","parameters"]})}}exports.ReportViewer=ReportViewer;class PdfViewer extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcViewer.PdfViewer,{objectProps:["requestHeaders"]})}}exports.PdfViewer=PdfViewer;