import styled from "styled-components";

export const RelatedProductsStyled = styled.div`
  margin-top: 2rem;
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 2rem;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
  }
`;

export const RelatedProductItem = styled.li`
  flex: 1 1 calc(33.333% - 20px);
  min-width: 373px;
  max-width: calc(33.333% - 20px);
  box-sizing: border-box;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }
  p {
    margin-top: 10px;
    font-size: 16px;
  }
`;

export const CommonTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
`;
