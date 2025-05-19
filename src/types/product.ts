export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
  reviews: number;
}

export interface ProductListProps {
  products: Product[];
}

export interface ProductCardProps {
  product: Product;
} 