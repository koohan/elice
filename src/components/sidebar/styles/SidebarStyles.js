import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SidebarContainer = styled.div`
  background-color: #fff;
  border-right: 1px solid #ddd;
  padding: 20px;
  width: 100%;
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
  border-bottom: 1px solid #d1dcfd;
  margin-bottom: 2rem;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #f0f0f0;
    color: #95a5df;
    border-radius: 10px;
  }
`;

export const MenuIcon = styled(FontAwesomeIcon)`
  margin-right: 3.5rem;
  margin-left: 1rem;
`;

export const UserInfoContainer = styled.div`
  margin-bottom: 20px;
  background-color: #f4f7ff;
  border-radius: 8px;
  padding: 20px;
  border: 3px solid #d0d8ee;
  width: 100%;
`;

export const UserBox = styled.div`
  text-align: center;
`;

export const UserAvatar = styled.img`
  width: 80px;
  height: 80px;
  padding: 2px;
  border: 2px solid #93a0cc;
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
