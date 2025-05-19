'use client';

import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Header = styled.header`
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderTop = styled.div`
  background: #f8f9fa;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
`;

const HeaderTopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: #666;
`;

const HeaderMain = styled.div`
  padding: 1rem 0;
`;

const HeaderMainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const SearchBar = styled.div`
  flex: 1;
  max-width: 600px;
  margin: 0 2rem;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #eee;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 0 1.5rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  
  &:hover {
    background: #0056b3;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;
  
  &:hover {
    color: #007bff;
  }
`;

const Nav = styled.nav`
  background: #fff;
  border-top: 1px solid #eee;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  position: relative;
  
  &:hover > div {
    display: block;
  }
`;

const NavLink = styled.a`
  display: block;
  padding: 1rem;
  color: #333;
  text-decoration: none;
  
  &:hover {
    color: #007bff;
  }
`;

const MegaMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  padding: 1rem;
  min-width: 200px;
  z-index: 100;
`;

const Hero = styled.div`
  position: relative;
  height: 500px;
  margin: 2rem 0;
  border-radius: 8px;
  overflow: hidden;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background: #0056b3;
  }
`;

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const CategoryCard = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CategoryImage = styled.div`
  position: relative;
  height: 200px;
`;

const CategoryContent = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const CategoryTitle = styled.h3`
  margin: 0 0 0.5rem;
  color: #333;
`;

const CategoryDescription = styled.p`
  color: #666;
  margin: 0;
`;

const FeaturedProducts = styled.div`
  margin: 3rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.div`
  position: relative;
  height: 200px;
`;

const ProductContent = styled.div`
  padding: 1.5rem;
`;

const ProductTitle = styled.h3`
  margin: 0 0 0.5rem;
  color: #333;
`;

const ProductPrice = styled.div`
  font-size: 1.25rem;
  color: #007bff;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ProductDescription = styled.p`
  color: #666;
  margin: 0 0 1rem;
`;

const Footer = styled.footer`
  background: #f8f9fa;
  padding: 3rem 0;
  margin-top: 3rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const FooterColumn = styled.div`
  h4 {
    color: #333;
    margin-bottom: 1rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  a {
    color: #666;
    text-decoration: none;
    
    &:hover {
      color: #007bff;
    }
  }
`;

export default function GadgetizePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de busca
    console.log('Searching for:', searchQuery);
  };

  return (
    <>
      <Header>
        <HeaderTop>
          <Container>
            <HeaderTopContent>
              <div>Bem-vindo à Gadgetize - Sua loja de eletrônicos</div>
              <div>Contato: (11) 99999-9999</div>
            </HeaderTopContent>
          </Container>
        </HeaderTop>
        
        <HeaderMain>
          <Container>
            <HeaderMainContent>
              <Logo>Gadgetize</Logo>
              
              <SearchBar>
                <form onSubmit={handleSearch}>
                  <SearchInput
                    type="text"
                    placeholder="O que você está procurando?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <SearchButton type="submit">
                    <Image src="/search-icon.svg" alt="Buscar" width={20} height={20} />
                  </SearchButton>
                </form>
              </SearchBar>
              
              <HeaderActions>
                <ActionButton>
                  <Image src="/user-icon.svg" alt="Minha conta" width={24} height={24} />
                  <span>Minha conta</span>
                </ActionButton>
                <ActionButton>
                  <Image src="/cart-icon.svg" alt="Carrinho" width={24} height={24} />
                  <span>Carrinho</span>
                </ActionButton>
              </HeaderActions>
            </HeaderMainContent>
          </Container>
        </HeaderMain>
        
        <Nav>
          <Container>
            <NavList>
              <NavItem>
                <NavLink href="#">Smartphones</NavLink>
                <MegaMenu>
                  <ul>
                    <li><a href="#">Apple</a></li>
                    <li><a href="#">Samsung</a></li>
                    <li><a href="#">Xiaomi</a></li>
                  </ul>
                </MegaMenu>
              </NavItem>
              <NavItem>
                <NavLink href="#">Notebooks</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Tablets</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Acessórios</NavLink>
              </NavItem>
            </NavList>
          </Container>
        </Nav>
      </Header>

      <main>
        <Container>
          <Hero>
            <Image
              src="https://picsum.photos/1200/500"
              alt="Hero image"
              fill
              style={{ objectFit: 'cover' }}
            />
            <HeroContent>
              <HeroTitle>As Melhores Ofertas em Eletrônicos</HeroTitle>
              <HeroSubtitle>Encontre os produtos mais modernos com os melhores preços</HeroSubtitle>
              <Button>Ver Ofertas</Button>
            </HeroContent>
          </Hero>

          <Categories>
            <CategoryCard>
              <CategoryImage>
                <Image
                  src="https://picsum.photos/400/300"
                  alt="Smartphones"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </CategoryImage>
              <CategoryContent>
                <CategoryTitle>Smartphones</CategoryTitle>
                <CategoryDescription>Os melhores smartphones do mercado</CategoryDescription>
              </CategoryContent>
            </CategoryCard>
            
            <CategoryCard>
              <CategoryImage>
                <Image
                  src="https://picsum.photos/400/301"
                  alt="Notebooks"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </CategoryImage>
              <CategoryContent>
                <CategoryTitle>Notebooks</CategoryTitle>
                <CategoryDescription>Notebooks para trabalho e lazer</CategoryDescription>
              </CategoryContent>
            </CategoryCard>
            
            <CategoryCard>
              <CategoryImage>
                <Image
                  src="https://picsum.photos/400/302"
                  alt="Tablets"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </CategoryImage>
              <CategoryContent>
                <CategoryTitle>Tablets</CategoryTitle>
                <CategoryDescription>Tablets para todas as necessidades</CategoryDescription>
              </CategoryContent>
            </CategoryCard>
          </Categories>

          <FeaturedProducts>
            <SectionTitle>Produtos em Destaque</SectionTitle>
            <ProductGrid>
              <ProductCard>
                <ProductImage>
                  <Image
                    src="https://picsum.photos/400/400"
                    alt="iPhone 13"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </ProductImage>
                <ProductContent>
                  <ProductTitle>iPhone 13 Pro</ProductTitle>
                  <ProductPrice>R$ 9.999,00</ProductPrice>
                  <ProductDescription>
                    O mais novo iPhone com câmera profissional e tela ProMotion.
                  </ProductDescription>
                  <Button>Comprar</Button>
                </ProductContent>
              </ProductCard>
              
              <ProductCard>
                <ProductImage>
                  <Image
                    src="https://picsum.photos/400/401"
                    alt="MacBook Pro"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </ProductImage>
                <ProductContent>
                  <ProductTitle>MacBook Pro M1</ProductTitle>
                  <ProductPrice>R$ 12.999,00</ProductPrice>
                  <ProductDescription>
                    Notebook com chip M1, tela Retina e até 20 horas de bateria.
                  </ProductDescription>
                  <Button>Comprar</Button>
                </ProductContent>
              </ProductCard>
              
              <ProductCard>
                <ProductImage>
                  <Image
                    src="https://picsum.photos/400/402"
                    alt="iPad Pro"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </ProductImage>
                <ProductContent>
                  <ProductTitle>iPad Pro</ProductTitle>
                  <ProductPrice>R$ 8.999,00</ProductPrice>
                  <ProductDescription>
                    Tablet com chip M1, tela Liquid Retina e suporte ao Apple Pencil.
                  </ProductDescription>
                  <Button>Comprar</Button>
                </ProductContent>
              </ProductCard>
            </ProductGrid>
          </FeaturedProducts>
        </Container>
      </main>

      <Footer>
        <Container>
          <FooterContent>
            <FooterColumn>
              <h4>Sobre Nós</h4>
              <ul>
                <li><a href="#">Quem Somos</a></li>
                <li><a href="#">Nossa História</a></li>
                <li><a href="#">Trabalhe Conosco</a></li>
              </ul>
            </FooterColumn>
            
            <FooterColumn>
              <h4>Ajuda</h4>
              <ul>
                <li><a href="#">Central de Ajuda</a></li>
                <li><a href="#">Como Comprar</a></li>
                <li><a href="#">Métodos de Pagamento</a></li>
              </ul>
            </FooterColumn>
            
            <FooterColumn>
              <h4>Contato</h4>
              <ul>
                <li><a href="#">Fale Conosco</a></li>
                <li><a href="#">SAC</a></li>
                <li><a href="#">WhatsApp</a></li>
              </ul>
            </FooterColumn>
            
            <FooterColumn>
              <h4>Redes Sociais</h4>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
              </ul>
            </FooterColumn>
          </FooterContent>
        </Container>
      </Footer>
    </>
  );
} 