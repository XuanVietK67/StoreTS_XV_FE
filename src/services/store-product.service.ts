import { DatagetProductsByStoreWrap } from "@/types/store.type";

export const getProductsByStore = async (
  storeId: string,
  page = 1,
  limit = 10
): Promise<DatagetProductsByStoreWrap> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}store-product/${storeId}/products?page=${page}&limit=${limit}`,
    {
      cache: "no-store",
    }
  );

  if (!res) throw new Error("Failed to fetch stores");

  return res.json();
};
