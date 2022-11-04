import { memo } from 'react';

import STYLE from './style.module.scss';
import type { Photo } from '../../types';
import { IconSpinner } from '../../assets/icons';
import Box from '../../components/Box';
import Img from '../../components/Img';

type ListItemProps = {
  isLoaded: boolean;
  photo: Photo;
  index: number;
};

function ListItem({ isLoaded, photo, index }: ListItemProps) {
  if (index === 0) {
    return <h1 className={STYLE.title}>Infinite Scroll</h1>;
  }
  if (isLoaded) {
    return (
      <Box>
        <span className="cy-loading">
          <IconSpinner className={STYLE.spinner} />
        </span>
      </Box>
    );
  }
  return (
    <div className={STYLE.wrapper}>
      <Box>
        <div className={STYLE['img-wrapper']}>
          <Img
            className={STYLE.img}
            src={photo.download_url}
            alt=""
            loading="lazy"
          />
        </div>
        <span className={STYLE.author}>Author: {photo.author}</span>
      </Box>
    </div>
  );
}

export default memo(ListItem);
