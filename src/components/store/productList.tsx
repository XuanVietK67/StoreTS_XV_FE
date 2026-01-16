"use client";

import ProductCard from "@/components/store/productCard";
import ToppingFilter from "@/components/store/topping-filter";
import { useMemo, useState } from "react";

type Props = {
  products: {
    product: {
      name: string;
      price: number;
      toppings: string[];
    };
  }[];
};

export default function ProductList({ products }: Props) {
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);

  const filteredProducts = useMemo(() => {
    if (selectedToppings.length === 0) return products;
    return products.filter((item) =>
      selectedToppings.every((topping) =>
        item.product.toppings.includes(topping)
      )
    );
  }, [products, selectedToppings]);
  return (
    // <div className="grid grid-cols-12 gap-6">
    //   <div className="col-span-12 md:col-span-3">
    //     <ToppingFilter
    //       selected={selectedToppings}
    //       onChange={setSelectedToppings}
    //       products={products}
    //     />
    //   </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((item, i) => (
          <ProductCard
            key={i}
            name={item.product.name}
            price={item.product.price}
            toppings={item.product.toppings}
            isBestSeller={i === 0} // demo
          />
        ))}
      </div>
    // </div>
  );
}
