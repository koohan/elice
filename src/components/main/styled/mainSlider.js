import styled from 'styled-components';

export const Button = styled.button`
    width: 40px;
    height: 40px;    
    padding: 8px;    
    border: none;    
    border-radius: 4px;   
    background-color: transparent;     
    cursor: pointer;
    display: flex;     
    align-items: center;
    justify-content: center;
`;

export const SlideContainer = styled.div`
  width: 600px;
  height: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;

export const Image = styled.img`
  width: 600px;
  height: 400px;
  object-fit: cover;
`;

export const ProductName = styled.div`
  font-size: 20px;
  color: #0C0E46;
`;

export const SliderContainer = styled.div`
  display: flex;
  width: 1280px;
  height: 430px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
`;

export const SliderWrapper = styled.div`
  display: flex;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PageIndicator = styled.span`
  margin: 0 20px;
  font-size: 16px;
  color: #0C0E46;
`;