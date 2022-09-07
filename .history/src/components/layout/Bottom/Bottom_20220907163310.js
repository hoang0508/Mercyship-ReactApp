import React from "react";
import { useMercyShip } from "../../../context/MercyshipContext";
import FilterImages from "../../../utils/filter/FilterImages";
import { IconImage, IconMedia, IconPdf } from "../../icon";
import "./Bottom.scss";
const Bottom = () => {
  const dataImages = FilterImages();
  const { setDataAssets } = useMercyShip();
  const handleFilterImage = () => {
    setDataAssets(dataImages);
  };
  return (
    <div className="bottom-layout">
      <div className="bottom-layout--filter">
        <IconImage onClick={handleFilterImage} />
        <IconMedia></IconMedia>
        <IconPdf />
      </div>
    </div>
  );
};

export default Bottom;
