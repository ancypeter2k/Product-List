## Product Listing App

Interactive product catalog built with Next.js App Router, React, TypeScript, Tailwind CSS, and TanStack Query.

### Features
- **Search with debounce**: Type in the search field to filter products; requests are debounced to avoid unnecessary API calls.
- **Infinite scrolling**: Products load automatically as you scroll using `useInfiniteQuery` and an `IntersectionObserver`.
- **Sorting**: Sort by price (low → high, high → low) and name (A → Z, Z → A).
- **Robust data layer**: TanStack Query handles caching, pagination, error and loading states.
- **Responsive UI**: Modern ecommerce-style navbar, grid layout, and cards that adapt from mobile to desktop.

### Tech Stack
- **Framework**: Next.js 16 (App Router, TypeScript)
- **State/Data**: TanStack Query (`@tanstack/react-query`)
- **UI**: React, Tailwind CSS, `lucide-react` icons
- **API**: `https://dummyjson.com/products`

### Getting Started
```bash
npm install
npm run dev
```

Then open `http://localhost:3000` (or the port shown in the terminal).

### Key Files
- `app/page.tsx` – main product listing page and layout composition.
- `hooks/useProducts.ts` – infinite query hook for products.
- `hooks/useDebounce.ts` – debounced value hook for search.
- `components/Navbar.tsx` – ecommerce-style navbar with search and sorting.
- `components/ProductGrid.tsx` and `components/ProductCard.tsx` – responsive product grid and cards.
# Product-List
