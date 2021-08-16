import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { removeUser } from "../../../redux/actions/actions";

import { UserContainer, UserItem, BackButton } from "./StyledUserInfo";
import UserIcon from "../../../assets/UserIcon";
import ArrowLeft from "../../../assets/ArrowLeft";

function UserInfo({ color, fontSize }) {
  const dispatch = useDispatch();
  const user = useSelector(({ users }) => users.user);

  const remove = () => {
    dispatch(removeUser());
  };

  return (
    <UserContainer>
      <Link to="/">
        <BackButton onClick={remove}>
          <ArrowLeft />
          Back
        </BackButton>
      </Link>
      <UserIcon />
      <UserItem color={color} fontSize={fontSize}>
        <b>{user.map((el) => el.username)}</b>
      </UserItem>
      <UserItem>
        <b>{user.map((el) => el.email)}</b>
      </UserItem>
      <UserItem>
        <b>Hospital</b>: {user.map((el) => el.business)}
      </UserItem>
      <UserItem>
        <b>HMO</b>: {user.map((el) => el.password)}
      </UserItem>
      <UserItem>
        <b>Last update</b>: {user.map((el) => el.id)}
      </UserItem>
    </UserContainer>
  );
}

UserInfo.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
};

export default UserInfo;
