import React from 'react';
import BrandSrc from '../../assets/adidas.webp';
import { 
  Container, 
  Brand, 
  ProductContainer, 
  Description, 
  Products, 
  Product, 
  Pic, 
  Name, 
  Price 
} from './styled/Item';

const products = [
  {
    id: 1,
    imageSrc: 'https://via.placeholder.com/150',
    name: '제품 1',
    description: '제품 설명 1',
    price: '₩30,000',
  },
  {
    id: 2,
    imageSrc: 'https://via.placeholder.com/150',
    name: '제품 2',
    description: '제품 설명 2',
    price: '₩50,000',
  },
  {
    id: 3,
    imageSrc: 'https://via.placeholder.com/150',
    name: '제품 3gasdgasdgsadg',
    description: '제품 설명 3',
    price: '₩70,000',
  },
];

const MainItem = () => {
  return (
    <Container>
      <Brand>
        <img src={BrandSrc} alt="Brand" />
      </Brand>
      <ProductContainer>
        <Description>
          <h2>브랜드명: NIKE</h2>
          브랜드 설명: Just Do It
        </Description>
        <Products>
          {products.map((product) => (
            <Product key={product.id}>
              <Pic style={{ backgroundImage: `url(${product.imageSrc})` }} />
              <Name>{product.name}</Name>
              <Price>{product.price}</Price>
            </Product>
          ))}
        </Products>
      </ProductContainer>
    </Container>
  );
};

export default MainItem;
