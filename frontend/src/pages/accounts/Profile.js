import React, { useEffect, useState } from "react";
import jwt from "jwt-decode";
import { Avatar, Card, Form } from "antd";
import { axiosInstance, useAxios } from "api";
import { useAppContext } from "store";
import { UserOutlined } from "@ant-design/icons";

function Profile() {
  const [user, setUser] = useState([]);

  const {
    store: { jwtToken },
  } = useAppContext();

  const headers = { Authorization: `JWT ${jwtToken}` };

  const decoded = jwt(jwtToken);
  const userId = decoded.user_id;

  const [{ data: originUser, loading, error }, refetch] = useAxios({
    url: `/api/users/${userId}`,
    headers,
  });

  useEffect(() => {
    setUser(originUser);
  }, [originUser]);

  return (
    <Card title="Profile">
      <Form>
        <Avatar
          size="large"
          icon={
            user.avatar === null ? <UserOutlined /> : <img src={user.avatar} />
          }
        />
        <div>email : {user.email}</div>

        <div>nickname : {user.nickname}</div>
        <div>intro : {user.intro}</div>
      </Form>
    </Card>
  );
}

export default Profile;
