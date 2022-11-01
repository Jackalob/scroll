import { VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

import { usePhotos } from '../../api/photo';
import { Photo } from '../../types';
import Box from '../../components/Box';
import { IconSpinner } from '../../assets/icons';
import STYLE from './style.module.scss';

type ListItemProps = {
  isLoaded: boolean;
  style: React.CSSProperties;
  photo: Photo;
  index: number;
};

function generateListItem({ isLoaded, style, photo, index }: ListItemProps) {
  if (index === 0) {
    return <h1 className={STYLE.title}>Infinite Scroll</h1>;
  }
  if (isLoaded) {
    return (
      <div style={style}>
        <Box>
          <IconSpinner className={STYLE.spinner} />
        </Box>
      </div>
    );
  }
  return (
    <div style={style}>
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
    </div>
  );
}

function Home() {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } = usePhotos();

  const photos = data?.pages.flat() ?? [];
  const itemCount = hasNextPage ? photos.length + 1 : photos.length;
  const loadMoreItems = isFetchingNextPage
    ? () => {}
    : (fetchNextPage as () => void);
  const isItemLoaded = (index: number) => !hasNextPage || index < photos.length;
  const getItemSize = (index: number) => {
    if (index === 0) return 108; // h1 tag height
    return window.innerHeight * 0.8;
  };

  return (
    <div className={STYLE.container}>
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={itemCount}
        loadMoreItems={loadMoreItems}
        threshold={0}
      >
        {({ onItemsRendered, ref }) => (
          <List
            className={STYLE.list}
            ref={ref}
            itemCount={itemCount}
            estimatedItemSize={window.innerHeight * 0.8}
            itemSize={getItemSize}
            onItemsRendered={onItemsRendered}
            height={window.innerHeight}
            width="100%"
          >
            {({ index, style }) => {
              const photo = photos[index];
              return generateListItem({
                isLoaded: !isItemLoaded(index),
                style,
                photo,
                index,
              });
            }}
          </List>
        )}
      </InfiniteLoader>
    </div>
  );
}

export default Home;
