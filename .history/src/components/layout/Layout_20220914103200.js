import React from "react";
import Header from "./Header/Header";
import HeaderMediaDetail from "./Header/HeaderMediaDetail";
import TabCategory from "./Tab/TabCategory";
import TabLink from "./Tab/TabLink";
import TabMedia from "./Tab/TabMedia";

const Layout = ({ children, isTabLink, isTabCategory, isTabMedia, isTabMediaDetail}) => {
  return (
    <>
      <Header></Header>
      {isTabLink && <TabLink></TabLink>}
      {isTabCategory && <TabCategory></TabCategory>}
      {isTabMedia && <TabMedia text={isTabMedia}></TabMedia>}
      {isTabMediaDetail && <TabMedia text={isTabMediaDetail}></TabMedia>}

      {children}
    </>
  );
};

export default Layout;
