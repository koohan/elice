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
      <CategoryContainer>
        <Category />
      </CategoryContainer>
      <AdStyled src={logo} />
      <StyledH2>여름의 신선함을 만나보세요</StyledH2>
      <ItemContainer>
        <ItemList />
      </ItemContainer>
      <LineContainer>
        <Line />
      </LineContainer>
      <StyledH2>브랜드 갤러리</StyledH2>
      <BrandContainer>
        <Brand />
      </BrandContainer>
    </>
  );
};

export default Mainpage;
