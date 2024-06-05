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
  width: 620px;
  height: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;

export const Image = styled.img`
  width: 620px;
  height: 400px;
  object-fit: cover;
`;

export const ProductName = styled.div`
  margin-top: 10px;
  font-size: 20px;
  color: #333;
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
  transition: ${props => props.$isAnimating ? 'transform 1s ease-in-out' : 'none'};
  transform: translateX(${props => -props.$currentIndex * 1280}px);
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
`;