import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/lib/api';
import type { ProductsResponse } from '@/types/product';

export function useProducts(search: string, sort: string) {
  return useInfiniteQuery<
    ProductsResponse,
    Error,
    ProductsResponse,
    [string, string, string],
    number
  >({
    queryKey: ['products', search, sort],
    queryFn: ({ pageParam }) =>
      fetchProducts({ pageParam, search, sort }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      const loaded = pages.length * lastPage.limit;
      return loaded < lastPage.total ? pages.length : undefined;
    },
  });
}
