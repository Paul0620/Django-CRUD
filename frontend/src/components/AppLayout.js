import React from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import PostList from "./PostList";

function AppLayout() {
  return (
    <div className="app">
      <AppHeader />
      {/* <div className="contents">content</div> */}
      <PostList />
      <AppFooter />
    </div>
  );
}

export default AppLayout;
