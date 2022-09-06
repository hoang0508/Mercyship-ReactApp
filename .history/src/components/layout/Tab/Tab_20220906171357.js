import React from "react";
import { NavLink } from "react-router-dom";
import "./Tab.scss";
const Tab = () => {
  return (
    <div className="tab">
      <NavLink to={"/"} className="tab-link">
        Assets
      </NavLink>
      <NavLink to="/collections" className="tab-link">
        Collections
      </NavLink>
    </div>
  );
};

export default Tab;
