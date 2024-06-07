import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-bottom: 50px;
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  color: #151515;
  margin-bottom: 20px;
  font-size: 1.5em;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #7485BC;
  border-radius: 4px;

  &:focus{
  border: 1px solid #455186;
  }
`;

export const ReadOnlyInput = styled.div`
  padding: 10px;
  border: 1px solid #7485BC;
  border-radius: 4px;
  letter-spacing: 5px;
`;

export const Button = styled.button`
  width: 8rem;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #7485BC;
  color: white;
  cursor: pointer;

  &:hover{
  background-color: #455186;
  }
`;
export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border: 2px solid #aaa;
  border-radius: 50%;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputSection = styled.div`
  width: 100%;
  margin-right: 20px;
`;

export const AvatarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 50px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

export const InstructionsSection = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 50px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-family: Arial, sans-serif;
`;
