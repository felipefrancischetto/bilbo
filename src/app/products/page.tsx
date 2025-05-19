"use client";

import styled from 'styled-components';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';
import { Suspense } from "react";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  background: white;
  min-height: calc(100vh - 80px);
`;

const Filters = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: white;
  border: 1px solid #ddd;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    background: #f5f5f5;
  }
`;

const SortSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const Breadcrumb = styled.div`
  margin-bottom: 1rem;
  color: #666;
  font-size: 0.9rem;
  
  a {
    color: #3483fa;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const CategoryTitle = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

// Dados mockados para exemplo
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Smartphone Samsung Galaxy A54 5G 128GB 6GB RAM',
    description: 'Smartphone Samsung Galaxy A54 5G 128GB 6GB RAM, Câmera Tripla 50MP, Tela 6.4" Full HD+, Android 13, Preto',
    price: 1999.99,
    image: 'https://picsum.photos/400/400?random=1',
    category: 'celulares',
    stock: 10,
    rating: 4.5,
    reviews: 128
  },
  {
    id: '2',
    name: 'Notebook Dell Inspiron 15',
    description: 'Notebook Dell Inspiron 15, Intel Core i5, 8GB RAM, SSD 256GB, Tela 15.6" Full HD, Windows 11',
    price: 4999.99,
    image: 'https://picsum.photos/400/400?random=2',
    category: 'informatica',
    stock: 5,
    rating: 4.8,
    reviews: 256
  },
  {
    id: '3',
    name: 'Smart TV LG 50" 4K',
    description: 'Smart TV LG 50" 4K, HDR, WebOS, Wi-Fi, Bluetooth, 3 HDMI, 2 USB',
    price: 2999.99,
    image: 'https://picsum.photos/400/400?random=3',
    category: 'eletrodomesticos',
    stock: 8,
    rating: 4.3,
    reviews: 89
  },
  {
    id: '4',
    name: 'Fone de Ouvido JBL Tune 510BT',
    description: 'Fone de Ouvido JBL Tune 510BT, Bluetooth, Cancelamento de Ruído, Bateria 40h',
    price: 299.99,
    image: 'https://picsum.photos/400/400?random=4',
    category: 'eletronicos',
    stock: 15,
    rating: 4.6,
    reviews: 342
  }
];

const categoryNames: Record<string, string> = {
  celulares: 'Celulares e Telefones',
  eletrodomesticos: 'Eletrodomésticos',
  informatica: 'Informática',
  moda: 'Moda',
  casa: 'Casa e Móveis',
  esportes: 'Esportes e Fitness'
};

function ProductsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  
  const filteredProducts = category
    ? mockProducts.filter(product => product.category === category)
    : mockProducts;

  return (
    <Container>
      <Breadcrumb>
        <Link href="/">Início</Link> &gt; {category ? categoryNames[category] : 'Produtos'}
      </Breadcrumb>

      {category && (
        <CategoryTitle>{categoryNames[category]}</CategoryTitle>
      )}

      <Filters>
        <FilterButton>Mais relevantes</FilterButton>
        <FilterButton>Menor preço</FilterButton>
        <FilterButton>Maior preço</FilterButton>
        <FilterButton>Mais vendidos</FilterButton>
        <SortSelect>
          <option value="relevance">Mais relevantes</option>
          <option value="price_asc">Menor preço</option>
          <option value="price_desc">Maior preço</option>
          <option value="sales">Mais vendidos</option>
        </SortSelect>
      </Filters>

      <Grid>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ProductsContent />
    </Suspense>
  );
} 