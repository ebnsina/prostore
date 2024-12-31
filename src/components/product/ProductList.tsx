import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

interface Props {
  title?: string;
  limit?: number;
  items: Product[];
}

export default function ProductList({ title, limit, items }: Props) {
  const data = limit ? items.slice(0, limit) : items;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>

      {items?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.map((item) => (
            <ProductCard key={item.name} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No products found.</p>
      )}
    </div>
  );
}
