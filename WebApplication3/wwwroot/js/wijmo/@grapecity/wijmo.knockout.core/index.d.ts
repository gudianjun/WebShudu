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
* {@module wijmo.knockout.core}
* KnockoutJS bindings for wijmo module
*/
/**
 *
 */
export declare var ___keepComment: any;
import { WjBinding, WjContext } from '@grapecity/wijmo.knockout.base';
/**
 * KnockoutJS binding for the {@link Tooltip} class.
 *
 * Use the {@link wjTooltip} binding to add tooltips to elements on the page.
 * The {@link wjTooltip} supports HTML content, smart positioning, and touch.
 *
 * The {@link wjTooltip} binding is specified on an
 * element that the tooltip applies to. The value is the tooltip
 * text or the id of an element that contains the text. For example:
 *
 * <pre>&lt;p data-bind="wjTooltip: '#fineprint'" &gt;
 *     Regular paragraph content...&lt;/p&gt;
 * ...
 * &lt;div id="fineprint" style="display:none" &gt;
 *   &lt;h3&gt;Important Note&lt;/h3&gt;
 *   &lt;p&gt;
 *     Data for the current quarter is estimated by pro-rating etc...&lt;/p&gt;
 * &lt;/div&gt;</pre>
 */
export declare class wjTooltip extends WjBinding {
    _getControlConstructor(): any;
    _createControl(element: any): any;
    _createWijmoContext(): WjContext;
}
export declare class WjTooltipContext extends WjContext {
    update(element: any, valueAccessor: () => any, allBindings: any, viewModel: any, bindingContext: any): void;
    private _updateTooltip;
}
