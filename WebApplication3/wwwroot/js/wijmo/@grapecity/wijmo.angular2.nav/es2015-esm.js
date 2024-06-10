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

import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
var WjTreeView_1,WjTabPanel_1,WjTab_1,WjAccordion_1,WjAccordionPane_1,__decorate=this&&this.__decorate||function(e,t,n,a){var i,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(r=(o<3?i(r):o>3?i(t,n,r):i(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},__param=this&&this.__param||function(e,t){return function(n,a){t(n,a,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"@grapecity/wijmo.angular2.directivebase";import*as wjcCore from"@grapecity/wijmo";import*as wjcNav from"@grapecity/wijmo.nav";var wjTreeViewMeta={selector:"wj-tree-view",template:"",inputs:["asyncBindings","wjModelProperty","isDisabled","tabOrder","childItemsPath","displayMemberPath","imageMemberPath","checkedMemberPath","isContentHtml","showCheckboxes","autoCollapse","isAnimated","isReadOnly","allowDragging","checkOnClick","expandOnClick","collapseOnClick","expandOnLoad","lazyLoadFunction","itemsSource","selectedItem","selectedNode","checkedItems"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","itemsSourceChangedNg: itemsSourceChanged","loadingItemsNg: loadingItems","loadedItemsNg: loadedItems","itemClickedNg: itemClicked","selectedItemChangedNg: selectedItemChanged","selectedItemChangePC: selectedItemChange","selectedNodeChangePC: selectedNodeChange","checkedItemsChangedNg: checkedItemsChanged","checkedItemsChangePC: checkedItemsChange","isCollapsedChangingNg: isCollapsedChanging","isCollapsedChangedNg: isCollapsedChanged","isCheckedChangingNg: isCheckedChanging","isCheckedChangedNg: isCheckedChanged","formatItemNg: formatItem","dragStartNg: dragStart","dragOverNg: dragOver","dropNg: drop","dragEndNg: dragEnd","nodeEditStartingNg: nodeEditStarting","nodeEditStartedNg: nodeEditStarted","nodeEditEndingNg: nodeEditEnding","nodeEditEndedNg: nodeEditEnded"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjTreeViewMeta};let WjTreeView=WjTreeView_1=class WjTreeView extends wjcNav.TreeView{constructor(e,t,n){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,n);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,n,a=!1){let i=WjDirectiveBehavior,o=i.getZone(this);o&&i.outsideZoneEvents[t]?o.runOutsideAngular(()=>{super.addEventListener(e,t,n,a)}):super.addEventListener(e,t,n,a)}};
WjTreeView.ɵfac = function WjTreeView_Factory(t) { return new (t || WjTreeView)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjTreeView.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjTreeView, selectors: [["wj-tree-view"]], inputs: { asyncBindings: "asyncBindings", wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", childItemsPath: "childItemsPath", displayMemberPath: "displayMemberPath", imageMemberPath: "imageMemberPath", checkedMemberPath: "checkedMemberPath", isContentHtml: "isContentHtml", showCheckboxes: "showCheckboxes", autoCollapse: "autoCollapse", isAnimated: "isAnimated", isReadOnly: "isReadOnly", allowDragging: "allowDragging", checkOnClick: "checkOnClick", expandOnClick: "expandOnClick", collapseOnClick: "collapseOnClick", expandOnLoad: "expandOnLoad", lazyLoadFunction: "lazyLoadFunction", itemsSource: "itemsSource", selectedItem: "selectedItem", selectedNode: "selectedNode", checkedItems: "checkedItems" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", itemsSourceChangedNg: "itemsSourceChanged", loadingItemsNg: "loadingItems", loadedItemsNg: "loadedItems", itemClickedNg: "itemClicked", selectedItemChangedNg: "selectedItemChanged", selectedItemChangePC: "selectedItemChange", selectedNodeChangePC: "selectedNodeChange", checkedItemsChangedNg: "checkedItemsChanged", checkedItemsChangePC: "checkedItemsChange", isCollapsedChangingNg: "isCollapsedChanging", isCollapsedChangedNg: "isCollapsedChanged", isCheckedChangingNg: "isCheckedChanging", isCheckedChangedNg: "isCheckedChanged", formatItemNg: "formatItem", dragStartNg: "dragStart", dragOverNg: "dragOver", dropNg: "drop", dragEndNg: "dragEnd", nodeEditStartingNg: "nodeEditStarting", nodeEditStartedNg: "nodeEditStarted", nodeEditEndingNg: "nodeEditEnding", nodeEditEndedNg: "nodeEditEnded" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjTreeView_1) }, ...wjTreeViewMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjTreeView_Template(rf, ctx) { }, encapsulation: 2 });WjTreeView.meta={outputs:wjTreeViewMeta.outputs,changeEvents:{selectedItemChanged:["selectedItem","selectedNode"],checkedItemsChanged:["checkedItems"]}};WjTreeView=WjTreeView_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjTreeView);export{WjTreeView};var wjTabPanelMeta={selector:"wj-tab-panel",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","tabOrder","isAnimated","autoSwitch","selectedIndex","selectedTab"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","selectedIndexChangedNg: selectedIndexChanged","selectedIndexChangePC: selectedIndexChange","selectedTabChangePC: selectedTabChange"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjTabPanelMeta};let WjTabPanel=WjTabPanel_1=class WjTabPanel extends wjcNav.TabPanel{constructor(e,t,n){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,n);this.created()}created(){}ngOnInit(){this.tabs.beginUpdate();this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this.selectedIndex<0&&this.tabs.length&&(this.selectedIndex=0);this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,n,a=!1){let i=WjDirectiveBehavior,o=i.getZone(this);o&&i.outsideZoneEvents[t]?o.runOutsideAngular(()=>{super.addEventListener(e,t,n,a)}):super.addEventListener(e,t,n,a)}ngAfterContentInit(){let e=this.selectedIndex,t=this.tabs;e>-1&&e<t.length&&wjcCore.addClass(t[e].header,"wj-state-active");t.endUpdate()}};
WjTabPanel.ɵfac = function WjTabPanel_Factory(t) { return new (t || WjTabPanel)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjTabPanel.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjTabPanel, selectors: [["wj-tab-panel"]], inputs: { asyncBindings: "asyncBindings", wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", isAnimated: "isAnimated", autoSwitch: "autoSwitch", selectedIndex: "selectedIndex", selectedTab: "selectedTab" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", selectedIndexChangedNg: "selectedIndexChanged", selectedIndexChangePC: "selectedIndexChange", selectedTabChangePC: "selectedTabChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjTabPanel_1) }, ...wjTabPanelMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjTabPanel_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });WjTabPanel.meta={outputs:wjTabPanelMeta.outputs,changeEvents:{selectedIndexChanged:["selectedIndex","selectedTab"]}};WjTabPanel=WjTabPanel_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjTabPanel);export{WjTabPanel};var wjTabMeta={selector:"wj-tab",template:"<ng-content></ng-content>",inputs:["wjProperty","isDisabled","isVisible"],outputs:["initialized"],providers:[]};export{wjTabMeta};let WjTab=WjTab_1=class WjTab extends wjcNav.Tab{constructor(e,t,n){super(document.createElement("div"),document.createElement("div"));this.isInitialized=!1;this.wjProperty="tabs";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,n);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}ngAfterContentInit(){let e=this._wjBehaviour.elementRef.nativeElement;this._setParts(e.children[0],e.children[1])}};
WjTab.ɵfac = function WjTab_Factory(t) { return new (t || WjTab)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjTab.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjTab, selectors: [["wj-tab"]], inputs: { wjProperty: "wjProperty", isDisabled: "isDisabled", isVisible: "isVisible" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjTab_1) }, ...wjTabMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function WjTab_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });WjTab.meta={outputs:wjTabMeta.outputs};WjTab=WjTab_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjTab);export{WjTab};var wjAccordionMeta={selector:"wj-accordion",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","tabOrder","isAnimated","autoSwitch","selectedIndex","selectedPane","showIcons","allowCollapseAll","allowExpandMany"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","selectedIndexChangedNg: selectedIndexChanged","selectedIndexChangePC: selectedIndexChange"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjAccordionMeta};let WjAccordion=WjAccordion_1=class WjAccordion extends wjcNav.Accordion{constructor(e,t,n){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,n);this.created()}created(){}ngOnInit(){this.panes.beginUpdate();this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this.selectedIndex<0&&this.panes.length&&(this.selectedIndex=0);this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,n,a=!1){let i=WjDirectiveBehavior,o=i.getZone(this);o&&i.outsideZoneEvents[t]?o.runOutsideAngular(()=>{super.addEventListener(e,t,n,a)}):super.addEventListener(e,t,n,a)}ngAfterContentInit(){let e=this.selectedIndex,t=this.panes;e>-1&&e<t.length&&wjcCore.addClass(t[e].header,"wj-state-active");t.endUpdate()}};
WjAccordion.ɵfac = function WjAccordion_Factory(t) { return new (t || WjAccordion)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjAccordion.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjAccordion, selectors: [["wj-accordion"]], inputs: { asyncBindings: "asyncBindings", wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", isAnimated: "isAnimated", autoSwitch: "autoSwitch", selectedIndex: "selectedIndex", selectedPane: "selectedPane", showIcons: "showIcons", allowCollapseAll: "allowCollapseAll", allowExpandMany: "allowExpandMany" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", selectedIndexChangedNg: "selectedIndexChanged", selectedIndexChangePC: "selectedIndexChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjAccordion_1) }, ...wjAccordionMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjAccordion_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });WjAccordion.meta={outputs:wjAccordionMeta.outputs,changeEvents:{selectedIndexChanged:["selectedIndex"]}};WjAccordion=WjAccordion_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjAccordion);export{WjAccordion};var wjAccordionPaneMeta={selector:"wj-accordion-pane",template:"<ng-content></ng-content>",inputs:["wjProperty","isDisabled","isVisible","isCollapsed"],outputs:["initialized"],providers:[]};export{wjAccordionPaneMeta};let WjAccordionPane=WjAccordionPane_1=class WjAccordionPane extends wjcNav.AccordionPane{constructor(e,t,n){super(document.createElement("div"),document.createElement("div"));this.isInitialized=!1;this.wjProperty="panes";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,n);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}ngAfterContentInit(){let e=this._wjBehaviour.elementRef.nativeElement;this._setParts(e.children[0],e.children[1])}};
WjAccordionPane.ɵfac = function WjAccordionPane_Factory(t) { return new (t || WjAccordionPane)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjAccordionPane.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjAccordionPane, selectors: [["wj-accordion-pane"]], inputs: { wjProperty: "wjProperty", isDisabled: "isDisabled", isVisible: "isVisible", isCollapsed: "isCollapsed" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjAccordionPane_1) }, ...wjAccordionPaneMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function WjAccordionPane_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });WjAccordionPane.meta={outputs:wjAccordionPaneMeta.outputs};WjAccordionPane=WjAccordionPane_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjAccordionPane);export{WjAccordionPane};let moduleExports=[WjTreeView,WjTabPanel,WjTab,WjAccordion,WjAccordionPane],WjNavModule=class WjNavModule{};
WjNavModule.ɵfac = function WjNavModule_Factory(t) { return new (t || WjNavModule)(); };
WjNavModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjNavModule });
WjNavModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjTreeView, [{
        type: Component,
        args: [{ selector: wjTreeViewMeta.selector, template: wjTreeViewMeta.template, inputs: wjTreeViewMeta.inputs, outputs: wjTreeViewMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjTreeView_1) }, ...wjTreeViewMeta.providers] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjTabPanel, [{
        type: Component,
        args: [{ selector: wjTabPanelMeta.selector, template: wjTabPanelMeta.template, inputs: wjTabPanelMeta.inputs, outputs: wjTabPanelMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjTabPanel_1) }, ...wjTabPanelMeta.providers] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjTab, [{
        type: Component,
        args: [{ selector: wjTabMeta.selector, template: wjTabMeta.template, inputs: wjTabMeta.inputs, outputs: wjTabMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjTab_1) }, ...wjTabMeta.providers] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjAccordion, [{
        type: Component,
        args: [{ selector: wjAccordionMeta.selector, template: wjAccordionMeta.template, inputs: wjAccordionMeta.inputs, outputs: wjAccordionMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjAccordion_1) }, ...wjAccordionMeta.providers] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjAccordionPane, [{
        type: Component,
        args: [{ selector: wjAccordionPaneMeta.selector, template: wjAccordionPaneMeta.template, inputs: wjAccordionPaneMeta.inputs, outputs: wjAccordionPaneMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjAccordionPane_1) }, ...wjAccordionPaneMeta.providers] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjNavModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: [...moduleExports], exports: [...moduleExports] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjNavModule, { declarations: function () { return [WjTreeView, WjTabPanel, WjTab, WjAccordion, WjAccordionPane]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjTreeView, WjTabPanel, WjTab, WjAccordion, WjAccordionPane]; } }); })();export{WjNavModule};