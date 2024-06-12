import React from 'react';
import { Container, ImageContainer, InfoContainer, ProductImage, ProductTitle, ProductPrice } from './styles/ProductDetailStyles';
import SizeSelector from './SizeSelector';
import ColorSelector from './ColorSelector';
import QuantitySelector from './QuantitySelector';
import ProductDescription from './ProductDescription';
import RelatedProducts from './RelatedProducts';
import { CheckoutButton, WishlistButton } from "./styles/AddToWishlistButtonStyles";

const ProductDetail = ({ product, relatedProducts = [] }) => {
  const placeholderImage = 'https://via.placeholder.com/150';
  const productImage = product?.images?.length > 0 ? product.images[0] : placeholderImage;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container>
      <ImageContainer>
        <ProductImage src={productImage} alt={product.name} />
      </ImageContainer>
      <InfoContainer>
        <ProductTitle>{product.name}</ProductTitle>
        <p style={{ marginTop: "5px", opacity: "0.7" }}>{product.description}</p>
        <ProductPrice>{product.price.toLocaleString('ko-KR')} 원</ProductPrice>
        <ColorSelector colors={product.colors || []} />
        <SizeSelector sizes={product.sizes || []} />
        <QuantitySelector />
        <div style={{ display: "flex", gap: "15px" }}>
          <WishlistButton>장바구니에 추가</WishlistButton>
          <CheckoutButton>결제하기</CheckoutButton>
        </div>
      </InfoContainer>
      <div style={{ width: "100%" }}>
        <ProductDescription description={product.longdescription} />
        <RelatedProducts products={relatedProducts} />
      </div>
    </Container>
  );
};

export default ProductDetail;
