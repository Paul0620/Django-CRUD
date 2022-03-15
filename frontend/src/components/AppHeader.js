import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useAppContext, deleteToken } from "store";
import { Button } from "antd";

function AppHeader() {
  const history = useHistory();

  const location = useLocation();

  const { from: loginRedirectUrl } = location.state || {
    from: { pathname: "/" },
  };

  // 로그아웃을 위한 토큰 지우기
  const { dispatch } = useAppContext();
  const {
    store: { jwtToken },
  } = useAppContext();

  const logoutHandle = () => {
    dispatch(deleteToken(jwtToken));
    history.push(loginRedirectUrl);
  };

  // 게시물 작성으로 이동
  const handleClick = () => {
    history.push("/posts/new");
  };
  return (
    <div className="header py-2 bg-light border-bottom">
      <div className="container d-flex flex-wrap">
        <ul className="nav me-auto">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link link-dark px-2 active"
              aria-current="page"
            >
              <b style={{ fontSize: "18px" }}>Home</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link link-dark px-2">
              <b style={{ fontSize: "18px" }}>About</b>
            </Link>
          </li>
        </ul>
        {jwtToken === "" ? null : (
          <ul className="nav">
            <li className="nav-item">
              <Button
                type="text"
                style={{ marginTop: "5px" }}
                className="nav-link link-dark px-2"
                onClick={handleClick}
              >
                NewPost
              </Button>
            </li>
            <li className="nav-item">
              <Button
                type="text"
                style={{ marginTop: "5px" }}
                className="nav-link link-dark px-2"
                onClick={logoutHandle}
              >
                Logout
              </Button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default AppHeader;
