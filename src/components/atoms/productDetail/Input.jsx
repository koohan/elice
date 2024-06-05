import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: ${props => props.width};
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 40px;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 4px;
  appearance: none;
  cursor: pointer;
  font-size: 16px;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 16px;
  color: #aaa;
`;

const Input = ({ value, onChange, maxQuantity = 99, width }) => {
  const options = [];
  for (let i = 1; i <= maxQuantity; i++) {
    options.push({ label: i, value: i });
  }

  return (
    <DropdownContainer width={width}>
      <StyledSelect value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      <IconContainer>
        <FontAwesomeIcon icon={faChevronDown} />
      </IconContainer>
    </DropdownContainer>
  );
};

export default Input;
