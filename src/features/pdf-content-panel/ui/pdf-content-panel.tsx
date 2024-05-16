'use client';

import {useState, type FC} from 'react';
import {PanelLeft} from 'lucide-react';

import {Button} from '@/shared/ui/button';
import {type DocContent} from '@/shared/lib/document';
import {PDFViewer, PDFViewerPage} from '@/entities/pdf-viewer';
import {usePDFEditorStore} from '@/entities/pdf-editor';
import {PanelSidebar} from './panel-sidebar';

export const PDFContentPanel = ({Field}: {Field: FC<DocContent>}) => {
  const [panelSidebarOpen, setPanelSidebarOpen] = useState(false);
  const [pages, setPages] = useState<{
    currentPage: number;
    pagesCount: null | number;
  }>({currentPage: 1, pagesCount: null});

  const content = usePDFEditorStore((state) => state.content);
  const pdfUrl = usePDFEditorStore((state) => state.pdfUrl);
  const addToPDFPagesMap = usePDFEditorStore((state) => state.addToPDFPagesMap);

  const switchPanelSidebarOpen = () => {
    setPanelSidebarOpen((state) => !state);
  };

  const handleLoadSuccess = ({numPages}: {numPages: number}) => {
    setPages((state) => ({...state, pagesCount: numPages}));
  };

  return (
    <div className="relative flex w-full overflow-x-auto overflow-y-hidden rounded border border-solid border-[#E5E7EB] bg-gray-100">
      <div className="absolute left-0 top-0 z-[20]">
        <PanelSidebar
          onPagePreviewClick={() => {}}
          activePage={pages.currentPage}
          panelSidebarOpen={panelSidebarOpen}
        />
      </div>
      <div className="sticky top-4 z-[30] mx-auto flex w-fit gap-2 pb-4">
        <Button
          // disabled={isLoading}
          onClick={switchPanelSidebarOpen}
          className="mx-auto flex w-[220px] items-center justify-center gap-[8px] rounded-full bg-[#EEF2F9] py-[13px] text-black shadow-md transition hover:bg-gray-300"
        >
          <PanelLeft size={16} />
          <p className="text-left">
            {`${panelSidebarOpen ? 'Hide' : 'Show'} table of contents`}
          </p>
        </Button>
      </div>
      <PDFViewer file={pdfUrl} onLoadSuccess={handleLoadSuccess}>
        {pages.pagesCount &&
          Array.from({length: pages.pagesCount}).map((_, pageIndex) => (
            <PDFViewerPage
              key={pageIndex}
              pageIndex={pageIndex}
              ref={(node) => addToPDFPagesMap(pageIndex, node)}
            >
              {content
                .filter((field) => field.position.page === pageIndex + 1)
                .map((field) => (
                  <Field key={field.id} {...field} />
                ))}
            </PDFViewerPage>
          ))}
      </PDFViewer>
    </div>
  );
};
