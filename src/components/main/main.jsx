import React from 'react';
import Category from './Category';
import Sliders from './mainSlider';
import Brand from './Brand';
import ItemList from './ItemList';
import { Line } from '../../GlobalStyles/LayoutStyles';
import logo from '../../assets/logo.png';
import {
  SlidersContainer,
  CategoryContainer,
  ItemContainer,
  BrandContainer,
  LineContainer,
  StyledH2,
  AdStyled
} from './styled/main';

const Mainpage = () => {
  return (
    <>
      <SlidersContainer>
        <Sliders />
      </SlidersContainer>
      <StyledH2>카테고리별 상품 페이지</StyledH2>
      <CategoryContainer>
        <Category />
      </CategoryContainer>
      <AdStyled src={logo} />
      <ItemContainer>
        <ItemList />
      </ItemContainer>
      <LineContainer>
        <Line />
      </LineContainer>
      <StyledH2>브랜드 더보기</StyledH2>
      <BrandContainer>
        <Brand />
      </BrandContainer>
    </>
  );
};

export default Mainpage;
