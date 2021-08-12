import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const UserItem = styled.span`
  margin-right: 20px;
  font-size: ${(props) => props.fontSize || "12px"};
  color: ${(props) => props.color || "#bdbebd"};
  text-align: center;
`;
