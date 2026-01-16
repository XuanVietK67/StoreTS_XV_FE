"use client";

import { useMemo, useState } from "react";
import ToppingFilter from "@/components/store/topping-filter";
import ProductList from "@/components/store/productList";
import { ProductInStore } from "@/types/store.type";


export default function StoreMenuClient({ products }: { products: ProductInStore[] }) {
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);

  // ✅ FILTER FRONTEND
  const filteredProducts = useMemo(() => {
    if (selectedToppings.length === 0) return products;

    return products.filter((product) =>
      selectedToppings.some((t) => product.product.toppings.includes(t))
    );
  }, [products, selectedToppings]);

  return (
    <div className="flex flex-col gap-8">
      {/* FILTER */}
      <div className="w-full">
        <ToppingFilter
          products={products}
          selected={selectedToppings}
          onChange={setSelectedToppings}
        />
      </div>

      {/* PRODUCTS */}
      <div className="w-full">
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}
