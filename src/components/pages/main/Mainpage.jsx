import React from 'react';
import styled from 'styled-components';
import NavBar from '../../organisms/nav/NavBar';
import Category from '../../organisms/main/Category';
import Sliders from '../../organisms/main/Sliders';
import Brand from '../../organisms/main/Brand';

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
            <NavBar />
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
