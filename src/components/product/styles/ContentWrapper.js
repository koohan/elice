import styled from "styled-components";

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  margin-top: 1rem;
`;

const Buttons = styled.div`
  background-color: white;
  color: black;
  border-bottom: 1px solid #aaa;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 6px;
  transition-duration: 0.4s;

  &:hover {
    background-color: #81daf5;
    color: white;
  }
`;

const FilterButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
   
  }
`;

const SelectContainer = styled.div`
  width: 10rem;
`;

export {
  ContentWrapper,
  FilterContainer,
  FilterButtonsContainer,
  SelectContainer,
  Buttons,
};
