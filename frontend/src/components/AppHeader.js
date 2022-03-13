import React from "react";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <div className="header py-2 bg-light border-bottom">
      <div className="container d-flex flex-wrap">
        <ul className="nav me-auto">
          <li className="nav-item">
            <Link
              href="#"
              className="nav-link link-dark px-2 active"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link link-dark px-2">
              About
            </Link>
          </li>
        </ul>
        <ul className="nav">
          <li className="nav-item">
            <Link href="#" className="nav-link link-dark px-2">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link link-dark px-2">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AppHeader;
