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

import{WjDirective,_registerNgModule,softRefViewer}from"@grapecity/wijmo.angular.base";import*as mNg from"angular";import*as wjcViewer from"@grapecity/wijmo.viewer";var wjNg=mNg;const wijmoViewerName="wj.viewer";export const ngModuleName="wj.viewer";var wijmoOlap=_registerNgModule("wj.viewer"),wijmoViewer=window.angular.module("wj.viewer",[]);softRefViewer()&&softRefViewer().ReportViewer&&wijmoViewer.directive("wjReportViewer",[function(){return new WjReportViewer}]);wjcViewer&&wjcViewer.PdfViewer&&wijmoViewer.directive("wjPdfViewer",[function(){return new WjPdfViewer}]);class WjViewerBase extends WjDirective{constructor(){super();this.template="<div ng-transclude />";this.transclude=!0}get _controlConstructor(){return wjcViewer.ViewerBase}}class WjReportViewer extends WjViewerBase{constructor(){super()}get _controlConstructor(){return wjcViewer.ReportViewer}}class WjPdfViewer extends WjViewerBase{constructor(){super()}get _controlConstructor(){return wjcViewer.PdfViewer}}