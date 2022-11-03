import { useCallback } from 'react';
import { VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

import { usePhotos } from '../../api/photo';
import STYLE from './style.module.scss';
import ListItem from './ListItem';

function Home() {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } = usePhotos();

  const photos = data?.pages.flat() ?? [];
  const itemCount = hasNextPage ? photos.length + 1 : photos.length;
  const loadMoreItems = isFetchingNextPage
    ? () => {}
    : (fetchNextPage as () => void);
  const isItemLoaded = (index: number) => !hasNextPage || index < photos.length;

  const getItemSize = useCallback((index: number) => {
    if (index === 0) return 108; // h1 tag height
    return window.innerHeight * 0.8;
  }, []);

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
            className={`${STYLE.list} cy-scroll-loader`}
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
              // style is different in every render that makes memo to be ineffective
              // put style out of ListItem
              return (
                <div style={style}>
                  <ListItem
                    isLoaded={!isItemLoaded(index)}
                    photo={photo}
                    index={index}
                  />
                </div>
              );
            }}
          </List>
        )}
      </InfiniteLoader>
    </div>
  );
}

export default Home;
