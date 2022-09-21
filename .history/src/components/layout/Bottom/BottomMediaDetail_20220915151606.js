


import { useQuery } from "@apollo/client";
import React, { useEffect, useState, useLocalStorage } from "react";
import { useMercyShip } from "../../../context/MercyshipContext";
import { getDataMercy } from "../../../graphql-client/queries";
import useActive from "../../../hooks/useAvtive";
import { IconShare, IconDownload, IconFavorite } from "../../icon";
import "./Bottom.scss";

const iconBotton = [
  {
    id: 1,
    icon: <IconShare />,
    title: "share",
  },
  {
    id: 2,
    icon: <IconDownload />,
    title: "download",
  },
  {
    id: 3,
    icon: <IconFavorite />,
    title: "favorite",
  },
];

const BottomMediaDetail = ({ isFilter }) => {
//function Options
//hook useLocalStorage
const { storedValue, setValue } = useLocalStorage("cartValue", []);
  // hooks useActive
  const { isActive, handleActive, prevIndex } = useActive();

  const { setDataAssets } = useMercyShip();
  const { data } = useQuery(getDataMercy);
  const [titleFilter, setTitleFilter] = useState("");

 

  return (
    <div className="bottom-layout">
      {isFilter && (
        <div className="bottom-layout--filter">
          {iconBotton &&
            iconBotton.length > 0 &&
            iconBotton.map((item, index) => (
              <span
                className={
                  titleFilter === item?.title ? "active-filter" : "title-filter"
                }
                key={item.id}
               
              >
                {item?.icon}
              </span>
            ))}
        </div>
      )}
    </div>
  );
};

export default BottomMediaDetail;
