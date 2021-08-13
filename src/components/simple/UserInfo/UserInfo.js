import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { removeUser } from "../../../redux/actions/actions";

import { UserContainer, UserItem, BackButton } from "./StyledUserInfo";
import UserIcon from "../../../assets/UserIcon";
import ArrowLeft from "../../../assets/ArrowLeft";

function UserInfo({ color, fontSize }) {
  const dispatch = useDispatch();

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
