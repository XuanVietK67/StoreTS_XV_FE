type Props = {
  title: string;
};

export default function StoreHeader({ title }: Props) {
  return (
    <h1 className="text-2xl font-semibold text-slate-800 text-center">
      {title}
    </h1>
  );
}
