import React from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

function AppLayout({ children }) {
  return (
    <div className="app">
      <AppHeader />
      {/* postList */}
      <div className="contents">{children}</div>
      <AppFooter />
    </div>
  );
}

export default AppLayout;
