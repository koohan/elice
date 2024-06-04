import React from 'react';
import styled from 'styled-components';
import NavSearch from '../../molecules/nav/NavSearch';
import NavMenu from '../../molecules/nav/NavMenu';

const NavBarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: #f8f8f8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-left: 20px;
`;

const RightContainer = styled.div`
    display: flex;
    align-items: center;
`;

const NavBar = () => {
    return (
        <NavBarContainer>
            <Logo>2TEAM</Logo>
            <RightContainer>
                <NavSearch />
                <NavMenu />
            </RightContainer>
        </NavBarContainer>
    );
};

export default NavBar;
