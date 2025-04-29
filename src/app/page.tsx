import Image from "next/image";
import { PlusIcon } from "@heroicons/react/24/outline";
import CollectionView from "@/components/CollectionView";
import { dummyItems } from "@/data/dummy";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-[70vh] mb-16 rounded-3xl overflow-hidden">
        <Image
          src="https://img.vogue.co.kr/vogue/2019/07/style_5d3678b06142e.jpg"
          alt="Hero background - Fashion Gallery"
          fill
          sizes="100vw"
          quality={90}
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 flex flex-col justify-center p-12">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Discover Unique<br />Legendary Fashion Collection
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-xl">
            Explore our curated collection of fashion items, from classic designs to limited editions.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors w-fit">
            Start Exploring
          </button>
        </div>
      </div>

      {/* Featured Collection */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Collection</h2>
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
            <PlusIcon className="h-5 w-5" />
            <span>새 아이템 추가</span>
          </button>
        </div>
        <CollectionView items={dummyItems.map(item => ({
          id: item.id,
          title: item.title,
          imageUrl: item.imageUrl,
          images: item.images,
          price: item.price,
          description: item.description,
          season: "2023 SS",
          edition: "Limited Edition",
          creator: {
            name: item.creator,
            imageUrl: `https://i.pravatar.cc/150?u=${item.id}`
          }
        }))} />
      </div>

      {/* Trending Items */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Trending Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyItems.slice(0, 3).map(item => (
            <div key={item.id} className="group relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-200 line-clamp-2">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-3xl font-bold mb-8">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: 'Collection',
              image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80'
            },
            {
              name: 'Auction',
              image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80'
            },
            {
              name: 'AI Generated',
              image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80'
            },
            {
              name: 'Community',
              image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=800&q=80'
            }
          ].map((category, index) => (
            <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                quality={90}
                unoptimized={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold drop-shadow-lg">{category.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
