import ItemCard from "./ItemCard";

interface Creator {
  name: string;
  imageUrl: string;
}

interface Item {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  season?: string;
  edition?: string;
  creator: Creator;
}

interface CollectionViewProps {
  items: Item[];
}

export default function CollectionView({ items }: CollectionViewProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Featured Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            creator={item.creator}
            season={item.season}
            edition={item.edition}
          />
        ))}
      </div>
    </div>
  );
}
