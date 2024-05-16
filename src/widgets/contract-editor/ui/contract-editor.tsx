'use client';

import {PDFEditorStoreProvider} from '@/entities/pdf-editor';
import {PDFContentPanel} from '@/features/pdf-content-panel';

const Field = () => <>field</>;

export const ContractEditor = () => {
  return (
    <PDFEditorStoreProvider content={[]} signers={[]} pdfUrl="/test.pdf">
      <PDFContentPanel Field={Field} />
    </PDFEditorStoreProvider>
  );
};
