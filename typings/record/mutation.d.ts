import { MaskInputOptions, SlimDOMOptions, MaskTextFn, MaskInputFn } from '@livecycle.io/rrweb-snapshot';
import { mutationRecord, blockClass, maskTextClass, mutationCallBack, Mirror } from '../types';
import { IframeManager } from './iframe-manager';
import { ShadowDomManager } from './shadow-dom-manager';
export default class MutationBuffer {
    private frozen;
    private locked;
    private texts;
    private attributes;
    private removes;
    private mapRemoves;
    private movedMap;
    private addedSet;
    private movedSet;
    private droppedSet;
    private emissionCallback;
    private blockClass;
    private blockSelector;
    private maskTextClass;
    private maskTextSelector;
    private inlineStylesheet;
    private maskInputOptions;
    private maskTextFn;
    private maskInputFn;
    private recordCanvas;
    private slimDOMOptions;
    private doc;
    private mirror;
    private iframeManager;
    private shadowDomManager;
    init(cb: mutationCallBack, blockClass: blockClass, blockSelector: string | null, maskTextClass: maskTextClass, maskTextSelector: string | null, inlineStylesheet: boolean, maskInputOptions: MaskInputOptions, maskTextFn: MaskTextFn | undefined, maskInputFn: MaskInputFn | undefined, recordCanvas: boolean, slimDOMOptions: SlimDOMOptions, doc: Document, mirror: Mirror, iframeManager: IframeManager, shadowDomManager: ShadowDomManager): void;
    freeze(): void;
    unfreeze(): void;
    isFrozen(): boolean;
    lock(): void;
    unlock(): void;
    processMutations: (mutations: mutationRecord[]) => void;
    emit: () => void;
    private processMutation;
    private genAdds;
}
