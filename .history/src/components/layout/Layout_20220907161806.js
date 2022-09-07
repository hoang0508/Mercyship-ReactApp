import React from "react";
import Bottom from "./Bottom/Bottom";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
      <Bottom></Bottom>
    </>
  );
};

export default Layout;
