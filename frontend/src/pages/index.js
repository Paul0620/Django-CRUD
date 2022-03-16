import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import AccountRoutes from "./accounts";
import AppLayout from "components/AppLayout";
import LoginRequiredRoute from "utils/LoginRequiredRoute";
import PostNew from "./PostNew";
import PostUpdate from "./PostUpdate";

function Root() {
  return (
    <AppLayout>
      <LoginRequiredRoute exact path="/" component={Home} />
      <LoginRequiredRoute exact path="/posts/new" component={PostNew} />
      <LoginRequiredRoute exact path="/posts/update" component={PostUpdate} />
      <Route exact path="/about" component={About} />
      <Route path="/accounts" component={AccountRoutes} />
    </AppLayout>
  );
}

export default Root;
