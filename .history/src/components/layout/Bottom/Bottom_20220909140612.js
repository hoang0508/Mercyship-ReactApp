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
  const { isActive, handleActive } = useActive();
  console.log("🚀 ~ file: Bottom.js ~ line 20 ~ Bottom ~ isActive", isActive);

  const { setDataAssets } = useMercyShip();
  const { data } = useQuery(getDataMercy);

  useEffect(() => {
    handleActive();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilterImage = () => {
    handleActive();
    if (isActive) {
      setDataAssets(dataImages?.dataImages);
    } else {
      setDataAssets(data?.posts?.edges);
    }
  };
  const handleFilterPdf = () => {
    setDataAssets(dataDocument?.dataDocument);
  };
  const handleFilterMedia = () => {
    setDataAssets(dataVideo?.dataVideo);
  };

  //
  // const {} = useMercyShip();

  return (
    <div className="bottom-layout">
      {isFilter && (
        <div className="bottom-layout--filter">
          <IconImage onClick={handleFilterImage} />
          <IconMedia onClick={handleFilterMedia}></IconMedia>
          <IconPdf onClick={handleFilterPdf} />
        </div>
      )}
    </div>
  );
};

export default Bottom;
