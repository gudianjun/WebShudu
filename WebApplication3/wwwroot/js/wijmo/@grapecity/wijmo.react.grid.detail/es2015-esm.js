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

import{ComponentBase}from"@grapecity/wijmo.react.base";import*as wjcCore from"@grapecity/wijmo";import*as wjcGridDetail from"@grapecity/wijmo.grid.detail";export class FlexGridDetail extends ComponentBase{constructor(e){super(e,wjcGridDetail.FlexGridDetailProvider);this._parentInCtor=!0;this._renderedCells=[];this._destroyCell=this._destroyCell.bind(this)}_onBeforeWillUnmount(e){super._onBeforeWillUnmount(e);this._unmountRenderedCells()}_initParent(){this._setTemplateRelatedProps(this.props);super._initParent()}componentDidUpdate(e){super.componentDidUpdate(e);if(this.control){this.props.template!==this._template&&this._setTemplateRelatedProps(this.props);this._template?this._renderedCells.forEach(e=>{const t=e.cell,l=this._template(this._getTemplateContext(e.row));ComponentBase.selectiveDomRender(l,t)}):this._unmountRenderedCells()}}_setTemplateRelatedProps(e){const t=this.control,l=this._template=e.template;if(l){t.createDetailCell=this._getCellCreator(l);t.disposeDetailCell=this._destroyCell}else{t.createDetailCell=e.createDetailCell;t.disposeDetailCell=e.disposeDetailCell}}_getTemplateContext(e){return{row:e,item:e.dataItem,provider:this.control}}_unmountRenderedCells(){this._renderedCells.forEach(e=>{ComponentBase.selectiveDomUnmount(e.cell)});this._renderedCells=[]}_getCellCreator(e){return t=>{const l=document.createElement("div"),s=e(this._getTemplateContext(t));ComponentBase.selectiveDomRender(s,l);this._renderedCells.push({row:t,cell:l});return l}}_destroyCell(e){const t=this.control.grid.rows[e.index-1];let l=-1;this._renderedCells.some((e,s)=>e.row===t&&!!((l=s)+1));wjcCore.assert(-1!==l,"Main row rendered cell is not found");ComponentBase.selectiveDomUnmount(this._renderedCells[l].cell);this._renderedCells.splice(l,1);return!0}}