'use client';

import React from 'react';
import {Document, type DocumentProps} from 'react-pdf';
import {pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import {cn} from '@/shared/ui/utils';

export function PDFViewer({children, className, ...props}: DocumentProps) {
  return (
    <Document
      className={cn('w-fit', className)}
      // TODO: error & loading & noData components
      error={<div className="hidden" />}
      loading={<div className="hidden" />}
      noData={<div className="hidden" />}
      {...props}
    >
      {children}
    </Document>
  );
}
