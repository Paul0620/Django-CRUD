import React from "react";
import { Card } from "antd";
import PostNewForm from "components/PostNewForm";

function PostNew() {
  return (
    <div className="PostNew">
      <Card title="New Post">
        <PostNewForm />
      </Card>
    </div>
  );
}

export default PostNew;
