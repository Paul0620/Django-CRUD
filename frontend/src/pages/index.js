import React from "react";
import { Route } from "react-router-dom";
import AppLayout from "components/AppLayout";
import Home from "./Home";
import About from "./About";

function Root() {
  return (
    <AppLayout>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </AppLayout>
  );
}

export default Root;
