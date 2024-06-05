import React from 'react';
import styled from 'styled-components';
import Category from './Category';
import Sliders from './mainSlider';
import Brand from './Brand';

const SlidersContainer = styled.div`
  margin-top: 60px;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
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
            <BrandContainer>
                <Brand />
            </BrandContainer>
        </>
    );
};

export default Mainpage;
