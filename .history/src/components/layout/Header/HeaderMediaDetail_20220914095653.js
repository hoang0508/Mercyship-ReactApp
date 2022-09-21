import React from "react";
import "./Header.scss";
import logoImg from "../../../assets/images/Logo.svg";
import IconBack from "../../icon/IconBack";
import IconDetail from "../../icon/IconDetail";
import IconConvert from "../../icon/IconConvert";
import IconDots from "../../icon/IconDots";
import { useMercyShip } from "../../../context/MercyshipContext";
import { Input } from "../../input";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { valueToggle, isSearchView, handleViewList } = useMercyShip();
  const navigate = useNavigate();
  const handleNavigatHome = () => {
    navigate(`/`);
  };
  return (
    <>
      <header className="header">
        <div className="header-main">
          <div className="header-logo" onClick={() => handleNavigatHome()}>
            <img src={logoImg} alt="" />
          </div>
          <div className="header-icon">
            
            <IconConvert onClick={handleViewList} />
            <IconDots />
            <IconBack/>
            <IconDetail/>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
