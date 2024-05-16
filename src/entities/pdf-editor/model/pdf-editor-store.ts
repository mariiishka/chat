import {createStore} from 'zustand';

import {type DocContent} from '@/shared/lib/document';

export type PDFEditorState = {
  content: DocContent[];
  signers: [];
  pdfPagesMap: Map<number, HTMLDivElement>;
  pdfUrl: string;
};

export type PDFEditorActions = {
  addToPDFPagesMap: (pageIndex: number, node: HTMLDivElement | null) => void;
};

export type PDFEditorStore = PDFEditorState & PDFEditorActions;

export const createPDFEditorStore = ({
  content,
  signers,
  pdfUrl
}: {
  content: DocContent[];
  signers: [];
  pdfUrl: string;
}) => {
  return createStore<PDFEditorStore>((set, get) => ({
    content,
    signers,
    pdfUrl,
    pdfPagesMap: new Map(),
    addToPDFPagesMap: (pageIndex, node) => {
      if (node) {
      }
    }
  }));
};
