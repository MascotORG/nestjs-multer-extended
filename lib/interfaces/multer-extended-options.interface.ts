import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

export enum Format {
  JPEG = 'jpeg',
  JPG = 'jpg',
  PNG = 'png',
  GIF = 'gif',
  WEBP = 'webp',
}

export interface Formatting {
  format: Format;
  quality?: number;
}

export interface ResizeOptions {
  width: number;
  height: number;
}

export interface MultipleSizeOptions {
  suffix: string;
  width?: number;
  height?: number;
}

export interface MulterExtendedOptions extends Pick<MulterOptions, 'fileFilter' | 'limits'> {
  dynamicPath?: string | string[];
  randomFilename?: boolean;
  resize?: ResizeOptions;
  resizeMultiple?: MultipleSizeOptions[];
  thumbnail?: MultipleSizeOptions;
  format?: Format;
  quality?: number;
}
