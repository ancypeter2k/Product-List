import { ProductResponse } from "@/types/product";

const BASE_URL = "https://dummyjson.com/products";

interface FetchProductsParams {
  pageParam?: number;
  search: string;
  sort: string;
}

export async function fetchProducts({
  pageParam = 0,
  search,
  sort,
}: FetchProductsParams): Promise<ProductResponse> {
  const limit = 12;
  const skip = pageParam * limit;

  let url = `${BASE_URL}?limit=${limit}&skip=${skip}`;

  if (search) {
    url = `${BASE_URL}/search?q=${search}&limit=${limit}&skip=${skip}`;
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");

  const data: ProductResponse = await res.json();

  if (sort === "price-asc") data.products.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") data.products.sort((a, b) => b.price - a.price);
  if (sort === "name-asc")
    data.products.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "name-desc")
    data.products.sort((a, b) => b.title.localeCompare(a.title));

  return data;
}
