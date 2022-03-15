import React, { useState } from "react";
import { Button, Form, Input, Upload, Modal, notification } from "antd";
import { FrownOutlined, PlusOutlined } from "@ant-design/icons";
import { getBase64FromFile } from "utils/base64";
import { parseErrorMessages } from "utils/forms";
import { axiosInstance } from "api";
import { useAppContext } from "store";

function PostNewForm() {
  const {
    store: { jwtToken },
  } = useAppContext();

  const [fileList, setFileList] = useState([]);
  // 이미지 미리 보기를 위한 설정
  const [previewImage, setPreviewImage] = useState({
    visible: false, // modal로 처리할 때 보여줄지 아닐지
    base64: null,
  });
  const [fieldErrors, setFieldErrors] = useState({});

  const handleUploadChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handlePreviewImage = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64FromFile(file.originFileObj);
    }

    setPreviewImage({
      visible: true,
      base64: file.url || file.preview,
    });
  };

  const handleFinish = async (fieldValues) => {
    const {
      title,
      content,
      image: { fileList },
    } = fieldValues;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    fileList.forEach((file) => {
      formData.append("image", file.originFileObj);
    });

    const headers = { Authorization: `JWT ${jwtToken}` };

    try {
      const response = await axiosInstance.post("/api/posts/", formData, {
        headers,
      });
      console.log("success response : ", response);
      window.location.replace("/");
    } catch (error) {
      if (error.response) {
        const { status, data: fieldsErrorMessages } = error.response;
        if (typeof fieldsErrorMessages === "string") {
          // 문자열이라면
          notification.open({
            message: "서버 오류",
            description: `${status} 응답을 받았습니다. 에러를 확인해주세요`,
            icon: <FrownOutlined style={{ color: "#ff3333" }} />,
          });
        } else {
          // 오브젝트라면
          setFieldErrors(parseErrorMessages(fieldsErrorMessages));
        }
      }
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={handleFinish}
      autoComplete="off"
    >
      <Form.Item
        label="사진"
        name="image"
        rules={[{ required: true, message: "사진을 넣어주세요." }]}
        hasFeedback
        {...fieldErrors.image}
      >
        <Upload
          listType="picture-card"
          fileList={fileList}
          beforeUpload={() => {
            return false;
          }}
          onChange={handleUploadChange}
          onPreview={handlePreviewImage}
        >
          {fileList.length === 1 ? null : (
            <div>
              <PlusOutlined />
              <div className="ant-upload-text">Upload</div>
            </div>
          )}
        </Upload>
      </Form.Item>

      <Form.Item
        label="제목"
        name="title"
        rules={[{ required: true, message: "제목을 입력해 주세요." }]}
        hasFeedback
        {...fieldErrors.title}
        {...fieldErrors.non_field_errors}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="내용"
        name="content"
        rules={[{ required: true, message: "내용을 입력해 주세요." }]}
        hasFeedback
        {...fieldErrors.content}
        {...fieldErrors.non_field_errors}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
        <Button htmlType="submit" style={{ marginRight: "10px" }}>
          작성
        </Button>
      </Form.Item>

      <Modal
        visible={previewImage.visible}
        footer={null}
        onCancel={() => setPreviewImage({ visible: false })}
      >
        <img
          src={previewImage.base64}
          style={{ width: "100%" }}
          alt="Preview"
        />
      </Modal>
    </Form>
  );
}

export default PostNewForm;
