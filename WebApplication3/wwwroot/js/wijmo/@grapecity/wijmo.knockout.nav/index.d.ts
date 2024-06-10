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
* {@module wijmo.knockout.nav}
* KnockoutJS bindings for wijmo.nav module
*/
/**
 *
 */
export declare var ___keepComment: any;
import { WjBinding } from '@grapecity/wijmo.knockout.base';
/**
     * KnockoutJS binding for the {@link TreeView} object.
     * Use the {@link wjTreeView} binding to add {@link TreeView} controls to your
     * KnockoutJS applications. For example:
     *  &lt;div data-bind="wjTreeView:
     *      {
     *          itemsSource: data
     *          displayMemberPath:'header'
     *          childItemsPath:'items'
     *      }"&gt;
     *  &lt;/div&gt;
     *
     * The <b>wjTreeView</b> binding supports all read-write properties and events of
     * the {@link TreeView} class.
     *
     */
export declare class wjTreeView extends WjBinding {
    _getControlConstructor(): any;
}
