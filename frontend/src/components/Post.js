import React from "react";
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

  return (
    <div className="col-4 py-3">
      <div className="card">
        <div className="card-header">{user}</div>
        <div className="ratio ratio-4x3">
          <img src={image} className="card-img-top" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <Link href="#" className="btn btn-primary" style={{ float: "right" }}>
            자세히
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Post;
