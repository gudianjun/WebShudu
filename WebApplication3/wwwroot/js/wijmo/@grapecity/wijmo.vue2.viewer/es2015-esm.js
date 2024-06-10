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

import{VueApi,WjComponentBehavior}from"@grapecity/wijmo.vue2.base";import*as wjcViewer from"@grapecity/wijmo.viewer";class WjReportViewerBehavior extends WjComponentBehavior{}WjReportViewerBehavior.tag="wj-report-viewer";WjReportViewerBehavior.props=["isDisabled","tabOrder","serviceUrl","filePath","fullScreen","zoomFactor","zoomMode","mouseMode","viewMode","requestHeaders","parameters","paginated","reportName"];WjReportViewerBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","pageIndexChanged","queryLoadingData","beforeSendRequest"];WjReportViewerBehavior.changeEvents={fullScreenChanged:["fullScreen"],zoomFactorChanged:["zoomFactor"],zoomModeChanged:["zoomMode"],mouseModeChanged:["mouseMode"],viewModeChanged:["viewMode"]};WjReportViewerBehavior.classCtor=function(){return wjcViewer.ReportViewer};export var WjReportViewer=WjReportViewerBehavior.register();function registerV3WjReportViewer(e){e.component(WjReportViewerBehavior.tag,WjReportViewer)}class WjPdfViewerBehavior extends WjComponentBehavior{}WjPdfViewerBehavior.tag="wj-pdf-viewer";WjPdfViewerBehavior.props=["isDisabled","tabOrder","serviceUrl","filePath","fullScreen","zoomFactor","zoomMode","mouseMode","viewMode","requestHeaders"];WjPdfViewerBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","pageIndexChanged","queryLoadingData","beforeSendRequest"];WjPdfViewerBehavior.changeEvents={fullScreenChanged:["fullScreen"],zoomFactorChanged:["zoomFactor"],zoomModeChanged:["zoomMode"],mouseModeChanged:["mouseMode"],viewModeChanged:["viewMode"]};WjPdfViewerBehavior.classCtor=function(){return wjcViewer.PdfViewer};export var WjPdfViewer=WjPdfViewerBehavior.register();function registerV3WjPdfViewer(e){e.component(WjPdfViewerBehavior.tag,WjPdfViewer)}export function registerViewer(e){if(VueApi.isV3Plus){registerV3WjReportViewer(e);registerV3WjPdfViewer(e)}}