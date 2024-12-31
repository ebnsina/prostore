import ProductList from "@/components/product/ProductList";
import sampleData from "@/lib/sample-data";

export default async function HomePage() {
  return (
    <div>
      <div className="container mx-auto py-10">
        <ProductList
          title="New Arrival"
          limit={4}
          items={sampleData.products}
        />
      </div>
    </div>
  );
}
