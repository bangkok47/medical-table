import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserItem = styled.span`
  margin-right: 20px;
  font-size: ${(props) => props.fontSize || "12px"};
  color: ${(props) => props.color || "#bdbebd"};
`;

export const BackButton = styled.button`
  position: relative;
  right: 160px;
  min-width: 60px;
  border: none;
  background: white;
  cursor: pointer;
  color: #0694f9;

  &:active {
    color: #a8dfff;
  }
`;
