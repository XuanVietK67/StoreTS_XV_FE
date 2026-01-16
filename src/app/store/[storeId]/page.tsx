import ProductList from "@/components/store/productList";
import StoreHeader from "@/components/store/store-header";
import { getProductsByStore } from "@/services/store-product.service";
import { getStoreInformation } from "@/services/store.service";

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

  const products = await getProductsByStore(storeId, 1, 40);
  const store = await getStoreInformation(storeId);
  console.log("Products:", store);

  return (
    <div className="min-h-screen bg-[#FAF7F2] p-6 w-full">
      <div className="w-full mx-auto space-y-8 ">
        <StoreHeader title={`🧋 Store ${store.name} Menu`} />
        <ProductList products={products[0].data} />
        {/* <StorePagination ... /> */}
      </div>
    </div>
  );
}
