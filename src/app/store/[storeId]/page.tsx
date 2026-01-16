import ProductList from "@/components/store/productList";
import StoreHeader from "@/components/store/store-header";
import StoreMenuClient from "@/components/store/storeMenuClient";
import { getProductsByStore } from "@/services/store-product.service";
import { getStoreInformation } from "@/services/store.service";
import { DatagetProductsByStore, ProductInStore } from "@/types/store.type";

type Props = {
  params: {
    storeId: string;
  };
  searchParams: {
    page?: string;
    limit?: string;
  };
};

export default async function StoreDetailPage({ params, searchParams }: Props) {
  const { storeId } = await params;

  // const page = Number(searchParams.page ?? 1);
  // const limit = Number(searchParams.limit ?? 5);

  const res = await getProductsByStore(storeId, 1, 40);
  const data: ProductInStore[] = res[0].data;
  const store = await getStoreInformation(storeId);
  // const data = products[0].data.map(
  //   (item: { name: string; price: number; toppings: string[] }) => ({
  //     product: item.product,
  //   })
  // );
  console.log("Products:", res[0].data);

  return (
    <div className="min-h-screen bg-[#FAF7F2] p-6 w-full">
      <div className="w-full mx-auto space-y-8 ">
        <StoreHeader title={`🧋 Store ${store.name} Menu`} />
        <StoreMenuClient products={data } />
      </div>
    </div>
  );
}
