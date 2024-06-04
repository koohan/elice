import React from 'react';
import styled from 'styled-components';
import ImageButton from '../../atoms/nav/ImageButton';
import profileSrc from '../../../assets/profile.webp';
import cartSrc from '../../../assets/cart.webp';
import heartSrc from '../../../assets/heart.webp';

const NavMenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 180px;
    margin: 0 20px 0 30px;
`;

const NavMenu = () => {
    const handleProfileClick = () => {
        console.log('프로필');
    };

    const handleCartClick = () => {
        console.log('장바구니');
    };

    const handleHeartClick = () => {
        console.log('좋아요');
    };

    return (
        <NavMenuContainer>
            <ImageButton src={profileSrc} alt="프로필" onClick={handleProfileClick} />
            <ImageButton src={cartSrc} alt="장바구니" onClick={handleCartClick} />
            <ImageButton src={heartSrc} alt="좋아요" onClick={handleHeartClick} />
        </NavMenuContainer>
    );
};

export default NavMenu;
