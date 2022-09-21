import React from "react";
import "./Header.scss";

import logoImg from "../../../assets/images/Logo.svg";
import IconBack from "../../icon/IconBack";
import IconDetail from "../../icon/IconDetail";
import Tab from "../Tab/Tab";

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
      
      </header>
    </>
  );
};

export default TabMediaDetail;
