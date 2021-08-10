import React from "react";
import styles from "styled-components";

const UserInfoTitle = styles.div`
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
`;

function UserInfo() {
  return (
    <div>
      <UserInfoTitle>User info</UserInfoTitle>
    </div>
  );
}

export default UserInfo;
