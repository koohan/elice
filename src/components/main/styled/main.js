import styled from "styled-components";

export const SlidersContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 20px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 100px;
`;

export const BrandContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

export const LineContainer = styled.div`
  width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const StyledH2 = styled.h2`
  width: 1280px;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 10px auto;
  padding-top: 100px;
  padding-bottom: 15px;
  color: #070b19;
`;

export const AdStyled = styled.img`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  object-fit: cover;
  margin-bottom: 50px;
`;
export const ThemaContainer = styled.div`
  margin-bottom: 100px;
`;

export const CategoryTitle = styled.h2`
  position: relative;
  font-size: 32px;
  font-weight: normal;
  width: 85%;
  letter-spacing: 50px;
  font-style: italic;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  padding-bottom: 20px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% + 50px);
    height: 3px;
    background: linear-gradient(to right, #4169e1, #feb47b);
  }
`;
