import React from "react";


import logoImg from "../../../assets/images/Logo.svg";
import IconBack from "../../icon/IconBack";
import IconDetail from "../../icon/IconDetail";
import Tab from "../Tab/Tab.scss"

const TabMediaDetail = () => {
  return (
    <>
      <header className="header">
        <div className="header-main">
          <div className="header-logo">
            <img src={logoImg} alt="" />
          </div>
          <div className="header-icon">
            <IconBack />
            <IconDetail />
          </div>
        </div>
       <Tab></Tab>
      </header>
    </>
  );
};

export default TabMediaDetail;
