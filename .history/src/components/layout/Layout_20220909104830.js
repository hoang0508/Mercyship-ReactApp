import React from "react";
import Header from "./Header/Header";
import TabCategory from "./Tab/TabCategory";
import TabLink from "./Tab/TabLink";

const Layout = ({ children, isTabLink, isTabCategory }) => {
  return (
    <>
      <Header></Header>
      {isTabLink && <TabLink></TabLink>}
      {isTabCategory && <TabCategory></TabCategory>}
      {children}
    </>
  );
};

export default Layout;
