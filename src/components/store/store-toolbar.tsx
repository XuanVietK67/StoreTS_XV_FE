"use client";

import { FilterButton } from "@/components/store/filterToppingsButton";
import ProductSortSelect, {
  ProductSort,
} from "@/components/store/product-sort";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";

type Props = {
  children: React.ReactNode; // topping filter
  sort: ProductSort;
  onSortChange: (v: ProductSort) => void;
};

export function ProductToolbar({ children, sort, onSortChange }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="bg-white rounded-2xl border p-5 mb-6 shadow-sm space-y-4">
      {/* Top row */}
      <div className="flex items-center justify-between gap-1 rounded-full border bg-muted/40 p-1">
        <FilterButton open={open} onToggle={setOpen} />
        <ProductSortSelect value={sort} onChange={onSortChange} />
      </div>

      {/* Filters */}
       {open && <div>{children}</div>}
    </div>
  );
}
