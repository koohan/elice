import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
  }

  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 16px;
  }

  .section {
    background-color: #fff;
    padding: 24px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export const Section = styled.section`
  background-color: #fff;
  padding: 24px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 16px;
  border-bottom: 1px solid #ddd;
`;

export const BoldRow = styled(Row)`
  font-weight: bold;
  font-size: 18px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const THead = styled.thead`
  background-color: #f0f0f0;
`;

export const TBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid #e0e0e0;
`;

export const Cell = styled.td`
  padding: 8px;
  text-align: left;

  &:last-child {
    text-align: right;
  }
`;

export const OptionButton = styled.button`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: ${(props) => (props.selected ? "#f0f0f0" : "#fff")};
  cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s;

  svg {
    font-size: 24px;
    margin-bottom: 8px;
  }

  &:hover {
    border-color: #000;
    background-color: #f0f0f0;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333;
`;

export const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  flex: 1;
`;

export const StyledInputHigh = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  flex: 2;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

export const ButtonStyle = styled.button`
  align-items: center;
  padding: 10px 20px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    background-color: #333;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
`;

export const InputHalf = styled.div`
  flex: 1;
`;

export const InputFull = styled.div`
  flex: 2;
`;

export const PaymentOptions = styled.div`
  display: flex;
  gap: 16px;
`;

export const OptionWrapper = styled.div`
  flex: 1;
`;
