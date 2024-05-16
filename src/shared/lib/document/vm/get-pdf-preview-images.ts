import {pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const getPdfPreviewImages = async (file: string) => {
  const imagesList: string[] = [];
  const pdf_doc = await pdfjs.getDocument(file).promise;
  const canvas = document.createElement('canvas');
  const pageCount = pdf_doc.numPages;

  for (let i = 0; i < pageCount; i++) {
    const page = await pdf_doc.getPage(i + 1);
    const viewport = page.getViewport({scale: 1});
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    await page.render({
      canvasContext: context as CanvasRenderingContext2D,
      viewport
    }).promise;
    imagesList.push(canvas.toDataURL('image/png'));
  }

  return imagesList;
};
