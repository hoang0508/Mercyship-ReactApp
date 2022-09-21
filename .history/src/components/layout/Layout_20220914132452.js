import React from "react";
import Header from "./Header/Header";
import HeaderMediaDetail from "./Header/HeaderMediaDetail";
import TabCategory from "./Tab/TabCategory";
import TabLink from "./Tab/TabLink";
import TabMedia from "./Tab/TabMedia";
import TabMediaDetail from "./Tab/TabMediaDetail";
import TabDetail from "./Tab/TabDetail";
const Layout = ({
  children,
  isTabLink,
  isTabCategory,
  isTabMedia,
  isTabMediaDetail,
  isTabDetail,
}) => {
  return (
    <>
      <Header></Header>
      {isTabLink && <TabLink></TabLink>}
      {isTabCategory && <TabCategory></TabCategory>}
      {isTabMedia && <TabMedia text={isTabMedia}></TabMedia>}
      {isTabMediaDetail && (
        <TabMediaDetail text={isTabMediaDetail}></TabMediaDetail>
      )}
      {isTabDetail && <TabDetail></TabDetail>}
      {children}
    </>
  );
};

export default Layout;
