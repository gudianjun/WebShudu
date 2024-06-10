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
* {@module wijmo.knockout.grid.sheet}
* KnockoutJS bindings for wijmo.grid.sheet module
*/
/**
 *
 */
export declare var ___keepComment: any;
import { WjBinding, WjContext } from '@grapecity/wijmo.knockout.base';
import { wjFlexGrid } from '@grapecity/wijmo.knockout.grid';
import * as wjcSheet from '@grapecity/wijmo.grid.sheet';
/**
 * KnockoutJS binding for the {@link FlexSheet} control.
 *
 * Use the {@link wjFlexSheet} binding to add {@link FlexSheet} controls to your
 * KnockoutJS applications.
 *
 * The <b>wjFlexSheet</b> binding may contain {@link wjSheet} child bindings.
 *
 * The <b>wjFlexSheet</b> binding supports all read-write properties and events of
 * the {@link FlexSheet} control.
 */
export declare class wjFlexSheet extends wjFlexGrid {
    _getControlConstructor(): any;
}
/**
 * KnockoutJS binding for the {@link FlexSheet} {@link Sheet} object.
 *
 * The {@link wjSheet} binding must be contained in a {@link wjFlexSheet} binding.
 *
 * The <b>wjSheet</b> binding supports all read-write properties and events of
 * the {@link Sheet} class.
 *
 */
export declare class wjSheet extends WjBinding {
    _getControlConstructor(): any;
    _createWijmoContext(): WjContext;
}
export declare class WjSheetContext extends WjContext {
    _initControl(): wjcSheet.Sheet;
}
