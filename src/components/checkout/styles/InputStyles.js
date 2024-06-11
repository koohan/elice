import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

const Label = styled.label`
  font-size: 16px;
  color: #333;
  margin: 8px;
  font-weight: bold;
`;

const StyledInput = styled.input`
  padding: 16px;
  margin: 8px;
  border: 1px solid #97A6D9;
  border-radius: 4px;
  font-size: 14px;
  &:focus {
        outline: none;
        border: 2px solid #7485BC;
    }
`;

const StyledInputHigh = styled.input`
  padding: 16px;
  margin: 8px;
  border: 1px solid #97A6D9;
  border-radius: 4px;
  font-size: 14px;
  &:focus {
        outline: none;
        border: 2px solid #7485BC;
    }
`;

export { InputWrapper, Label, StyledInput, StyledInputHigh };
