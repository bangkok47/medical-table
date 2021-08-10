import React from "react";
import styles from "styled-components";

const HeaderBlock = styles.div`
    background: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #e1e1e1;
`;

const Input = styles.input`
    padding: 13px;
    margin: 20px;
    border: 1.5px solid #e1e1e1;
    border-radius: 30px;
    font-size: 12px;
    outline: none;
`;

const SearchBtn = styles.button`
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

function Header() {
  return (
    <HeaderBlock>
      <Input type="text" placeholder="Medical" />
      <Input type="text" placeholder="Medical Institutions" />
      <Input type="text" placeholder="Date" />
      <Input type="text" placeholder="Tags" />
      <SearchBtn>Search</SearchBtn>
    </HeaderBlock>
  );
}

export default Header;
