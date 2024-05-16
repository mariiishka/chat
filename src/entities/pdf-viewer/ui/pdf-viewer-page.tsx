import {type ReactNode, forwardRef} from 'react';
import {Page, type PageProps} from 'react-pdf';

import {cn} from '@/shared/ui/utils';

import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

export type PDFViewerPageProps = {
  children?: ReactNode;
  wrapperClassName?: string;
} & PageProps;

export const PDFViewerPage = forwardRef<HTMLDivElement, PDFViewerPageProps>(
  ({children, className, wrapperClassName, ...props}, ref) => {
    return (
      <div ref={ref} className={cn('relative w-fit', wrapperClassName)}>
        <Page
          className={cn('border border-solid border-gray-300', className)}
          renderAnnotationLayer={true}
          {...props}
        />
        <div className="absolute top-0 z-20">{children}</div>
      </div>
    );
  }
);

PDFViewerPage.displayName = 'PDFViewerPage';
