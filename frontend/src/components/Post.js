import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAppContext } from "store";

function Post({ post }) {
  const {
    store: { jwtToken },
  } = useAppContext();

  const { id, user, title, content, image } = post;
  const { nickname } = user;

  const history = useHistory();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="col-4 py-3">
      <div className="card">
        <div
          className="card-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "8px",
            paddingRight: "0px",
            paddingLeft: "10px",
            height: "39px",
          }}
        >
          {user}
          {user && (
            <div>
              <Button type="text" size="small" style={{ color: "skyblue" }}>
                수정
              </Button>
              <Button
                type="text"
                size="small"
                style={{ paddingLeft: "0", color: "orangered" }}
              >
                삭제
              </Button>
            </div>
          )}
        </div>
        <div className="ratio ratio-4x3">
          <img src={image} className="card-img-top" />
        </div>
        <div className="card-body">
          <h5
            className="card-title"
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </h5>
          <p
            className="card-text"
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {content}
          </p>
          <Button onClick={showModal} style={{ float: "right" }}>
            자세히
          </Button>
        </div>
      </div>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <h6>{user}</h6>
        <div style={{ marginTop: "8px", marginBottom: "25px" }}>
          <img src={image} className="card-img-top" />
        </div>
        <h5 className="card-title" style={{}}>
          {title}
        </h5>
        <p className="card-text" style={{}}>
          {content}
        </p>
      </Modal>
    </div>
  );
}

export default Post;
