import React from "react";
import PropTypes from "prop-types";

import { UserContainer, UserItem } from "./StyledUserInfo";
import UserIcon from "../../../assets/UserIcon";

function UserInfo({
  data = {},
  color = "#0694f9",
  fontSize = "12px",
  children,
}) {
  return (
    <UserContainer>
      {children}
      <UserIcon />
      <UserItem color={color} fontSize={fontSize}>
        <b>{data?.username}</b>
      </UserItem>
      <UserItem>
        <b>{data?.email}</b>
      </UserItem>
      <UserItem>
        <b>Hospital</b>: {data?.business}
      </UserItem>
      <UserItem>
        <b>HMO</b>: {data?.password}
      </UserItem>
      <UserItem>
        <b>Last update</b>: {data?.id}
      </UserItem>
    </UserContainer>
  );
}

UserInfo.propTypes = {
  color: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  data: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    email: PropTypes.string,
    business: PropTypes.string,
    password: PropTypes.string,
  }),
};

export default UserInfo;
