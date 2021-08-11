import React from "react";
import styled from "styled-components";

const UserColumn = styled.div`
  grid-area: ${(props) => props.gridArea};
`;

function UserColumns(props) {
  return <UserColumn {...props} />;
}

export default UserColumns;
