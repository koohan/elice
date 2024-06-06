import styled from "styled-components";

export const RelatedProductsStyled = styled.div`
  margin-top: 30px;
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
`;

export const RelatedProductItem = styled.li`
  width: 150px;
  text-align: center;
  img {
    width: 100%;
    border-radius: 8px;
  }
  p {
    margin-top: 10px;
    font-size: 14px;
  }
`;

export const CommonTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
`;
