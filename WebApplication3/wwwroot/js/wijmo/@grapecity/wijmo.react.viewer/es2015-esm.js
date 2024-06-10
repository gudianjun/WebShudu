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

import{ComponentBase}from"@grapecity/wijmo.react.base";import*as wjcViewer from"@grapecity/wijmo.viewer";export class ReportViewer extends ComponentBase{constructor(e){super(e,wjcViewer.ReportViewer,{objectProps:["requestHeaders","parameters"]})}}export class PdfViewer extends ComponentBase{constructor(e){super(e,wjcViewer.PdfViewer,{objectProps:["requestHeaders"]})}}