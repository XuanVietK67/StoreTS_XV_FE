type Props = {
  params: {
    storeId: string;
  };
};

export default async function StoreDetailPage({ params }: Props) {
  const { storeId } = params;

  // gọi API backend
  // const store = await getStoreById(storeId);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Store detail</h1>
      <p className="text-muted-foreground mt-2">
        Store ID: <span className="font-mono">{storeId}</span>
      </p>
    </div>
  );
}
