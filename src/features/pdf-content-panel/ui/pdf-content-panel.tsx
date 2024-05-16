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

  const pdfUrl = usePDFEditorStore((state) => state.pdfUrl);
  const content = usePDFEditorStore((state) => state.content);
  const addToPDFPagesMap = usePDFEditorStore((state) => state.addToPDFPagesMap);

  const switchPanelSidebarOpen = () => {
    setPanelSidebarOpen((state) => !state);
  };

  const handleLoadSuccess = ({numPages}: {numPages: number}) => {
    setPages((state) => ({...state, pagesCount: numPages}));
  };

  return (
    <div className="relative max-h-[100%] flex w-full overflow-x-auto overflow-y-hidden rounded bg-gray-100">
      <div className="overflow-y-auto w-full overflow-x-auto">
        <div className="absolute left-0 top-0 bottom-0 overflox-y-hidden z-[20]">
          <PanelSidebar
            onPagePreviewClick={(index) => {
              setPages((state) => ({...state, currentPage: index + 1}));
            }}
            activePage={pages.currentPage}
            panelSidebarOpen={panelSidebarOpen}
          />
        </div>
        <div className="sticky top-4 z-[30] mx-auto flex w-fit gap-2 pb-4">
          <Button
            // disabled={isLoading}
            onClick={switchPanelSidebarOpen}
            className="mx-auto flex w-[220px] items-center justify-center gap-[8px] rounded-full bg-[#EEF2F9] py-[13px] text-black shadow-md transition hover:bg-slate-300"
          >
            <PanelLeft size={16} />
            <p className="text-left">
              {`${panelSidebarOpen ? 'Hide' : 'Show'} table of contents`}
            </p>
          </Button>
        </div>
        <PDFViewer
          file={pdfUrl}
          onLoadSuccess={handleLoadSuccess}
          className="mx-auto"
        >
          {pages.pagesCount &&
            Array.from({length: pages.pagesCount}).map((_, pageIndex) => (
              <PDFViewerPage
                key={pageIndex}
                pageIndex={pageIndex}
                wrapperClassName="mx-auto mb-4"
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
    </div>
  );
};
