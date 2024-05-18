'use client';

import {createContext, useRef, useContext, type ReactNode} from 'react';
import {type StoreApi, useStore} from 'zustand';

import {
  type PDFEditorStore,
  createPDFEditorStore
} from '../model/pdf-editor-store';
import {type DocContent} from '@/shared/lib/document';

export const PDFEditorStoreContext =
  createContext<StoreApi<PDFEditorStore> | null>(null);

export const PDFEditorStoreProvider = ({
  children,
  content,
  signers,
  pdfUrl
}: {
  children: ReactNode;
  content: DocContent[];
  signers: [];
  pdfUrl: string;
}) => {
  const storeRef = useRef<StoreApi<PDFEditorStore>>();
  const pdfPagesRef = useRef<Map<number, HTMLDivElement>>(new Map());
  if (!storeRef.current) {
    storeRef.current = createPDFEditorStore({
      content,
      signers,
      pdfUrl,
      pdfPagesRef
    });
  }

  return (
    <PDFEditorStoreContext.Provider value={storeRef.current}>
      {children}
    </PDFEditorStoreContext.Provider>
  );
};

export const usePDFEditorStore = <T,>(
  selector: (store: PDFEditorStore) => T
): T => {
  const pdfEditorStoreContext = useContext(PDFEditorStoreContext);

  if (!pdfEditorStoreContext) {
    throw new Error(
      `usePDFEditorStore must be use within PDFEditorStoreProvider`
    );
  }

  return useStore(pdfEditorStoreContext, selector);
};
