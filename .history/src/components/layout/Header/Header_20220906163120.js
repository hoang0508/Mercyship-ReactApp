import React from "react";
import "./Header.scss";

import logoImg from "../../../assets/images/Logo.svg";
import IconSearch from "../../icon/IconSearch";
import IconDots from "../../icon/IconDots";
import IconConvert from "../../icon/IconConvert";
const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logoImg} alt="" />
      </div>
      <div className="header-icon">
        <IconSearch />
        <IconConvert />
        <IconDots />
      </div>
    </div>
  );
};

export default Header;
