import React from "react";
import PropTypes from "prop-types";

import { UserContainer, UserItem } from "./StyledUserInfo";

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
