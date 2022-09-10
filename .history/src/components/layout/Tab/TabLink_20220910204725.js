import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Tab.scss";
const TabLink = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="tab">
      <div className="tab-home">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "tab-link tab-link--active" : "tab-link"
          }
          onClick={handleNavigate}
        >
          Assets
        </NavLink>
        <NavLink
          to="/collections"
          className={({ isActive }) =>
            isActive ? "tab-link tab-link--active" : "tab-link"
          }
        >
          Collections
        </NavLink>
      </div>
    </div>
  );
};

export default TabLink;
