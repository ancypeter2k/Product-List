import React, { useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import Loader from "./Loader";

export default function ProductGrid({
  products,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}) {
  const loadMoreRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (products.length === 0 && !isFetchingNextPage) {
    return (
      <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
        <p className="text-gray-500 text-lg">No products found matching your search.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div ref={loadMoreRef} className="py-8">
        {isFetchingNextPage && <Loader />}
        {!hasNextPage && products.length > 0 && (
          <p className="text-center text-gray-400 text-sm italic">
            You've reached the end of the catalog.
          </p>
        )}
      </div>
    </div>
  );
}