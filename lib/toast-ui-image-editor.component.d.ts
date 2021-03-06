import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from "@angular/core";
import ImageEditor from "zelikov-tui-image-editor";
import { IAddTextEvent, IMousedownEvent, IGraphicObjectProps, IOptions } from "./toast-ui-image-editor.models";
import "tui-image-editor/dist/svg/icon-a.svg";
import "tui-image-editor/dist/svg/icon-b.svg";
import "tui-image-editor/dist/svg/icon-c.svg";
import "tui-image-editor/dist/svg/icon-d.svg";
export declare class ToastUiImageEditorComponent implements AfterViewInit, OnDestroy {
    includeUI: boolean;
    options: IOptions;
    addText: EventEmitter<IAddTextEvent>;
    mousedown: EventEmitter<IMousedownEvent>;
    objectActivated: EventEmitter<IGraphicObjectProps>;
    objectMoved: EventEmitter<IGraphicObjectProps>;
    objectScaled: EventEmitter<IGraphicObjectProps>;
    redoStackChanged: EventEmitter<number>;
    textEditing: EventEmitter<void>;
    undoStackChanged: EventEmitter<number>;
    editorRef: ElementRef;
    editorInstance: ImageEditor;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private addEventListeners;
    private removeEventListeners;
}
