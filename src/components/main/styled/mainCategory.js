import styled from 'styled-components';

export const ImgBtn = styled.button`
    background: transparent;
    margin: 0;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;

    img {
        width: 90px;
        height: 90px;
        border-radius: 12px;
        background-color: #D8D8D8;
    }

    span {
        margin-top: 10px;
        color: #0C0E46;
        font-size: 14px;
    }
`;

export const Container = styled.div`
    width: 1280px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
`;
