import React from "react";
import { ChevronDown } from "lucide-react";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export default function SortSelect({ value, onChange }: Props) {
  return (
    <div className="relative min-w-[160px]">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none block w-full px-4 py-2.5 border border-gray-300 rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all sm:text-sm cursor-pointer"
      >
        <option value="">Default Sorting</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
        <ChevronDown className="h-4 w-4" />
      </div>
    </div>
  );
}