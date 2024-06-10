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

"use strict";var __importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var o in t)Object.hasOwnProperty.call(t,o)&&(n[o]=t[o]);n.default=t;return n};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_knockout_base_1=require("@grapecity/wijmo.knockout.base"),mKo=__importStar(require("knockout")),wjcChartAnno=__importStar(require("@grapecity/wijmo.chart.annotation"));var wjKo=mKo;class wjFlexChartAnnotationLayer extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wjcChartAnno.AnnotationLayer}}exports.wjFlexChartAnnotationLayer=wjFlexChartAnnotationLayer;class wjFlexChartAnnotation extends wijmo_knockout_base_1.WjBinding{_createControl(t){return this._context._createAnnotation()}_getMetaDataId(){return"FlexChartAnnotation"}_createWijmoContext(){this._context=new wjFlexChartAnnotationContext(this);return this._context}}exports.wjFlexChartAnnotation=wjFlexChartAnnotation;class wjFlexChartAnnotationContext extends wijmo_knockout_base_1.WjContext{_createAnnotation(){var t=this.valueAccessor(),n=wjKo.unwrap(t.type);return new wjcChartAnno[n]}}exports.wjFlexChartAnnotationContext=wjFlexChartAnnotationContext;wjKo.bindingHandlers.wjFlexChartAnnotationLayer=new wjFlexChartAnnotationLayer;wjKo.bindingHandlers.wjFlexChartAnnotation=new wjFlexChartAnnotation;