import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useMercyShip } from "../../../context/MercyshipContext";
import { getDataMercy } from "../../../graphql-client/queries";
import useActive from "../../../hooks/useAvtive";
import { FilterDocument } from "../../../utils/filter/FilterDocuments";
import FilterImages from "../../../utils/filter/FilterImages";
import FilterVideo from "../../../utils/filter/FilterVideo";
import { IconShare, IconMedia, IconPdf, IconSearch } from "../../icon";
import "./Bottom.scss";

const dataBottomOptions = [
  {
    id: 1,
    icon: <IconSearch />,
    title: "image",
  },
  {
    id: 2,
    icon: <IconMedia />,
    title: "media",
  },
  {
    id: 3,
    icon: <IconPdf />,
    title: "pdf",
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
