import React from "react";
import "./Header.scss";
import logoImg from "../../../assets/images/Logo.svg";
import IconSearch from "../../icon/IconSearch";
import IconDots from "../../icon/IconDots";
import IconConvert from "../../icon/IconConvert";
import { useMercyShip } from "../../../context/MercyshipContext";
import { Input } from "../../input";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { valueToggle, isSearchView, handleViewList } = useMercyShip();
  const navigate = useNavigate();
  const handleNavigatHome = () => {
    navigate(`/`);
    console.log("ancv");
  };
  return (
    <>
      <header className="header">
        <div className="header-main">
          <div className="header-logo" onClick={() => handleNavigatHome()}>
            <img src={logoImg} alt="" />
          </div>
          <div className="header-icon">
            {isSearchView && <>{valueToggle ? <Input /> : <IconSearch />}</>}
            <IconConvert onClick={handleViewList} />
            <IconDots />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
