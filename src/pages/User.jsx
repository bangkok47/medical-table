import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setUsers, removeUser, getOneUser } from "../redux/actions/actions";

import UserInfo from "../components/simple/UserInfo/UserInfo";
import UserInfoTitle from "../components/simple/User/UserTitle";
import { UserContainer } from "../components/simple/User/UserContainer";
import UserColumns from "../components/simple/User/UserColumns";
import NotesColumn from "../components/simple/UserItems/Notes/NotesColumn";
import MaterialColumn from "../components/simple/UserItems/Material/MaterialColumn";
import ResultsColumn from "../components/simple/UserItems/Results/ResultsColumn";

import NotesIcon from "../assets/NotesIcon";
import MaterialIcon from "../assets/MaterialIcon";
import ResultsIcon from "../assets/ResultsIcon";
import ArrowLeft from "../assets/ArrowLeft";
import { BackButton } from "../components/simple/UserInfo/StyledUserInfo";

function User() {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location?.state?.id;

  const user = useSelector(({ users }) => users.user)?.[0];

  useEffect(() => {
    dispatch(setUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getOneUser(id));
  }, [id]);

  const remove = () => {
    dispatch(removeUser());
  };

  const renderBackButton = () => {
    return (
      <Link to="/">
        <BackButton onClick={remove}>
          <ArrowLeft />
          Back
        </BackButton>
      </Link>
    );
  };

  return (
    <div>
      <UserInfoTitle>
        <UserInfo
          color="#0694f9"
          fontSize={"18px"}
          onClick={remove}
          data={user}
        >
          {renderBackButton()}
        </UserInfo>
      </UserInfoTitle>

      <UserContainer>
        <UserColumns gridArea={"notes"}>
          <NotesColumn>
            <NotesIcon />
            Notes
          </NotesColumn>
        </UserColumns>
        <UserColumns gridArea={"material"}>
          <MaterialColumn>
            <MaterialIcon />
            Original material
          </MaterialColumn>
        </UserColumns>
        <UserColumns gridArea={"results"}>
          <ResultsColumn>
            <ResultsIcon />
            Results
          </ResultsColumn>
        </UserColumns>
      </UserContainer>
    </div>
  );
}

export default User;
