import React from "react";
import { NavLink } from "react-router-dom";
import "./Tab.scss";
const Tab = () => {
  return (
    <div className="tab">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "tab-link tab-link--active" : "tab-link"
        }
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
  );
};

export default Tab;
