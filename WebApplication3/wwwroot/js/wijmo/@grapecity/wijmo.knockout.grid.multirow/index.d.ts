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
* {@module wijmo.knockout.grid.multirow}
* KnockoutJS bindings for wijmo.grid.multirow module
*/
/**
 *
 */
export declare var ___keepComment: any;
import { wjFlexGrid } from '@grapecity/wijmo.knockout.grid';
/**
 * KnockoutJS binding for the {@link MultiRow} object.
 * Use the {@link wjMultiRow} binding to add {@link MultiRow} controls to your
 * KnockoutJS applications. For example:
 *  &lt;div data-bind="wjMultiRow:
 *      {
 *          itemsSource: orders,
 *          layoutDefinition: ldThreeLines
 *      }"&gt;
 *  &lt;/div&gt;
 *
 * The <b>wjMultiRow</b> binding supports all read-write properties and events of
 * the {@link MultiRow} class.
 *
 */
export declare class wjMultiRow extends wjFlexGrid {
    _getControlConstructor(): any;
}
