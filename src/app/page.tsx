import Image from "next/image";
import { PlusIcon } from "@heroicons/react/24/outline";
import CollectionView from "@/components/CollectionView";
import { dummyItems } from "@/data/dummy";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Collection Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">나의 소장 컬렉션</h1>
        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
          <PlusIcon className="h-5 w-5" />
          <span>새 아이템 추가</span>
        </button>
      </div>

      {/* Collection Grid */}
      <CollectionView items={dummyItems.map(item => ({
        id: item.id,
        title: item.title,
        imageUrl: item.imageUrl,
        price: 0,
        season: "2023 SS",
        edition: "Limited Edition",
        creator: {
          name: item.creator,
          imageUrl: `https://i.pravatar.cc/150?u=${item.id}` // 임시 프로필 이미지
        }
      }))} />

      {/* Featured Items */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">추천 아이템</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dummyItems.slice(0, 2).map(item => (
            <div key={item.id} className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
