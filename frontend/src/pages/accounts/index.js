import React from "react";
import { Route } from "react-router-dom";
import Profile from "./Profile";
import Login from "./Login";
import Signup from "./Signup";

function Routes() {
  return (
    <>
      <Route component={Login} />
      <Route component={Signup} />
      <Route component={Profile} />
    </>
  );
}
