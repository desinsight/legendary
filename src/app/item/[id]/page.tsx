import ItemDetail from "@/components/ItemDetail";
import { dummyItems } from "@/data/dummy";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ItemDetailPage({
  params,
}: PageProps) {
  const { id } = await params;
  const item = dummyItems.find(item => item.id === id);
  
  if (!item) {
    return <div>Item not found</div>;
  }

  return <ItemDetail item={item} />;
} 