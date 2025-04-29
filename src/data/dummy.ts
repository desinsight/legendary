import { Collection, Item } from '@/types/item';

export const dummyItems: Item[] = [
  {
    id: "1",
    title: "Vintage Denim Jacket",
    imageUrl: "https://feature.com/cdn/shop/files/Escapade-Reversible-Denim-Jacket---Blue-BWAJERD-3-XL-03-24-24-Feature-KN.jpg?v=1711651546&width=750",
    images: [
      { url: "https://feature.com/cdn/shop/files/Escapade-Reversible-Denim-Jacket---Blue-BWAJERD-3-XL-03-24-24-Feature-KN.jpg?v=1711651546&width=750", alt: "Classic denim jacket front view" },
      { url: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&w=800&q=80", alt: "Denim jacket detail" },
      { url: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&w=800&q=80", alt: "Denim jacket styled" }
    ],
    price: 850000,
    creator: "Legendary Vintage",
    description: "1970년대 빈티지 데님 자켓. 오리지널 워싱과 자연스러운 색감이 특징."
  },
  {
    id: "2",
    title: "Limited Archive Sneakers",
    imageUrl: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&w=800&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&w=800&q=80", alt: "Archive sneakers main view" },
      { url: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&w=800&q=80", alt: "Sneakers detail" },
      { url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&w=800&q=80", alt: "Sneakers side view" }
    ],
    price: 1200000,
    creator: "Legendary Archive",
    description: "2010년 한정판 아카이브 스니커즈. 오리지널 박스와 태그 포함."
  },
  {
    id: "3",
    title: "Avant-garde Leather Jacket",
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&w=800&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&w=800&q=80", alt: "Leather jacket front view" },
      { url: "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&w=800&q=80", alt: "Leather jacket detail" },
      { url: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&w=800&q=80", alt: "Leather jacket styled" }
    ],
    price: 2300000,
    creator: "Legendary Avant-garde",
    description: "아방가르드 디자인의 레더 자켓. 유니크한 커팅과 실루엣이 특징."
  },
  {
    id: "4",
    title: "Heritage Military Coat",
    imageUrl: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?auto=format&w=800&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?auto=format&w=800&q=80", alt: "Military coat front view" },
      { url: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?auto=format&w=800&q=80", alt: "Military coat detail" },
      { url: "https://images.unsplash.com/photo-1551794840-8ae3b9c814d8?auto=format&w=800&q=80", alt: "Military coat styled" }
    ],
    price: 1800000,
    creator: "Legendary Heritage",
    description: "1960년대 밀리터리 코트. 오리지널 버튼과 라이닝 보존 상태 우수."
  }
];

export const collections: Collection[] = [
  {
    id: 1, 
    title: "Vintage Archive", 
    desc: "시대를 초월한 빈티지 명품",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&w=800&q=80"
  },
  {
    id: 2, 
    title: "Limited Editions", 
    desc: "한정판 컬렉터블 아이템",
    img: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&w=800&q=80"
  },
  {
    id: 3, 
    title: "Avant-garde Selection", 
    desc: "실험적인 디자인 컬렉션",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&w=800&q=80"
  }
];

export const items: Item[] = [
  {
    id: "101",
    title: "Supreme x LV Box Logo",
    imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&w=400&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&w=400&q=80", alt: "Supreme x LV Box Logo" }
    ],
    price: 5200000,
    creator: "Supreme/LV",
    description: "Supreme와 Louis Vuitton의 콜라보레이션 한정판 박스 로고 티셔츠"
  },
  {
    id: "102",
    title: "Nike Air Yeezy 2 Red October",
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&w=400&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&w=400&q=80", alt: "Nike Air Yeezy 2 Red October" }
    ],
    price: 8900000,
    creator: "Nike",
    description: "Kanye West와 Nike의 콜라보레이션으로 제작된 레드 컬러의 한정판 스니커즈"
  },
  {
    id: "201",
    title: "LEVI'S Type I 1940s",
    imageUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&w=400&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&w=400&q=80", alt: "LEVI'S Type I 1940s" }
    ],
    price: 2700000,
    creator: "Levi's",
    description: "1940년대에 제작된 LEVI'S의 오리지널 데님 자켓"
  },
  {
    id: "301",
    title: "Maison Margiela Artisanal Blazer",
    imageUrl: "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?auto=format&w=400&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?auto=format&w=400&q=80", alt: "Maison Margiela Artisanal Blazer" }
    ],
    price: 4100000,
    creator: "Margiela",
    description: "Maison Margiela의 아르티자날 컬렉션에서 제작된 한정판 블레이저"
  }
];
