import React from 'react';
import styled from 'styled-components';
import Image from '../../atoms/productDetail/Image';
import ProductInfo from '../../molecules/productDetail/ProductInfo';
import ProductOptions from '../../molecules/productDetail/ProductOptions';
import AddToCartButton from '../../atoms/productDetail/AddToCartButton';
import WishlistButton from '../../atoms/productDetail/WishlistButton';
import ProductInfoCard from '../../molecules/productInfocard/ProductInfoCard';

const DetailContainer = styled.div`
  display: flex;
  gap: 20px;
  padding : 20px;
`;

const ImageContainer = styled.div`
  flex: 1;
  padding-right : 30px;
`;

const InfoContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width : 40vw;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledProductInfoCard = styled.div`
  width : 100%;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ProductDetail = ({ product }) => {
  return (
    <>
    <DetailContainer>
      <ImageContainer>
        <Image src={product.imageSrc} alt={product.name} />
      </ImageContainer>
      <InfoContainer>
        <ProductInfo product={product} />
        <ProductOptions />
        <ButtonGroup>
          <AddToCartButton>장바구니에 담기</AddToCartButton>
          <WishlistButton>위시리스트 담기</WishlistButton>
        </ButtonGroup>
      </InfoContainer>
    </DetailContainer>
    <StyledProductInfoCard>
    <ProductInfoCard product={product} />
    </StyledProductInfoCard>
    </>
  );
};

export default ProductDetail;
