import React from "react";
import "./Header.scss"

import logoImg from "../../../assets/images/Logo.svg";
import IconSearch from "../../icon/IconSearch";
import IconDots from "../../icon/IconDots";
import IconConvert from "../../icon/IconConvert";
import MyFavoritesTabList from "../Tab/MyFavoritesTabList";
const HeaderMyFavorites = () => {
  return (
    <>
      <header className="header-my-favorites-list">
        <div className="header-my-favorites-list-main">
          <div className="header-my-favorites-list-logo">
            <img src={logoImg} alt="" />
          </div>
          <div className="header-my-favorites-list-icon">
            <IconSearch />
            <IconConvert />
            <IconDots />
          </div>
        </div>
       <MyFavoritesTabList></MyFavoritesTabList>
      </header>
    </>
  );
};

export default HeaderMyFavorites;
