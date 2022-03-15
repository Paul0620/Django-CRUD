import React from "react";
import { Card } from "antd";
import PostNewForm from "components/PostNewForm";

export default function PostNew() {
  return (
    <div className="PostNew">
      <Card title="New Post">
        <PostNewForm />
      </Card>
    </div>
  );
}
