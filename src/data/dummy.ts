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
    title: "Cosmic Explorer",
    imageUrl: "https://picsum.photos/seed/item1/400/400",
    images: [
      { url: "https://picsum.photos/seed/item1/800/600", alt: "Main view" },
      { url: "https://picsum.photos/seed/item1-2/800/600", alt: "Side view" },
      { url: "https://picsum.photos/seed/item1-3/800/600", alt: "Detail view" },
      { url: "https://picsum.photos/seed/item1-4/800/600", alt: "Styling example" }
    ],
    price: 0.5,
    creator: "ArtistOne",
    description: "A mesmerizing digital artwork exploring the depths of space."
  },
  {
    id: "2",
    title: "Digital Dreams",
    imageUrl: "https://picsum.photos/seed/item2/400/400",
    images: [
      { url: "https://picsum.photos/seed/item2/800/600", alt: "Main view" },
      { url: "https://picsum.photos/seed/item2-2/800/600", alt: "Side view" },
      { url: "https://picsum.photos/seed/item2-3/800/600", alt: "Detail view" }
    ],
    price: 0.3,
    creator: "CreatorTwo",
    description: "Abstract representation of digital consciousness."
  },
  {
    id: "3",
    title: "Neon City",
    imageUrl: "https://picsum.photos/seed/item3/400/400",
    images: [
      { url: "https://picsum.photos/seed/item3/800/600", alt: "Main view" },
      { url: "https://picsum.photos/seed/item3-2/800/600", alt: "Night view" },
      { url: "https://picsum.photos/seed/item3-3/800/600", alt: "Detail view" },
      { url: "https://picsum.photos/seed/item3-4/800/600", alt: "Street view" },
      { url: "https://picsum.photos/seed/item3-5/800/600", alt: "Aerial view" }
    ],
    price: 0.8,
    creator: "ArtistThree",
    description: "Vibrant cityscape in neon colors."
  },
  {
    id: "4",
    title: "Ocean Waves",
    imageUrl: "https://picsum.photos/seed/item4/400/400",
    images: [
      { url: "https://picsum.photos/seed/item4/800/600", alt: "Main view" },
      { url: "https://picsum.photos/seed/item4-2/800/600", alt: "Wave detail" },
      { url: "https://picsum.photos/seed/item4-3/800/600", alt: "Sunset view" }
    ],
    price: 0.4,
    creator: "CreatorFour",
    description: "Digital interpretation of ocean waves."
  },
  {
    id: "5",
    title: "Mountain Peak",
    imageUrl: "https://picsum.photos/seed/item5/400/400",
    images: [
      { url: "https://picsum.photos/seed/item5/800/600", alt: "Main view" },
      { url: "https://picsum.photos/seed/item5-2/800/600", alt: "Summit view" },
      { url: "https://picsum.photos/seed/item5-3/800/600", alt: "Valley view" }
    ],
    price: 0.6,
    creator: "ArtistFive",
    description: "Majestic mountain landscape in digital form."
  },
  {
    id: "6",
    title: "Urban Jungle",
    imageUrl: "https://picsum.photos/seed/item6/400/400",
    images: [
      { url: "https://picsum.photos/seed/item6/800/600", alt: "Main view" },
      { url: "https://picsum.photos/seed/item6-2/800/600", alt: "Street view" },
      { url: "https://picsum.photos/seed/item6-3/800/600", alt: "Detail view" },
      { url: "https://picsum.photos/seed/item6-4/800/600", alt: "Night view" }
    ],
    price: 0.7,
    creator: "CreatorSix",
    description: "Modern city life captured in digital art."
  }
];
