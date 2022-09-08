import React from "react";
import "./Header.scss";

import logoImg from "../../../assets/images/Logo.svg";
import IconSearch from "../../icon/IconSearch";
import IconDots from "../../icon/IconDots";
import IconConvert from "../../icon/IconConvert";
import Tab from "../Tab/Tab";
import { useMercyShip } from "../../../context/MercyshipContext";
import { Input } from "../../input";
const Header = () => {
  const { valueToggle } = useMercyShip();
  return (
    <>
      <header className="header">
        <div className="header-main">
          <div className="header-logo">
            <img src={logoImg} alt="" />
          </div>
          <div className="header-icon">
            {valueToggle ? <Input /> : <IconSearch />}

            <IconConvert />
            <IconDots />
          </div>
        </div>
        <Tab></Tab>
      </header>
    </>
  );
};

export default Header;
