import React from 'react';
import styled from 'styled-components';

const Inputbox = styled.input`
padding: 8px;
border: 1px solid #ccc;
border-radius: 4px;
width: 450px;
height: 30px;

&:focus {
    outline: none;
    border-color: #aaa;
}
`;

const SearchInput = () => {
    return <Inputbox type='text' />
}

export default SearchInput;