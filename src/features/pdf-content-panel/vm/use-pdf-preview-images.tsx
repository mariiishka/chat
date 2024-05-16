/* eslint-disable @typescript-eslint/no-floating-promises */
import {getPdfPreviewImages} from '@/shared/lib/document';
import {useEffect, useState} from 'react';

export const usePDFPreviewImages = (file: string) => {
  const [images, setImages] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const imagesList = await getPdfPreviewImages(file);
      setImages(imagesList);
      setLoading(false);
    })();
  }, [file]);

  return {images, isLoading: loading};
};
