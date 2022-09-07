import React from "react";
import { useMercyShip } from "../../../context/MercyshipContext";
import { FilterDocument } from "../../../utils/filter/FilterDocuments";
import FilterImages from "../../../utils/filter/FilterImages";
import FilterVideo from "../../../utils/filter/FilterVideo";
import { IconImage, IconMedia, IconPdf } from "../../icon";
import "./Bottom.scss";
const Bottom = () => {
  // Filter
  const dataImages = FilterImages();
  const dataDocument = FilterDocument();
  const dataVideo = FilterVideo();

  const { setDataAssets } = useMercyShip();
  const handleFilterImage = () => {
    setDataAssets(dataImages?.dataImages);
  };
  const handleFilterPdf = () => {
    setDataAssets(dataDocument?.dataDocument);
  };
  const handleFilterMedia = () => {
    setDataAssets(dataVideo?.dataVideo);
  };

  //

  return (
    <div className="bottom-layout">
      <div className="bottom-layout--filter">
        <IconImage onClick={handleFilterImage} />
        <IconMedia onClick={handleFilterMedia}></IconMedia>
        <IconPdf onClick={handleFilterPdf} />
      </div>
    </div>
  );
};

export default Bottom;
