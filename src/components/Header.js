import React from "react";
import styled from "styled-components";

import Button from "./Button";
import Input from "./Input";

const HeaderContainer = styled.div`
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #e1e1e1;
`;

function Header() {
  return (
    <HeaderContainer>
      <Input type="text" placeholder="Medical" />
      <Input type="text" placeholder="Medical Institutions" />
      <Input type="text" placeholder="Date" />
      <Input type="text" placeholder="Tags" />
      <Button>Search</Button>
    </HeaderContainer>
  );
}

export default Header;
