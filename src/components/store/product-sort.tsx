"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ArrowDownZA, ArrowUpAZ } from "lucide-react";

export type ProductSort = "az" | "za";

type Props = {
  value: ProductSort;
  onChange: (value: ProductSort) => void;
};

export default function ProductSortSelect({ value, onChange }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="
            h-9 rounded-full px-4 text-sm font-semibold
            bg-emerald-500 text-white
            hover:bg-emerald-700
            flex items-center gap-2
          "
        >
          {value === "az" ? (
            <>
              <ArrowUpAZ className="h-4 w-4" />
              A → Z
            </>
          ) : (
            <>
              <ArrowDownZA className="h-4 w-4" />
              Z → A
            </>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="rounded-xl">
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
