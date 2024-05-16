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
  const {images, isLoading} = usePDFPreviewImages(pdfUrl);

  if (!panelSidebarOpen) {
    return null;
  }

  return (
    <div className="border-r border-gray-300 no-scrollbar overflow-y-auto max-h-[100%] h-[100%] bg-gray-100 flex w-[186px] flex-col gap-4 overflow-auto p-4">
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
