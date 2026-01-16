"use client";

import ProductSortSelect, {
  ProductSort,
} from "@/components/store/product-sort";
import ProductCard from "@/components/store/productCard";
import { useMemo, useState } from "react";

export type Props = {
  products: {
    product: {
      name: string;
      price: number;
      toppings: string[];
    };
  }[];
};

export default function ProductList({ products }: Props) {
  const [sort, setSort] = useState<ProductSort>("az");
  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) =>
      sort === "az"
        ? a.product.name.localeCompare(b.product.name)
        : b.product.name.localeCompare(a.product.name)
    );
  }, [products, sort]);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-end">
        <ProductSortSelect value={sort} onChange={setSort} />
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((item, i) => (
          <ProductCard
            key={i}
            name={item.product.name}
            price={item.product.price}
            toppings={item.product.toppings}
            isBestSeller={i === 0} // demo
          />
        ))}
      </div>
    </div>
  );
}
