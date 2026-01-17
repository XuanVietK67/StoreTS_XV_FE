"use client";

import ProductCard from "@/components/store/productCard";

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
  return (
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
  );
}
