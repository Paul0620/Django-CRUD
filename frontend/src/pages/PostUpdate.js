import React from "react";
import { Card } from "antd";
import PostUpdateForm from "components/PostUpdateForm";

function PostUpdate({ location }) {
  return (
    <div className="postUpdate">
      <Card title="Update Post">
        <PostUpdateForm props={location} />
      </Card>
    </div>
  );
}

export default PostUpdate;
