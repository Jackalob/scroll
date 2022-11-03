import { memo } from 'react';

import type { Photo } from '../../types';
import { IconSpinner } from '../../assets/icons';
import STYLE from './style.module.scss';
import Box from '../../components/Box';

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
        <img
          className={STYLE.img}
          src={photo.download_url}
          alt=""
          loading="lazy"
        />
        <span className={STYLE.author}>Author: {photo.author}</span>
      </Box>
    </div>
  );
}

export default memo(ListItem);
