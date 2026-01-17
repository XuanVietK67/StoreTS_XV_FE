"use client";

import { useMemo, useState } from "react";
import ToppingFilter from "@/components/store/topping-filter";
import ProductList from "@/components/store/productList";
import { ProductInStore } from "@/types/store.type";
import { ProductSort } from "@/components/store/product-sort";
import { ProductToolbar } from "@/components/store/store-toolbar";

export default function StoreMenuClient({
  products,
}: {
  products: ProductInStore[];
}) {
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [sort, setSort] = useState<ProductSort>("az");

  // ✅ FILTER FRONTEND
  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (selectedToppings.length > 0) {
      list = list.filter((product) =>
        selectedToppings.some((t) => product.product.toppings.includes(t))
      );
    }

    list.sort((a, b) =>
      sort === "az"
        ? a.product.name.localeCompare(b.product.name)
        : b.product.name.localeCompare(a.product.name)
    );

    return list;
  }, [products, selectedToppings, sort]);

  return (
    <div className="flex flex-col gap-8">
      <div className="w-full">
        <ProductToolbar sort={sort} onSortChange={setSort}>
          <ToppingFilter
            products={products}
            selected={selectedToppings}
            onChange={setSelectedToppings}
          />
        </ProductToolbar>
      </div>

      <div className="w-full">
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}
