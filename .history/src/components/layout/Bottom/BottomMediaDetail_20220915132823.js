
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

const dataBottomFilter = [
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

const Bottom = ({ isFilter }) => {
  //func  Filter
  const dataImages = FilterImages();
  const dataDocument = FilterDocument();
  const dataVideo = FilterVideo();

  // hooks useActive
  const { isActive, handleActive, prevIndex } = useActive();

  const { setDataAssets } = useMercyShip();
  const { data } = useQuery(getDataMercy);
  const [titleFilter, setTitleFilter] = useState("");

  useEffect(() => {
    if (isActive) {
      switch (prevIndex) {
        case Number(0):
          setTitleFilter("image");
          setDataAssets(dataImages?.dataImages);
          break;
        case Number(1):
          setTitleFilter("media");
          setDataAssets(dataVideo?.dataVideo);
          break;
        case Number(2):
          setTitleFilter("pdf");
          setDataAssets(dataDocument?.dataDocument);
          break;
        default:
          break;
      }
    } else {
      setDataAssets(data?.posts?.edges);
      setTitleFilter("");
    }
  }, [isActive, prevIndex]);

  const handleFilter = (index) => {
    handleActive(index);
  };

  return (
    <div className="bottom-layout">
      {isFilter && (
        <div className="bottom-layout--filter">
          {dataBottomFilter &&
            dataBottomFilter.length > 0 &&
            dataBottomFilter.map((item, index) => (
              <span
                className={
                  titleFilter === item?.title ? "active-filter" : "title-filter"
                }
                key={item.id}
                onClick={() => handleFilter(index)}
              >
                {item?.icon}
              </span>
            ))}
        </div>
      )}
    </div>
  );
};

export default Bottom;
