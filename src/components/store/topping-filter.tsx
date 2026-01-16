import { Checkbox } from "@/components/ui/checkbox";
import { useMemo } from "react";

type Props = {
  selected: string[];
  onChange: (value: string[]) => void;
  products: {
    product: {
      name: string;
      price: number;
      toppings: string[];
    };
  }[];
};

export default function ToppingFilter({ selected, onChange, products }: Props) {
  const toggle = (topping: string) => {
    if (selected.includes(topping)) {
      onChange(selected.filter((t) => t !== topping));
    } else {
      onChange([...selected, topping]);
    }
  };

  const allToppings = useMemo(() => {
    const set = new Set<string>();

    products.forEach((p) => {
      p.product.toppings?.forEach((t) => set.add(t));
    });

    return Array.from(set).sort();
  }, [products]);

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm space-y-4">
      <h3 className="font-semibold text-sm">Toppings</h3>

      <div className="grid grid-cols-2 gap-3">
        {allToppings.map((topping) => (
          <label
            key={topping}
            className="flex items-center gap-2 text-sm cursor-pointer"
          >
            <Checkbox
              checked={selected.includes(topping)}
              onCheckedChange={() => toggle(topping)}
            />
            {topping}
          </label>
        ))}
      </div>

      {selected.length > 0 && (
        <button
          onClick={() => onChange([])}
          className="text-xs text-muted-foreground hover:underline"
        >
          Clear filter
        </button>
      )}
    </div>
  );
}
