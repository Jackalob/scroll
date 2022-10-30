import {
  useInfiniteQuery,
  QueryFunctionContext,
  QueryKey,
} from '@tanstack/react-query';

import client from '../utils/api-client';
import { Photo } from '../types';

const size = 2;

async function fetchPhotos({
  pageParam = 1,
}: QueryFunctionContext<QueryKey, any>) {
  const res = await client(`/list?page=${pageParam}&limit=${size}`);
  return res.data;
}

function usePhotos() {
  return useInfiniteQuery<Photo[]>({
    queryKey: ['photos'],
    queryFn: fetchPhotos,
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length + 1;
    },
  });
}

export { usePhotos };
