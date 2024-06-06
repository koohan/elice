import React from 'react';
import { Container, ImageContainer, InfoContainer, ProductImage, ProductTitle, ProductPrice } from './styles/ProductDetailStyles';
import SizeSelector from './SizeSelector';
import ColorSelector from './ColorSelector';
import QuantitySelector from './QuantitySelector';
import ProductDescription from './ProductDescription';
import RelatedProducts from './RelatedProducts';
import { CheckoutButton, WishlistButton } from "./styles/AddToWishlistButtonStyles"

const ProductDetail = ({ product, relatedProducts }) => {
  return (
    <Container>
      <ImageContainer>
        <ProductImage src={product.images[0]} alt={product.name} />
      </ImageContainer>
      <InfoContainer>
        <ProductTitle>{product.name}</ProductTitle>
        <p style={{marginTop: "5px" , opacity : "0.7"}}>{product.shortDescription}</p>
        <ProductPrice>{product.price.toLocaleString('ko-KR')} 원</ProductPrice>
        <SizeSelector />
        <ColorSelector colors={product.colors} />
        <QuantitySelector />
        <WishlistButton>위시리스트에 추가</WishlistButton>
        <CheckoutButton>결제하기</CheckoutButton>
      </InfoContainer>
      <ProductDescription description={product.longDescription} />
      <RelatedProducts products={relatedProducts} />
    </Container>
  );
};

export default ProductDetail;
