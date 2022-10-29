import { QueryClient, DefaultOptions } from '@tanstack/react-query';

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
  },
};

const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});

export { queryClient };
