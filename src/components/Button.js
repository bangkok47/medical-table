import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  min-width: 200px;
  min-height: 44px;
  background: #24a4ff;
  padding: 10px;
  margin: 10px;
  border: 0;
  border-radius: 30px;
  text-align: center;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  outline: none;
  cursor: pointer;
`;

function Button(props) {
  return <StyledButton {...props} />;
}

export default Button;
