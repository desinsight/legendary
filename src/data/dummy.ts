import { Collection, Item } from '@/types/item';

export interface Item {
  id: string;
  title: string;
  imageUrl: string;
  images: {
    url: string;
    alt: string;
  }[];
  price: number;
  creator: string;
  description: string;
}

export const dummyItems: Item[] = [
  {
    id: "1",
    title: "Empty Frame #1",
    imageUrl: "/images/frame1.svg",
    images: [
      { url: "/images/frame1.svg", alt: "Empty frame with white background" },
      { url: "/images/frame2.svg", alt: "Empty frame with black background" },
      { url: "/images/frame3.svg", alt: "Empty frame with gradient background" }
    ],
    price: 0.5,
    creator: "Frame Studio",
    description: "Minimalist empty frame design with clean lines and modern aesthetic."
  },
  {
    id: "2",
    title: "Auction Frame",
    imageUrl: "/images/frame-auction.svg",
    images: [
      { url: "/images/frame-auction.svg", alt: "Auction frame with golden gradient" },
      { url: "/images/frame1.svg", alt: "Empty frame with white background" },
      { url: "/images/frame2.svg", alt: "Empty frame with black background" }
    ],
    price: 0.3,
    creator: "Frame Lab",
    description: "Special frame design for auction items with premium golden finish."
  },
  {
    id: "3",
    title: "AI Recommended Frame",
    imageUrl: "/images/frame-ai.svg",
    images: [
      { url: "/images/frame-ai.svg", alt: "AI frame with purple gradient" },
      { url: "/images/frame2.svg", alt: "Empty frame with black background" },
      { url: "/images/frame3.svg", alt: "Empty frame with gradient background" }
    ],
    price: 0.8,
    creator: "Frame Works",
    description: "AI-optimized frame design with intelligent color selection."
  },
  {
    id: "4",
    title: "Community Frame",
    imageUrl: "/images/frame-community.svg",
    images: [
      { url: "/images/frame-community.svg", alt: "Community frame with green gradient" },
      { url: "/images/frame3.svg", alt: "Empty frame with gradient background" },
      { url: "/images/frame1.svg", alt: "Empty frame with white background" }
    ],
    price: 0.6,
    creator: "Frame Community",
    description: "Community-inspired frame design promoting collaboration and sharing."
  }
];

export const collections: Collection[] = [
  {
    id: 1, 
    title: "Lux Street Collection", 
    desc: "스트리트 패션의 한계에 도전하다.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&w=400&q=80"
  },
  {
    id: 2, 
    title: "Rare Denim Archive", 
    desc: "전설의 데님, 희귀 아카이브.",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&w=400&q=80"
  },
  {
    id: 3, 
    title: "Avant-garde Runway", 
    desc: "아방가르드 컬렉션",
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&w=400&q=80"
  }
];

export const items: Item[] = [
  {
    id: 101, 
    collection: 1, 
    name: "Supreme x LV Box Logo",
    artist: "Supreme/LV", 
    price: 5200000,
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&w=400&q=80",
    highBid: 5600000,
    auction: true
  },
  {
    id: 102,
    collection: 1,
    name: "Nike Air Yeezy 2 Red October",
    artist: "Nike",
    price: 8900000,
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&w=400&q=80",
    highBid: 9200000,
    auction: true
  },
  {
    id: 201,
    collection: 2,
    name: "LEVI'S Type I 1940s",
    artist: "Levi's",
    price: 2700000,
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&w=400&q=80",
    highBid: null,
    auction: false
  },
  {
    id: 301,
    collection: 3,
    name: "Maison Margiela Artisanal Blazer",
    artist: "Margiela",
    price: 4100000,
    img: "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?auto=format&w=400&q=80",
    highBid: null,
    auction: false
  }
];
