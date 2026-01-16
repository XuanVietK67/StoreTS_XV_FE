import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Props = {
  name: string;
  price: number;
  toppings: string[];
  isBestSeller?: boolean;
};

export default function ProductCard({
  name,
  price,
  toppings,
  isBestSeller,
}: Props) {
  return (
    <Card className="group rounded-2xl border border-[#E6EDE8] bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <CardHeader className="space-y-1">
        <div className="flex items-start justify-between">
          <CardTitle className="text-base font-semibold text-[#2F3E34]">
            {name}
          </CardTitle>

          {isBestSeller && (
            <Badge className="bg-[#A47148] text-white text-xs rounded-full">
              Best seller
            </Badge>
          )}
        </div>

        <p className="text-sm font-semibold text-[#4D7C5A]">
          ${price.toFixed(2)}
        </p>
      </CardHeader>

      <CardContent className="space-y-2">
        <p className="text-xs text-muted-foreground">Toppings</p>

        <div className="flex flex-wrap gap-2">
          {toppings.map((topping) => (
            <span
              key={topping}
              className="rounded-full bg-[#EEF4F0] px-3 py-1 text-xs text-[#4D7C5A]"
            >
              {topping}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <button className="w-full rounded-xl bg-[#4D7C5A] py-2 text-sm font-medium text-white transition hover:bg-[#3F664A]">
          Add to menu
        </button>
      </CardFooter>
    </Card>
  );
}
