export interface Creator {
  name: string;
  imageUrl: string;
}

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
  season?: string;
  edition?: string;
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