import React from "react";

import UserInfo from "../components/simple/UserInfo/UserInfo";
import UserInfoTitle from "../components/simple/User/UserTitle";
import { UserContainer } from "../components/simple/User/UserContainer";
import UserColumns from "../components/simple/User/UserColumns";
import NotesColumn from "../components/simple/UserItems/Notes/NotesColumn";
import MaterialColumn from "../components/simple/UserItems/Material/MaterialColumn";
import ResultsColumn from "../components/simple/UserItems/Results/ResultsColumn";

import NotesIcon from "../assets/NotesIcon";
import MaterialIcon from "../assets/MaterialIcon";
import UserIcon from "../assets/UserIcon";
import ResultsIcon from "../assets/ResultsIcon";

function User() {
  return (
    <div>
      <UserInfoTitle>
        <UserIcon />
        <UserInfo color={"#0694f9"} fontSize={"30"} />
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
