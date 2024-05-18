import {Page, type PageProps} from 'react-pdf';

import {cn} from '@/shared/ui/utils';

import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

export const PDFViewerPage = ({className, ...props}: PageProps) => {
  return (
    <Page
      className={cn('border border-solid border-gray-300', className)}
      renderAnnotationLayer={true}
      renderTextLayer={true}
      // TODO: error & loading & noData components
      error={<div className="hidden" />}
      loading={<div className="hidden" />}
      noData={<div className="hidden" />}
      {...props}
    />
  );
};
