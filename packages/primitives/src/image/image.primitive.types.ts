export interface ImagePrimitiveProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Image source URL
   */
  src: string;
  /**
   * Alternative text for the image
   */
  alt: string;
}
