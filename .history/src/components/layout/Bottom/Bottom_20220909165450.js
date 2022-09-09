import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMercyShip } from "../../../context/MercyshipContext";
import { getDataMercy } from "../../../graphql-client/queries";
import useActive from "../../../hooks/useAvtive";
import HomePage from "../../../pages/HomePage";
import { FilterDocument } from "../../../utils/filter/FilterDocuments";
import FilterImages from "../../../utils/filter/FilterImages";
import FilterVideo from "../../../utils/filter/FilterVideo";
import { IconImage, IconMedia, IconPdf } from "../../icon";
import "./Bottom.scss";

const dataBottomFilter = [
  {
    id: 1,
    icon: <IconImage />,
  },
  {
    id: 2,
    icon: <IconMedia />,
  },
  {
    id: 3,
    icon: <IconPdf />,
  },
];

const Bottom = ({ isFilter }) => {
  //func  Filter
  const dataImages = FilterImages();
  const dataDocument = FilterDocument();
  const dataVideo = FilterVideo();

  //
  const { isActive, handleActive, prevIndex } = useActive();

  const { setDataAssets } = useMercyShip();
  const { data } = useQuery(getDataMercy);

  useEffect(() => {
    if (isActive) {
      switch (prevIndex) {
        case Number(0):
          setDataAssets(dataImages?.dataImages);
          break;
        case Number(2):
          setDataAssets(dataDocument?.dataDocument);
          break;
        default:
          break;
      }
    } else {
      setDataAssets(data?.posts?.edges);
    }
  }, [isActive, prevIndex]);
  console.log(isActive);
  const handleFilter = (index) => {
    handleActive(index);
    // if (isActive) {
    //   setDataAssets(dataImages?.dataImages);
    // } else {
    //   setDataAssets(data?.posts?.edges);
    // }
  };
  // const handleFilterPdf = (index) => {
  //   handleActive(index);
  //   // if (isActive) {
  //   //   setDataAssets(dataDocument?.dataDocument);
  //   // } else {
  //   //   setDataAssets(data?.posts?.edges);
  //   // }
  // };
  // const handleFilterMedia = (index) => {
  //   setDataAssets(dataVideo?.dataVideo);
  // };

  return (
    <div className="bottom-layout">
      {isFilter && (
        <div className="bottom-layout--filter">
          {dataBottomFilter &&
            dataBottomFilter.length > 0 &&
            dataBottomFilter.map((item, index) => (
              <span key={item.id} onClick={() => handleFilter(index)}>
                {item?.icon}
              </span>
            ))}
        </div>
      )}
    </div>
  );
};

export default Bottom;
