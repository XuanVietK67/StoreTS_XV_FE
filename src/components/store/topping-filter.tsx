import { cn } from "@/lib/utils";

type Props = {
  products: any[];
  selected: string[];
  onChange: (value: string[]) => void;
};

export default function ToppingFilter({
  products,
  selected,
  onChange,
}: Props) {
  // lấy topping unique
  const toppings = Array.from(
    new Set(
      products.flatMap((p) => p.product.toppings)
    )
  );

  const toggle = (topping: string) => {
    if (selected.includes(topping)) {
      onChange(selected.filter((t) => t !== topping));
    } else {
      onChange([...selected, topping]);
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border">
      <h3 className="mb-4 text-lg font-semibold text-gray-800">
        🧋 Choose Toppings
      </h3>

      <div className="flex flex-wrap gap-3">
        {toppings.map((topping) => {
          const active = selected.includes(topping);

          return (
            <button
              key={topping}
              onClick={() => toggle(topping)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                "border hover:scale-105",
                active
                  ? "bg-green-100 text-green-700 border-green-300"
                  : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-green-50"
              )}
            >
              {topping}
            </button>
          );
        })}
      </div>
    </div>
  );
}
