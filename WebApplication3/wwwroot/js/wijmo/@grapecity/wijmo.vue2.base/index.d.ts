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
export declare var VueApi: any;
export declare class WjComponentBehavior {
    static tag: string;
    static render: (createElement: () => any) => any;
    static className: string;
    static classCtor: () => any;
    static parentProp: string;
    static parentInCtor: boolean;
    static siblingId: string;
    static data: any;
    static props: string[];
    static events: string[];
    static changeEvents: {
        [event: string]: string[];
    };
    static modelProp: string;
    private static readonly _typeSiblingIdAttr;
    static readonly _behClassProp = "_wjBehCl";
    static readonly _behProp = "__wjBeh";
    static readonly _propIdxMapProp = "__propInitIdx";
    private static _siblingDirId;
    private static _modelEvent;
    private _siblingId;
    private _isMounted;
    private _mountedCBs;
    private _siblingInsertedMO;
    readonly component: any;
    control: any;
    parent: WjComponentBehavior;
    ['constructor']: typeof WjComponentBehavior;
    static _attach(component: any): WjComponentBehavior;
    static register(): any;
    constructor(component: any);
    lhMounted(): void;
    lhDestroyed(): void;
    private static _getProps;
    private static _getModel;
    private static _getEmits;
    protected _createControl(): any;
    protected _initParent(): void;
    protected _updateControl(property: string, newValue: any): void;
    private _prepareControl;
    private _isChild;
    private _isParentInCtor;
    private _getParentProp;
    private _getSiblingIndex;
    private _siblingInserted;
    private _getElement;
    private static _getControlType;
    _mountedCB(cb: () => void): void;
}
export declare function _initialize(behavior: WjComponentBehavior): any;
