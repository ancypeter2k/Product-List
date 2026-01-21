"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import Loader from "../components/Loader";
import { useDebounce } from "../hooks/useDebounce";
import { useProducts } from "../hooks/useProducts";
import { AlertCircle, RefreshCcw } from "lucide-react";

export default function App() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const debouncedSearch = useDebounce(search, 400);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    error,
    isFetchingNextPage,
    refetch
  } = useProducts(debouncedSearch, sort);

  const products = data?.pages.flatMap((page) => page.products) ?? [];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased">
      <Navbar
        search={search}
        onSearchChange={setSearch}
        sort={sort}
        onSortChange={setSort}
      />
      <main id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader />
          </div>
        ) : isError ? (
          <div className="max-w-md mx-auto mt-12 p-6 bg-red-50 rounded-2xl border border-red-100 text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-lg font-bold text-red-800 mb-2">Something went wrong</h2>
            <p className="text-red-600 mb-6">{error?.message || "Could not load products. Please check your connection."}</p>
            <button 
              onClick={() => refetch()}
              className="flex items-center justify-center gap-2 w-full bg-red-600 text-white py-2.5 rounded-xl font-semibold hover:bg-red-700 transition-colors"
            >
              <RefreshCcw className="h-4 w-4" />
              Try Again
            </button>
          </div>
        ) : (
          <ProductGrid
            products={products}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        )}
      </main>
    </div>
  );
}