import React from "react";
import styled from "styled-components";

import PropTypes from "prop-types";

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const UserItem = styled.span`
  margin-right: 20px;
  font-size: ${(props) => props.fontSize || "12px"};
  color: ${(props) => props.color || "#bdbebd"};
  text-align: center;
`;

function UserInfo({ color, fontSize }) {
  return (
    <UserContainer>
      <UserItem color={color} fontSize={fontSize}>
        <b>Sara Sara</b>
      </UserItem>
      <UserItem>
        <b>Medical malpractice at birth</b>
      </UserItem>
      <UserItem>
        <b>Hospital</b>: Hospital
      </UserItem>
      <UserItem>
        <b>HMO</b>: Maccabi
      </UserItem>
      <UserItem>
        <b>Last update</b>: 1.7.2020
      </UserItem>
    </UserContainer>
  );
}

UserInfo.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
};

export default UserInfo;
