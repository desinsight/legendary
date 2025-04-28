export interface Item {
  id: number;
  collection: number;
  name: string;
  artist: string;
  price: number;
  img: string;
  highBid: number | null;
  auction: boolean;
}

export interface Collection {
  id: number;
  title: string;
  desc: string;
  img: string;
}

export interface User {
  name: string;
  avatar: string;
} 