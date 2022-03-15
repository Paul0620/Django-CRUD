import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useHistory } from "react-router-dom";
import { axiosInstance } from "api";
import { useAppContext } from "store";
import jwt from "jwt-decode";

function Post({ post }) {
  const {
    store: { jwtToken },
  } = useAppContext();

  // 토큰 유저 정보
  const decoded = jwt(jwtToken);
  const userEmail = decoded.email;

  const { id, user, title, content, image } = post;
  const { email, nickname } = user;

  const history = useHistory();

  const [isModalVisible, setIsModalVisible] = useState({ visible: false });

  // 자세히보기
  const showModal = () => {
    setIsModalVisible({ visible: true });
  };

  // 게시물 수정
  const updateClick = ({ post }) => {
    history.push({
      pathname: "/posts/update",
      state: post,
    });
  };

  // 게시물 삭제
  const deleteClick = async ({ id }) => {
    const headers = { Authorization: `JWT ${jwtToken}` };
    try {
      const response = await axiosInstance.delete(`/api/posts/${id}/`, {
        headers,
      });
      window.location.replace("/");
    } catch (error) {
      console.error(error);
    }
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
          {nickname}
          {email === userEmail && (
            <div>
              <Button
                type="text"
                size="small"
                style={{ color: "skyblue" }}
                onClick={() => updateClick({ post })}
              >
                수정
              </Button>
              <Button
                type="text"
                size="small"
                style={{ paddingLeft: "0", color: "orangered" }}
                onClick={() => deleteClick({ id })}
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
      <Modal
        visible={isModalVisible.visible}
        footer={null}
        onCancel={() => setIsModalVisible({ visible: false })}
      >
        <h6>{nickname}</h6>
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
