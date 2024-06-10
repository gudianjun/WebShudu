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
/**
* {@module wijmo.angular2.grid.filter}
* Contains Angular 2 components for the <b>wijmo.grid.filter</b> module.
*
* <b>wijmo.angular2.grid.filter</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjFilter from 'wijmo/wijmo.angular2.grid.filter';
* import * as wjGrid from 'wijmo/wijmo.angular2.grid';
* &nbsp;
* &#64;Component({
*     directives: [wjGrid.WjFlexGrid, wjFilter.WjFlexGridFilter],
*     template: `
*       &lt;wj-flex-grid [itemsSource]="data"&gt;
*           &lt;wj-flex-grid-filter [filterColumns]="['country', 'expenses']"&gt;&lt;/wj-flex-grid-filter&gt;
*       &lt;/wj-flex-grid&gt;`,
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     data: any[];
* }</pre>
*
*/
/**
 *
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare var ___keepComment: any;
import { EventEmitter, AfterViewInit, ElementRef, Injector, OnInit, OnDestroy } from '@angular/core';
import { IWjComponentMetadata, IWjComponentMeta } from '@grapecity/wijmo.angular2.directivebase';
import * as wjcGridFilter from '@grapecity/wijmo.grid.filter';
declare var wjFlexGridFilterMeta: IWjComponentMeta;
export { wjFlexGridFilterMeta };
/**
 * Angular 2 component for the {@link wijmo.grid.filter.FlexGridFilter} class.
 *
 * The <b>wj-flex-grid-filter</b> component must be
 * contained in a {@link wijmo.angular2.grid.WjFlexGrid} component.
 *
 * Use the <b>wj-flex-grid-filter</b> component to add <b>FlexGridFilter</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexGridFilter</b> component is derived from the <b>FlexGridFilter</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexGridFilter extends wjcGridFilter.FlexGridFilter implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Gets or sets a name of a property that this component is assigned to.
     * Default value is ''.
     */
    wjProperty: string;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>editingFilter</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>editingFilter</b> Wijmo event name.
     */
    editingFilterNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>filterChanging</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>filterChanging</b> Wijmo event name.
     */
    filterChangingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>filterChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>filterChanged</b> Wijmo event name.
     */
    filterChangedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>filterApplied</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>filterApplied</b> Wijmo event name.
     */
    filterAppliedNg: EventEmitter<any>;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexGridFilter, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexGridFilter, "wj-flex-grid-filter", never, { "wjProperty": "wjProperty"; "showFilterIcons": "showFilterIcons"; "showSortButtons": "showSortButtons"; "defaultFilterType": "defaultFilterType"; "filterColumns": "filterColumns"; "exclusiveValueSearch": "exclusiveValueSearch"; "reApplyFilterOnUpdate": "reApplyFilterOnUpdate"; }, { "initialized": "initialized"; "editingFilterNg": "editingFilter"; "filterChangingNg": "filterChanging"; "filterChangedNg": "filterChanged"; "filterAppliedNg": "filterApplied"; }, never, never, false, never>;
}
export declare class WjGridFilterModule {
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjGridFilterModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<WjGridFilterModule, [typeof WjFlexGridFilter], [typeof ɵngcc1.CommonModule], [typeof WjFlexGridFilter]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<WjGridFilterModule>;
}
