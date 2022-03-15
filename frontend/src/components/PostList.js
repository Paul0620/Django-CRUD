import React, { useEffect, useState } from "react";
import { axiosInstance, useAxios } from "api";
import { useAppContext } from "store";
import { Alert, Pagination } from "antd";
import Post from "./Post";

function PostList() {
  const {
    store: { jwtToken },
  } = useAppContext();

  const [postList, setPostList] = useState([]);
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const headers = { Authorization: `JWT ${jwtToken}` };

  const [{ data: originPostList, loading, error }, refetch] = useAxios({
    url: "/api/posts/",
    headers,
  });

  useEffect(() => {
    setPostList(originPostList);
  }, [originPostList]);

  const handleChange = (page) => {
    setPage(page);
  };

  return (
    <div className="container py-3">
      <div className="row">
        {postList && postList.length === 0 && (
          <Alert type="warning" message="포스팅이 없습니다. :-(" />
        )}
        {postList &&
          postList
            .slice(offset, offset + limit)
            .map((post, index) => <Post post={post} key={index} />)}

        {postList && postList.length > 1 && (
          <Pagination
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            defaultCurrent={1}
            total={postList.length}
            pageSize={limit}
            onChange={handleChange}
          />
        )}
      </div>
    </div>
  );
}

export default PostList;
