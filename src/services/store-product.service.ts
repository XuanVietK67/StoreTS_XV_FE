import api from "@/lib/axios";

export const getProductsByStore = async (
  storeId: string,
  page = 1,
  limit = 10
) => {
  //   const res = await api.get(`store-product/${storeId}/products`, {
  //     params: {
  //       page,
  //       limit,
  //     },
  //   });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}store-product/${storeId}/products?page=${page}&limit=${limit}`,
    {
      cache: "no-store",
    }
  );

  if (!res) throw new Error("Failed to fetch stores");

  return res.json();
};
