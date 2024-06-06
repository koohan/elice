import React from 'react';
import styled from 'styled-components';
import Category from './Category';
import Sliders from './mainSlider';
import Brand from './Brand';
import ItemList from './ItemList';

const SlidersContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 200px;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const BrandContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 500px;
`;

const Mainpage = () => {
  return (
    <>
      <SlidersContainer>
        <Sliders />
      </SlidersContainer>
      <CategoryContainer>
        <Category />
      </CategoryContainer>
      <ItemContainer>
        <ItemList />
      </ItemContainer>
      <BrandContainer>
        <Brand />
      </BrandContainer>
      <footer>asdfasdfasdf</footer>
    </>
  );
};

export default Mainpage;
