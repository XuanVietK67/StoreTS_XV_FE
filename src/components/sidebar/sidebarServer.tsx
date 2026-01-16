import SidebarClient from '@/components/sidebar/sidebarClient';
import { getStores } from '@/services/store.service';

export default async function SidebarServer() {
  const stores = await getStores({
    page: 1,
    limit: 50,
    sort: 'name',
  });

  return <SidebarClient stores={stores.data} />;
}
