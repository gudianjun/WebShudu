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
import { PropDescBase } from '@grapecity/wijmo.meta';
export interface IPropsMeta {
    [name: string]: PropDescBase;
}
export declare class WjComponentBehavior {
    private static readonly _typeSiblingIdAttr;
    static readonly _behClassProp = "_wjBehCl";
    static readonly _behProp = "_wjBehaviour";
    static readonly _beforeInitParent = "_beforeInitParent";
    static readonly _afterInitParent = "_afterInitParent";
    private static _siblingDirId;
    private static _cmpRegId;
    private static _registered;
    private _siblingId;
    private _isMounted;
    private _mountedCBs;
    private _isDomInitialized;
    private _initialValues;
    control: any;
    readonly component: HTMLElement;
    parentComponent: HTMLElement;
    ['constructor']: typeof WjComponentBehavior;
    static _attach(component: HTMLElement): WjComponentBehavior;
    constructor(component: any);
    static register(name: string, componentType: any): void;
    static getProps(componentType: any): IPropsMeta;
    static ensureNs(ns: string, ...symbolNames: string[]): boolean;
    readonly isWrapper: boolean;
    lhConnected(): void;
    lhDisconnected(): void;
    lhAttributeChanged(name: string, oldValue: string, newValue: string): void;
    private _initParent;
    private _prepareControl;
    _initDom(): void;
    private _createControl;
    private _initEvents;
    private _onAttributeChanged;
    private _flushInitialValues;
    private _isChild;
    private _isParentInCtor;
    private _getParentProp;
    private _getSiblingIndex;
    private _getElement;
    private static _getControlType;
    private static _getMetaDataId;
    private static _getMetaData;
    private static _getPropsMetaData;
    private static _ensureMetadata;
    private _callCmpMethod;
    static toCamelCase(s: string): string;
    static toDash(s: string): string;
}
