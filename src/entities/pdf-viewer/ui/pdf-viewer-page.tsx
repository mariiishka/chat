import {type ReactNode, forwardRef} from 'react';
import {Page, type PageProps} from 'react-pdf';

import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

export type PDFViewerPageProps = {children?: ReactNode} & PageProps;

export const PDFViewerPage = forwardRef<HTMLDivElement, PDFViewerPageProps>(
  ({children, ...props}, ref) => {
    return (
      <div ref={ref} className="relative w-fit">
        <Page
          className="border border-solid border-gray-400"
          renderAnnotationLayer={true}
          {...props}
        />
        <div className="absolute top-0 z-20">{children}</div>
      </div>
    );
  }
);

PDFViewerPage.displayName = 'PDFViewerPage';
