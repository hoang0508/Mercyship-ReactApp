import React from "react";
import { useMercyShip } from "../../../context/MercyshipContext";
import FilterImages from "../../../utils/filter/FilterImages";
import { IconImage, IconMedia, IconPdf } from "../../icon";
import "./Bottom.scss";
const Bottom = () => {
  const dataImages = FilterImages();
  console.log(
    "🚀 ~ file: Bottom.js ~ line 8 ~ Bottom ~ dataImages",
    dataImages?.dataImages
  );
  const { setDataAssets } = useMercyShip();
  const handleFilterImage = () => {
    setDataAssets(dataImages?.dataImages);
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
