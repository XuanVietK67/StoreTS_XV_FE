import api from '@/lib/axios';

export const getStores = async () => {
  const res = await api.get('/store');
  return res.data;
};

export const createStore = async (data: { name: string }) => {
  const res = await api.post('/stores', data);
  return res.data;
};
