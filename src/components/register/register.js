import styled from 'styled-components';

export const RegisterButton = styled.button`
    width: 100%;
    padding: 16px;
    background-color: #A999DD;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px 0 0 0;

    &:hover {
        background-color: #8076A0;
    }
`;

export const StyledInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    padding: 12px;
    border: 1px solid #E2DCF7;
    border-radius: 5px;
    font-size: 15px;
    margin: 0 0 20px 0;
    display: flex;
    flex-direction: column;

    &:focus-within {
        border: 1px solid #554C71;
        outline: none;
    }
`;

export const PlaceholderSpan = styled.span`
    margin: 0 0 15px 0;
    font-size: 15px;
    color: #424242;
    font-weight: bold;
`;

export const LineContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15px;
    margin-bottom: 20px;
    font-size: 14px;
    color: #554C71;
    margin-top: 20px;
`;

export const OauthContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    margin-bottom: 5px;

    button {
        background: none;
        color: inherit;
        font-size: 14px;
        border: none;
        padding: 2px 25px 0 25px;
        margin: 0;
        cursor: pointer;

        img {
            width: 24px;
            height: 24px;
        }
    }
`;

export const RegisterContainerWrapper = styled.div`
    width: 640px;
    margin: 0 auto;
    padding: 40px 100px 40px 100px;
    border: 1px solid #EEEAFB;
    border-radius: 25px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .06);

    h2 {
        text-align: center;
        margin-bottom: 20px;
        color: #554C71;
    }
`;

export const RegisterMainContainer = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
