import styled from 'styled-components';

export const Container = styled.div`
    width: 1280px;   
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    height: 48px;
    border: 1px solid #7485BC;
    margin-bottom: 40px;
`;

export const ItemContainer = styled.div`
    
`;

export const StyledButton = styled.button`
    flex: 1;
    border: none;
    font-size: 15px;
    text-align: center;
    background-color: transparent;
    cursor: pointer;
    color: #0C0E46;
    font-family: var(--font-nanumfont);
    
    &.selected {
        background-color: #D1DCFD;
    }
`;
