import {usePDFEditorStore} from '@/entities/pdf-editor';
import {usePDFPreviewImages} from '../vm/use-pdf-preview-images';
import {PanelSidebarImage} from './panel-sidebar-image';

export const PanelSidebar = ({
  panelSidebarOpen,
  activePage,
  onPagePreviewClick
}: {
  panelSidebarOpen: boolean;
  activePage: number;
  onPagePreviewClick: (index: number) => void;
}) => {
  const pdfUrl = usePDFEditorStore((state) => state.pdfUrl);
  const pdfPagesMap = usePDFEditorStore((state) => state.pdfPagesMap);
  const {images, isLoading} = usePDFPreviewImages(pdfUrl);

  if (!panelSidebarOpen) {
    return null;
  }

  return (
    <div className="no-scrollbar bg-[#F9FAFB] flex w-[186px] flex-col gap-4 overflow-auto border-r border-[#E5E7EB] p-4">
      {images &&
        images.map((image, i) => (
          <PanelSidebarImage
            key={`image-${i}`}
            active={i + 1 === activePage}
            pageNum={i + 1}
            onClick={() => onPagePreviewClick(i)}
            image={image}
          />
        ))}
    </div>
  );
};
