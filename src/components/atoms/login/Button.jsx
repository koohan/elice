import React from "react";
import styled from "styled-components";

const SubButton = styled.button`
    background: none;
    color: inherit;
    font-size: 14px;
    border: none;
    padding: 2px;
    margin: 0;
    cursor: pointer;
    color: #554C71;
`;

const Button = ({ children, onClick }) => {
    return <SubButton onClick={onClick}>{children}</SubButton>;
};

export default Button;