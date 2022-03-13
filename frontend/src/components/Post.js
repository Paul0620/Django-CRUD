import React from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "store";

function Post({ post }) {
  const {
    store: { jwtToken },
  } = useAppContext();

  const { id, user, title, content, image } = post;
  const { nickname } = user;

  const history = useHistory();

  return (
    <div className="col-4 py-3">
      <div className="card">
        <img src={image} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <a href="#" className="btn btn-primary">
            자세히
          </a>
        </div>
      </div>
    </div>
  );
}

export default Post;
