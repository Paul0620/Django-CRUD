import React, { useEffect, useState } from "react";
import { axiosInstance, useAxios } from "api";
import { useAppContext } from "store";
import { Alert } from "antd";
import Post from "./Post";

function PostList() {
  const {
    store: { jwtToken },
  } = useAppContext();

  const [postList, setPostList] = useState([]);

  const headers = { Authorization: `JWT ${jwtToken}` };

  const [{ data: originPostList, loading, error }, refetch] = useAxios({
    url: "/api/posts/",
    headers,
  });

  useEffect(() => {
    setPostList(originPostList);
  }, [originPostList]);

  return (
    <>
      <div className="container py-3">
        <div className="row">
          {postList && postList.lengh === 0 && (
            <Alert type="warning" message="포스팅이 없습니다. :-(" />
          )}
          {postList &&
            postList.map((post, index) => <Post post={post} key={index} />)}
        </div>
      </div>
    </>
  );
}

export default PostList;
