import React from "react";
import type { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="relative pt-[100%] bg-gray-50">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-contain p-4"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col grow">
        <span className="text-xs font-medium text-blue-600 uppercase tracking-wider mb-1">
          {product.category}
        </span>
        <h3 className="font-semibold text-gray-800 line-clamp-2 mb-2 grow">
          {product.title}
        </h3>
        <div className="flex items-center justify-between mt-auto">
          <p className="text-lg font-bold text-gray-900">${product.price}</p>
          <button className="text-sm bg-gray-900 text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors">
            View
          </button>
        </div>
      </div>
    </div>
  );
}