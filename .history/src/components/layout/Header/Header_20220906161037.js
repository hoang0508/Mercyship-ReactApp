import React, { lazy } from "react";
import "./Header.scss";

import logoImg from "../../../assets/images/Logo.svg";
const Header = () => {
  return (
    <div>
      <div>
        <img src={logoImg} loading={lazy} alt="" />
      </div>
      <div></div>
    </div>
  );
};

export default Header;
