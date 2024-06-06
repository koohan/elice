import React from 'react';
import { Container, ImageContainer, InfoContainer, ProductImage, ProductTitle, ProductPrice } from './styles/ProductDetailStyles';
import SizeSelector from './SizeSelector';
import ColorSelector from './ColorSelector';
import QuantitySelector from './QuantitySelector';
import AddToCartButton from './AddToCartButton';
import ProductDescription from './ProductDescription';
import RelatedProducts from './RelatedProducts';
import AddToWishlistButton from './AddToWishlistButton';

const ProductDetail = ({ product, relatedProducts }) => {
  return (
    <Container>
      <ImageContainer>
        <ProductImage src={product.images[0]} alt={product.name} />
      </ImageContainer>
      <InfoContainer>
        <ProductTitle>{product.name}</ProductTitle>
        <p style={{marginTop: "5px" , opacity : "0.7"}}>{product.shortDescription}</p>
        <ProductPrice>{product.price.toLocaleString('ko-KR')}원</ProductPrice>
        <SizeSelector />
        <ColorSelector colors={product.colors} />
        <QuantitySelector />
        <AddToCartButton>장바구니에 담기</AddToCartButton>
        <AddToWishlistButton>위시리스트에 추가</AddToWishlistButton>
      </InfoContainer>
      <ProductDescription description={product.longDescription} />
      <RelatedProducts products={relatedProducts} />
    </Container>
  );
};

export default ProductDetail;
