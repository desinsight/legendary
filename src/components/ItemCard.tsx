import Image from "next/image";
import Link from "next/link";
import { HeartIcon } from "@heroicons/react/24/outline";

interface ItemCardProps {
  id: string;
  title: string;
  imageUrl: string;
  season?: string;
  edition?: string;
  creator: {
    name: string;
    imageUrl: string;
  };
}

export default function ItemCard({ id, title, imageUrl, season, edition, creator }: ItemCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <Link href={`/item/${id}`}>
        <div className="relative aspect-square">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-500 mb-4">
            {season && `${season}, `}{edition}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={creator.imageUrl}
                  alt={creator.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm text-gray-600">by {creator.name}</span>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <HeartIcon className="h-6 w-6 text-gray-400 hover:text-red-500" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
