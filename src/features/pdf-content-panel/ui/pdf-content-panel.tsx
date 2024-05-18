'use client';

import {useState, type FC} from 'react';
import {PanelLeft} from 'lucide-react';

import {Button} from '@/shared/ui/button';
import {type DocContent} from '@/shared/lib/document';
import {PDFViewer} from '@/entities/pdf-viewer';
import {IntersectionObserverWrapper} from '@/entities/intersection-observer';
import {usePDFEditorStore} from '@/entities/pdf-editor';
import {PanelSidebar} from './panel-sidebar';
import {PDFContentPage} from './pdf-content-page';

export const PDFContentPanel = ({Field}: {Field: FC<DocContent>}) => {
  const [pageLoadSuccess, setPageLoadSuccess] = useState(false);
  const [panelSidebarOpen, setPanelSidebarOpen] = useState(true);
  const [pages, setPages] = useState<{
    currentPage: number;
    pagesCount: null | number;
  }>({currentPage: 1, pagesCount: null});

  const pdfUrl = usePDFEditorStore((state) => state.pdfUrl);
  const content = usePDFEditorStore((state) => state.content);
  const pagesRef = usePDFEditorStore((state) => state.pdfPagesRef);
  const addToPDFPagesMap = usePDFEditorStore((state) => state.addToPDFPagesMap);

  const switchPanelSidebarOpen = () => {
    setPanelSidebarOpen((state) => !state);
  };

  const handleLoadSuccess = ({numPages}: {numPages: number}) => {
    setPages((state) => ({...state, pagesCount: numPages}));
  };

  const handlePagePreviewClick = (pageIndex: number) => {
    setPages((state) => ({...state, currentPage: pageIndex + 1}));
    pagesRef.current?.get(pageIndex)?.scrollIntoView({block: 'start'});
  };

  const handlePageLoadSuccess = () => {
    setPageLoadSuccess(true);
  };

  const handlePageIntersecting = (
    isIntersecting: boolean,
    pageNumber: number
  ) => {
    if (isIntersecting && pageLoadSuccess) {
      setPages((state) => ({
        ...state,
        currentPage: pageNumber
      }));
    }
  };

  return (
    <div className="relative max-h-[100%] flex w-full overflow-x-auto overflow-y-hidden rounded bg-gray-100">
      <div className="overflow-y-auto w-full overflow-x-auto">
        <div className="absolute left-0 top-0 bottom-0 overflox-y-hidden z-[20]">
          <PanelSidebar
            onPagePreviewClick={handlePagePreviewClick}
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
              <IntersectionObserverWrapper
                onChange={(isIntersecing) =>
                  handlePageIntersecting(isIntersecing, pageIndex + 1)
                }
                key={pageIndex}
              >
                <PDFContentPage
                  pageNumber={pageIndex + 1}
                  ref={(node) => {
                    addToPDFPagesMap(pageIndex, node);
                  }}
                  onLoadSuccess={() =>
                    pageIndex === 0 && handlePageLoadSuccess()
                  }
                >
                  {content
                    .filter((field) => field.position.page === pageIndex + 1)
                    .map((field) => (
                      <Field key={field.id} {...field} />
                    ))}
                </PDFContentPage>
              </IntersectionObserverWrapper>
            ))}
        </PDFViewer>
      </div>
    </div>
  );
};
