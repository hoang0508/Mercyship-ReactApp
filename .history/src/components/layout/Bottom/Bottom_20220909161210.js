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
const Bottom = ({ isFilter }) => {
  //func  Filter
  const dataImages = FilterImages();
  const dataDocument = FilterDocument();
  const dataVideo = FilterVideo();

  //
  const { isActive, handleActive, prevIndex } = useActive();

  const { setDataAssets } = useMercyShip();
  const { data } = useQuery(getDataMercy);

  // useEffect(() => {
  //   handleActive(7);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  useEffect(() => {
    if (isActive) {
      switch (prevIndex) {
        case Number(0):
          setDataAssets(dataImages?.dataImages);
          break;
        case Number(1):
          setDataAssets(dataDocument?.dataDocument);
          break;
        default:
          break;
      }
    } else {
      setDataAssets(data?.posts?.edges);
    }
  }, [isActive]);
  console.log(isActive);
  const handleFilterImage = (index) => {
    handleActive(index);
    // if (isActive) {
    //   setDataAssets(dataImages?.dataImages);
    // } else {
    //   setDataAssets(data?.posts?.edges);
    // }
  };
  const handleFilterPdf = (index) => {
    handleActive(index);
    // if (isActive) {
    //   setDataAssets(dataDocument?.dataDocument);
    // } else {
    //   setDataAssets(data?.posts?.edges);
    // }
  };
  const handleFilterMedia = (index) => {
    setDataAssets(dataVideo?.dataVideo);
  };

  //
  // const {} = useMercyShip();

  return (
    <div className="bottom-layout">
      {isFilter && (
        <div className="bottom-layout--filter">
          <IconImage onClick={() => handleFilterImage(0)} />
          <IconMedia onClick={() => handleFilterMedia(1)}></IconMedia>
          <IconPdf onClick={() => handleFilterPdf(2)} />
        </div>
      )}
    </div>
  );
};

export default Bottom;
