


import React, { useState} from "react";
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
