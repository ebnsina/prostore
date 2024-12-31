import { Product } from "@/lib/types";
import Link from "next/link";
import Rating from "../rating/Rating";
import Badge from "../shared/Badge";

interface Props {
  item: Product;
}

export default function ProductCard({ item }: Props) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(item.price);

  return (
    <article
      key={item.slug}
      className="bg-white border border-slate-100 hover:border-cyan-500 rounded-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.images[0]}
        alt={item.name}
        className="w-full h-48 object-cover"
      />

      <Badge
        label={item.stock > 0 ? "In Stock" : "Out of Stock"}
        bgColor={item.stock > 0 ? "bg-green-50" : "bg-red-50"}
        textColor={item.stock > 0 ? "text-green-700" : "text-red-700"}
        borderColor={item.stock > 0 ? "border-green-100" : "border-red-100"}
      />

      <div className="flex flex-col flex-grow p-4">
        <div className="flex-grow">
          <Link href={`/products/${item.slug}`} className="hover:underline">
            <h3 className="text-lg font-medium mb-2">{item.name}</h3>
          </Link>

          <p className="text-sm text-gray-500 mb-2">{item.category}</p>

          <p className="text-gray-700 font-bold mb-4">{formattedPrice}</p>

          <Rating value={item.rating} reviewsCount={item.numReviews} />
        </div>

        <button
          className={`mt-4 block w-full text-sm font-semibold py-2 rounded-md ${
            item.stock > 0
              ? "bg-cyan-600 text-white hover:bg-cyan-700"
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
          disabled={item.stock <= 0}
        >
          {item.stock > 0 ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </article>
  );
}
