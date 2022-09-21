
// import React from "react";
// import {IconDownload, IconFavorite, IconShare}  from "../../icon"
// import "./BottomMediaDetail.scss"
// const functionButton = [
//     {
//         id: 1,
//         icon: <IconShare/>,
//         title:"Favorite",
//     },
//     {
//         id: 2,
//         icon: <IconDownload/>,
//         title:"Download",
//     },
//     {
//         id: 3,
//         icon: <IconFavorite/>,
//         title:"Share",
//     },
// ]



// const BottomMediaDetail = () => {
//     return (
//         <div className="bottom-media-detail-layout">
//             <div className="bottom-media-detail--icon">
//             <div className="icon-share">
//             {<IconShare/>}
//             </div>
//             <div className="icon-download">
//             { <IconDownload />} 
//             </div>
//             <div className="icon-favorite">
//             {<IconFavorite/>}
//             </div>
//             </div>
           
//         </div>
//     );
// };

// export default BottomMediaDetail;
import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useMercyShip } from "../../../context/MercyshipContext";
import { getDataMercy } from "../../../graphql-client/queries";
import useActive from "../../../hooks/useAvtive";
import { FilterDocument } from "../../../utils/filter/FilterDocuments";
import FilterImages from "../../../utils/filter/FilterImages";
import FilterVideo from "../../../utils/filter/FilterVideo";
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
  //func  Filter
  const dataImages = FilterImages();
  const dataDocument = FilterDocument();
  const dataVideo = FilterVideo();

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
