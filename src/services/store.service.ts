import api from "@/lib/axios";
import { GetStoresParams } from "@/types/store.type";

export const getStores = async (params: GetStoresParams) => {
  const query = new URLSearchParams({
    page: params.page.toString(),
    limit: params.limit.toString(),
    search: params.search ?? "",
    sort: params.sort ?? "name",
  });
  const res = await api.get(`store?${query.toString()}`);

  if (!res) throw new Error('Failed to fetch stores');

  return res.data;
};

export const createStore = async (data: { name: string }) => {
  const res = await api.post("/stores", data);
  return res.data;
};
