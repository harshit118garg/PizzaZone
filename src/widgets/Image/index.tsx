import { LazyLoadImage } from "react-lazy-load-image-component";

interface ImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
}

export default function Image(imageObj: ImageProps) {
  return (
    <>
      <LazyLoadImage className="lazy-image" alt={imageObj.alt} src={imageObj.src} />
    </>
  );
}
