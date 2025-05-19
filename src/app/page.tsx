'use client';

import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  background: white;
  min-height: calc(100vh - 80px);
`;

const Header = styled.header`
  background: #fff159;
  padding: 1rem 0;
  margin-bottom: 2rem;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem;
`;

const Logo = styled.div`
  img {
    width: 134px;
    height: 34px;
  }
`;

const SearchBar = styled.div`
  flex: 1;
  display: flex;
  input {
    flex: 1;
    padding: 0.7rem;
    border: none;
    border-radius: 2px 0 0 2px;
    font-size: 1rem;
  }
  button {
    background: white;
    border: none;
    padding: 0 1rem;
    border-radius: 0 2px 2px 0;
    cursor: pointer;
  }
`;

const MainContent = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const CategoryCard = styled(Link)`
  text-decoration: none;
  color: #333;
  background: white;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`;

const CategoryImage = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  margin-bottom: 0.5rem;
`;

const CategoryTitle = styled.h3`
  font-size: 0.9rem;
  margin: 0;
`;

export default function Home() {
  const categories = [
    {
      id: 1,
      name: 'Celulares e Telefones',
      image: 'https://picsum.photos/200/200?random=1',
      path: '/products?category=celulares'
    },
    {
      id: 2,
      name: 'Eletrodomésticos',
      image: 'https://picsum.photos/200/200?random=2',
      path: '/products?category=eletrodomesticos'
    },
    {
      id: 3,
      name: 'Informática',
      image: 'https://picsum.photos/200/200?random=3',
      path: '/products?category=informatica'
    },
    {
      id: 4,
      name: 'Moda',
      image: 'https://picsum.photos/200/200?random=4',
      path: '/products?category=moda'
    },
    {
      id: 5,
      name: 'Casa e Móveis',
      image: 'https://picsum.photos/200/200?random=5',
      path: '/products?category=casa'
    },
    {
      id: 6,
      name: 'Esportes e Fitness',
      image: 'https://picsum.photos/200/200?random=6',
      path: '/products?category=esportes'
    }
  ];

  return (
    <>
      <Header>
        <HeaderContent>
          <Logo>
            <Image
              src="/logo.svg"
              alt="Mercado Livre"
              width={134}
              height={34}
              priority
            />
          </Logo>
          <SearchBar>
            <input type="text" placeholder="Buscar produtos, marcas e mais..." />
            <button>
              <Image
                src="/search-icon.svg"
                alt="Buscar"
                width={20}
                height={20}
              />
            </button>
          </SearchBar>
        </HeaderContent>
      </Header>

      <Container>
        <MainContent>
          {categories.map((category) => (
            <CategoryCard key={category.id} href={category.path}>
              <CategoryImage>
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '4px' }}
                />
              </CategoryImage>
              <CategoryTitle>{category.name}</CategoryTitle>
            </CategoryCard>
          ))}
        </MainContent>
      </Container>
    </>
  );
}
