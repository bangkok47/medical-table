import React from "react";

import { HeaderContainer } from "./StyledHeader";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";

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
