import {type MutableRefObject} from 'react';
import {createStore} from 'zustand';

import {type DocContent} from '@/shared/lib/document';

export type PDFEditorState = {
  content: DocContent[];
  signers: [];
  pdfUrl: string;
  pdfPagesRef: MutableRefObject<Map<number, HTMLDivElement>>;
};

export type PDFEditorActions = {
  addToPDFPagesMap: (pageIndex: number, node: HTMLDivElement | null) => void;
};

export type PDFEditorStore = PDFEditorState & PDFEditorActions;

export const createPDFEditorStore = ({
  content,
  signers,
  pdfUrl,
  pdfPagesRef
}: {
  content: DocContent[];
  signers: [];
  pdfUrl: string;
  pdfPagesRef: MutableRefObject<Map<number, HTMLDivElement>>;
}) => {
  console.log('createStore');
  return createStore<PDFEditorStore>((set, get) => ({
    content,
    signers,
    pdfUrl,
    pdfPagesRef,
    addToPDFPagesMap: (pageIndex, node) => {
      const ref = get().pdfPagesRef;

      if (node) {
        ref.current.set(pageIndex, node);
      } else {
        ref.current.delete(pageIndex);
      }
    }
  }));
};
