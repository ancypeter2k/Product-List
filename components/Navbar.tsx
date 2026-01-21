"use client";

import React from "react";
import Link from "next/link";
import { ShoppingCart, User, Menu } from "lucide-react";
import SearchBar from "./SearchBar";
import SortSelect from "./SortSelect";

interface Props {
  search: string;
  onSearchChange: (v: string) => void;
  sort: string;
  onSortChange: (v: string) => void;
}

export default function Navbar({
  search,
  onSearchChange,
  sort,
  onSortChange,
}: Props) {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white p-2 text-gray-700 shadow-sm hover:bg-gray-50 md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-extrabold text-white shadow-sm">
                SM
              </span>
              <span className="text-lg font-extrabold tracking-tight text-gray-900">
                ShopMarket
              </span>
            </Link>

            <nav className="ml-4 hidden items-center gap-5 text-sm font-medium text-gray-600 md:flex">
              <Link className="hover:text-gray-900" href="/">
                Home
              </Link>
              <a className="hover:text-gray-900" href="#products">
                Products
              </a>
              <a className="hover:text-gray-900" href="#about">
                About
              </a>
            </nav>
          </div>

          <div className="flex flex-1 items-center justify-end gap-3 md:gap-4">
            <div className="hidden w-full max-w-xl md:block">
              <SearchBar value={search} onChange={onSearchChange} />
            </div>
            <SortSelect value={sort} onChange={onSortChange} />

            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white p-2 text-gray-700 shadow-sm hover:bg-gray-50"
                aria-label="Account"
              >
                <User className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white p-2 text-gray-700 shadow-sm hover:bg-gray-50"
                aria-label="Cart"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-gray-900 px-1.5 text-[10px] font-bold text-white">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="pb-3 md:hidden">
          <SearchBar value={search} onChange={onSearchChange} />
        </div>
      </div>
    </header>
  );
}


