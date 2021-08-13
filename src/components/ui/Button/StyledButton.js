import styled from "styled-components";

export const StyledButton = styled.button`
  min-width: 200px;
  max-height: 44px;
  background: #0694f9;
  padding: 13px;
  margin: 20px;
  border: 0;
  border-radius: 30px;
  text-align: center;
  color: ${(props) => props.color || "#fff"};
  font-size: 15px;
  font-weight: 700;
  outline: none;
  cursor: pointer;

  &:active {
    background: #61bdff;
  }
`;
