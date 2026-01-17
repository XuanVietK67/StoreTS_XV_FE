import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";

type Props = {
  open: boolean;
  onToggle: (v: boolean) => void;
};

export function FilterButton({ open, onToggle }: Props) {
  return (
    <Button
      variant="outline"
      onClick={() => onToggle(!open)}
      className={clsx(
        "h-9 rounded-full px-4 text-sm font-medium flex items-center gap-2",
        open && "border-emerald-500 text-emerald-600 bg-emerald-50"
      )}
    >
      Filter by toppings
      {open ? (
        <ChevronUp className="h-4 w-4" />
      ) : (
        <ChevronDown className="h-4 w-4" />
      )}
    </Button>
  );
}
