import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

import STYLE from './style.module.scss';

function Img({
  className,
  src = '',
  ...rest
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return imgSrc === '' ? (
    <div className={className}>
      <Skeleton className={STYLE.skeleton} />
    </div>
  ) : (
    <img src={imgSrc} alt="" className={className} {...rest} />
  );
}

export default Img;
