import React from 'react';
import Category from './Category';
import Sliders from './mainSlider';
import Brand from './Brand';
import ItemList from './ItemList';
import ThemaItem from './ThemaItem';
import { Line } from '../../GlobalStyles/LayoutStyles';
import logo from '../../../public/assets/logo.png';
import {
  SlidersContainer,
  CategoryContainer,
  ItemContainer,
  BrandContainer,
  LineContainer,
  StyledH2,
  AdStyled,
  ThemaContainer,
  CategoryTitle
} from './styled/main';
import FontStyles from '../../GlobalStyles/FontStyles'; 

const Mainpage = () => {
  return (
    <>
      <FontStyles />
      <SlidersContainer>
        <Sliders />
      </SlidersContainer>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <AdStyled src={logo} />
      <CategoryTitle>CATEGORY</CategoryTitle>
      </div>
      <CategoryContainer>
        <Category />
      </CategoryContainer>
      <StyledH2>여름의 신선함을 만나보세요</StyledH2>
      <ItemContainer>
        <ItemList />
      </ItemContainer>
      <LineContainer>
        <Line />
      </LineContainer>
      <StyledH2>모아둔 이유</StyledH2>
      <ThemaContainer>
        <ThemaItem />
        <br />
        <ThemaItem />
      </ThemaContainer>
      <StyledH2>브랜드 갤러리</StyledH2>
      <BrandContainer>
        <Brand />
      </BrandContainer>
    </>
  );
};

export default Mainpage;
