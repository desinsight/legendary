import Image from "next/image";
import Link from "next/link";

interface ItemCardProps {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  creator: string;
}

export default function ItemCard({ id, title, imageUrl, price, creator }: ItemCardProps) {
  return (
    <Link href={`/item/${id}`}>
      <div className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
        <div className="relative aspect-square">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 truncate">{title}</h3>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">by {creator}</span>
            <span className="text-purple-400 font-semibold">{price} ETH</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
