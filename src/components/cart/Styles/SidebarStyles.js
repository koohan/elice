import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SidebarContainer = styled.div`
  background-color: #fff;
  border-right: 1px solid #eee;
  padding: 20px;
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuContainer = styled.div`
  width: 100%;
`;

export const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 3px solid #eee;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-bottom: 2rem;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const MenuIcon = styled(FontAwesomeIcon)`
  margin-right: 3.5rem;
`;

export const UserInfoContainer = styled.div`
  margin-bottom: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  border: 3px solid #eee;
`;

export const UserBox = styled.div`
  text-align: center;
`;

export const UserAvatar = styled.img`
  width: 80px;
  height: 80px;
  padding: 2px;
  border: 3px solid #aaa;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const UserText = styled.div`
  margin: 5px 0;
  font-weight: bold;
`;

export const UserEmail = styled.div`
  margin: 5px 0;
  color: #666;
`;
