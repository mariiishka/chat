'use client';

import React from 'react';
import {Document, type DocumentProps, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import {cn} from '@/shared/ui/utils';

const options = {workerSrc: '/pdf.worker.js'};

export function PDFViewer({children, className, ...props}: DocumentProps) {
  return (
    <Document
      options={options}
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
