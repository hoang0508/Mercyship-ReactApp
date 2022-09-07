import React from "react";
import { useMercyShip } from "../../../context/MercyshipContext";
import { FilterDocument } from "../../../utils/filter/FilterDocuments";
import FilterImages from "../../../utils/filter/FilterImages";
import { IconImage, IconMedia, IconPdf } from "../../icon";
import "./Bottom.scss";
const Bottom = () => {
  const dataImages = FilterImages();
  const dataDocument = FilterDocument();

  const { setDataAssets } = useMercyShip();
  const handleFilterImage = () => {
    setDataAssets(dataImages?.dataImages);
  };
  const handleFilterPdf = () => {
    setDataAssets(dataDocument?.dataDocument);
  };
  return (
    <div className="bottom-layout">
      <div className="bottom-layout--filter">
        <IconImage onClick={handleFilterImage} />
        <IconMedia></IconMedia>
        <IconPdf onClick={handleFilterPdf} />
      </div>
    </div>
  );
};

export default Bottom;
