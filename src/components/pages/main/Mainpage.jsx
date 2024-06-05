import React from 'react';
import styled from 'styled-components';
import NavBar from '../../organisms/nav/NavBar';
import Category from '../../organisms/main/Category';
import Sliders from '../../organisms/main/Sliders';

const SlidersContainer = styled.div`
  margin-top: 60px;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
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
        </>
    );
};

export default Mainpage;
