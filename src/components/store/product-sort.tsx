"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ArrowUpAZ, ArrowDownZA } from "lucide-react";

export type ProductSort = "az" | "za";

type Props = {
  value: ProductSort;
  onChange: (value: ProductSort) => void;
};

export default function ProductSortSelect({ value, onChange }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="
            flex items-center gap-2
            rounded-full border
            px-4 py-2
            text-sm font-medium
            bg-white hover:bg-muted
            transition
          "
        >
          <span className="text-muted-foreground">Sort:</span>
          <span>{value === "az" ? "A → Z" : "Z → A"}</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-[140px]">
        <DropdownMenuItem onClick={() => onChange("az")}>
          <ArrowUpAZ className="mr-2 h-4 w-4" />
          A → Z
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onChange("za")}>
          <ArrowDownZA className="mr-2 h-4 w-4" />
          Z → A
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
