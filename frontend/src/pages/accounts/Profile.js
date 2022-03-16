import React, { useEffect, useState } from "react";
import jwt from "jwt-decode";
import { axiosInstance, useAxios } from "api";
import { useAppContext } from "store";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";

function Profile() {
  // const {
  //   store: { jwtToken },
  // } = useAppContext();

  // const [user, setUser] = useState([]);

  // const headers = { Authorization: `JWT ${jwtToken}` };

  // const decoded = jwt(jwtToken);
  // const userId = decoded.user_id;

  // const [{ data: originUser }, refetch] = useAxios({
  //   url: `/api/users/${userId}`,
  //   headers,
  // });

  // useEffect(() => {
  //   setUser(originUser);
  // }, [originUser]);

  return (
    <Card title="Profile">
      {/* <div>
        <Avatar
          size="large"
          icon={
            user.avatar === null ? (
              <UserOutlined />
            ) : (
              <img src={user.avatar} alt={`${user.nickname}의 아바타`} />
            )
          }
        />
      </div>
      <div>email : {user.email}</div>

      <div>nickname : {user.nickname}</div>
      <div>intro : {user.intro}</div> */}
    </Card>
  );
}

export default Profile;
