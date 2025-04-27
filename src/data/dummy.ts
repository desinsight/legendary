export interface Item {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  creator: string;
  description: string;
}

export const dummyItems: Item[] = [
  {
    id: "1",
    title: "Cosmic Explorer",
    imageUrl: "https://picsum.photos/seed/item1/400/400",
    price: 0.5,
    creator: "ArtistOne",
    description: "A mesmerizing digital artwork exploring the depths of space."
  },
  {
    id: "2",
    title: "Digital Dreams",
    imageUrl: "https://picsum.photos/seed/item2/400/400",
    price: 0.3,
    creator: "CreatorTwo",
    description: "Abstract representation of digital consciousness."
  },
  {
    id: "3",
    title: "Neon City",
    imageUrl: "https://picsum.photos/seed/item3/400/400",
    price: 0.8,
    creator: "ArtistThree",
    description: "Vibrant cityscape in neon colors."
  },
  {
    id: "4",
    title: "Ocean Waves",
    imageUrl: "https://picsum.photos/seed/item4/400/400",
    price: 0.4,
    creator: "CreatorFour",
    description: "Digital interpretation of ocean waves."
  },
  {
    id: "5",
    title: "Mountain Peak",
    imageUrl: "https://picsum.photos/seed/item5/400/400",
    price: 0.6,
    creator: "ArtistFive",
    description: "Majestic mountain landscape in digital form."
  },
  {
    id: "6",
    title: "Urban Jungle",
    imageUrl: "https://picsum.photos/seed/item6/400/400",
    price: 0.7,
    creator: "CreatorSix",
    description: "Modern city life captured in digital art."
  }
];
