import { Injectable } from '@angular/core';
import imageCompression from 'browser-image-compression';

@Injectable()
export class ImageHelper {
  async resizeBase64Image(base64Image: string) {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 200,
      useWebWorker: true,
    };

    const fileImage = await imageCompression.getFilefromDataUrl(
      base64Image,
      'avatar'
    );

    const compressImage = await imageCompression(fileImage, options);
    const base64 = await imageCompression.getDataUrlFromFile(compressImage);

    return base64;
  }
}
