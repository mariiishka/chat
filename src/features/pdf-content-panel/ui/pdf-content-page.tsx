import {type ReactNode, forwardRef} from 'react';
import {type PageProps} from 'react-pdf';
import {PDFViewerPage} from '@/entities/pdf-viewer';
import {cn} from '@/shared/ui/utils';

type PDFContentPageProps = PageProps & {
  children?: ReactNode;
  className?: string;
  pageNumber: number;
};

export const PDFContentPage = forwardRef<HTMLDivElement, PDFContentPageProps>(
  ({className, children, pageNumber, ...props}, ref) => {
    return (
      <div ref={ref} className={cn('relative w-fit mx-auto mb-4', className)}>
        <PDFViewerPage pageNumber={pageNumber} {...props} />
        <div className="absolute top-0 z-20">{children}</div>
      </div>
    );
  }
);

PDFContentPage.displayName = 'PDFContentPage';
