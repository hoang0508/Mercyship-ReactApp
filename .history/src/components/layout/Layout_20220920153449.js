import React from "react";
import Header from "./Header/Header";
import HeaderMediaDetail from "./Header/HeaderMediaDetail";
import HeaderMyFavorites from "./Header/HeaderMyFavorites"
import TabCategory from "./Tab/TabCategory";
import TabLink from "./Tab/TabLink";
import TabMedia from "./Tab/TabMedia";
import TabMediaDetail from "./Tab/TabMediaDetail";
import TabDetail from "./Tab/TabDetail";
import TabMyFavoriteList from "./Tab/TabMyFavoriteList";
import TabMyFavoriteGird from "./Tab/TabMyFavoriteGird";
const Layout = ({
  children,
  isTabLink,
  isTabCategory,
  isTabMedia,
  isTabMediaDetail,
  isTabDetail,
  isTabMyFavoriteList,
  isTabMyFavoriteGird,
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
      {isTabMyFavoriteGird && <TabMyFavoriteGird></TabMyFavoriteGird>}
      {isTabMyFavoriteList && <TabMyFavoriteList></TabMyFavoriteList>}
      {children}
    </>
  );
};

export default Layout;
