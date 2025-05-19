'use client';

import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { Product } from '@/types/product';

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 4px;
  padding: 1rem;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s;
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  margin-bottom: 1rem;
`;

const ProductImage = styled(Image)`
  object-fit: contain;
`;

const ProductName = styled.h3`
  font-size: 0.9rem;
  margin: 0 0 0.5rem;
  color: #333;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 2.8em;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Installments = styled.div`
  font-size: 0.8rem;
  color: #00a650;
  margin-bottom: 0.5rem;
`;

const Shipping = styled.div`
  font-size: 0.8rem;
  color: #00a650;
  margin-bottom: 0.5rem;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #666;
`;

const Stars = styled.div`
  color: #ffd700;
  display: flex;
  gap: 0.1rem;
`;

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const installments = Math.floor(product.price / 12);
  const hasFreeShipping = product.price > 79;

  return (
    <Card href={`/products/${product.id}`}>
      <ImageContainer>
        <ProductImage
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </ImageContainer>
      <ProductName>{product.name}</ProductName>
      <Price>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(product.price)}
      </Price>
      <Installments>
        em 12x de {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(installments)} sem juros
      </Installments>
      {hasFreeShipping && (
        <Shipping>Frete grátis</Shipping>
      )}
      <Rating>
        <Stars>
          {'★'.repeat(Math.floor(product.rating))}
          {'☆'.repeat(5 - Math.floor(product.rating))}
        </Stars>
        <span>({product.reviews})</span>
      </Rating>
    </Card>
  );
} 