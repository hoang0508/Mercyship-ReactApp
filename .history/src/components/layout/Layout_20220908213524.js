import React from "react";
import Header from "./Header/Header";
import TabLink from "./Tab/TabLink";

const Layout = ({ children, isTabLink }) => {
  return (
    <>
      <Header></Header>
      {isTabLink && <TabLink></TabLink>}
      {children}
    </>
  );
};

export default Layout;
