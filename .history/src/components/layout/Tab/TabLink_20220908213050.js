import { useQuery } from "@apollo/client";
import React from "react";
import { NavLink } from "react-router-dom";
import { useMercyShip } from "../../../context/MercyshipContext";
import { getDataMercy } from "../../../graphql-client/queries";
import "./Tab.scss";
const TabLink = () => {
  const { setDataAssets } = useMercyShip();
  const { data } = useQuery(getDataMercy);

  const handleDataAll = () => {
    setDataAssets(data?.posts?.edges);
  };
  return (
    <div className="tab">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "tab-link tab-link--active" : "tab-link"
        }
        onClick={handleDataAll}
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

export default TabLink;
