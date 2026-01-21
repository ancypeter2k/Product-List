export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-10 w-full">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mb-2"></div>
      <p className="text-gray-500 text-sm font-medium">Loading products...</p>
    </div>
  );
}