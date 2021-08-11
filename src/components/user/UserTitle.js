import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledUserTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
`;

function UserTitle({ children }) {
  return <StyledUserTitle>{children}</StyledUserTitle>;
}

UserTitle.propTypes = {
  children: PropTypes.any,
};

export default UserTitle;
