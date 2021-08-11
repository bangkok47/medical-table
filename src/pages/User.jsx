import React from "react";

import UserInfo from "../components/user/UserInfo";
import UserInfoTitle from "../components/user/UserTitle";
import { UserContainer } from "../components/user/UserContainer";
import UserColumns from "../components/user/UserColumns";
import NotesColumn from "../components/user/userItems/NotesColumn";
import MaterialColumn from "../components/user/userItems/MaterialColumn";
import ResultsColumn from "../components/user/userItems/ResultsColumn";

import NotesIcon from "../assets/NotesIcon";
import MaterialIcon from "../assets/MaterialIcon";
import UserIcon from "../assets/UserIcon";
import ResultsIcon from "../assets/ResultsIcon";

function User() {
  return (
    <div>
      <UserInfoTitle>
        <UserIcon />
        <UserInfo color={"#24a4ff"} fontSize={"30"} />
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
