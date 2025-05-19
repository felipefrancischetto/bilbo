'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Product } from '@/types/product';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  background: white;
  min-height: calc(100vh - 80px);
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

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background: white;
  border-radius: 4px;
  padding: 1rem;
`;

const ProductImage = styled(Image)`
  object-fit: contain;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProductName = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
`;

const Price = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
`;

const Installments = styled.div`
  font-size: 1rem;
  color: #00a650;
`;

const Shipping = styled.div`
  font-size: 1rem;
  color: #00a650;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #666;
`;

const Stars = styled.div`
  color: #ffd700;
  display: flex;
  gap: 0.1rem;
`;

const BuyButton = styled.button`
  background: #3483fa;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background: #2968c8;
  }
`;

const AddToCartButton = styled.button`
  background: white;
  color: #3483fa;
  border: 1px solid #3483fa;
  padding: 1rem;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background: #f5f5f5;
  }
`;

const Description = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: white;
  border-radius: 4px;
  
  h2 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    line-height: 1.6;
  }
`;

// Dados mockados para exemplo
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Smartphone Samsung Galaxy A54 5G 128GB 6GB RAM',
    description: 'Smartphone Samsung Galaxy A54 5G 128GB 6GB RAM, Câmera Tripla 50MP, Tela 6.4" Full HD+, Android 13, Preto',
    price: 1999.99,
    image: 'https://picsum.photos/400/400?random=1',
    category: 'Celulares e Telefones',
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
    category: 'Informática',
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
    category: 'Eletrodomésticos',
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
    category: 'Eletrônicos',
    stock: 15,
    rating: 4.6,
    reviews: 342
  }
];

export default function ProductPage() {
  const params = useParams();
  const product = mockProducts.find(p => p.id === params.id);
  
  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  const installments = Math.floor(product.price / 12);
  const hasFreeShipping = product.price > 79;

  return (
    <Container>
      <Breadcrumb>
        <Link href="/">Início</Link> &gt; <Link href="/products">Produtos</Link> &gt; {product.name}
      </Breadcrumb>

      <ProductContainer>
        <ImageContainer>
          <ProductImage
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </ImageContainer>

        <ProductInfo>
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
            <span>({product.reviews} avaliações)</span>
          </Rating>

          <BuyButton>Comprar agora</BuyButton>
          <AddToCartButton>Adicionar ao carrinho</AddToCartButton>

          <Description>
            <h2>Descrição do produto</h2>
            <p>{product.description}</p>
          </Description>
        </ProductInfo>
      </ProductContainer>
    </Container>
  );
} 