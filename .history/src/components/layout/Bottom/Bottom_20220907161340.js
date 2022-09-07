import React from "react";
import { IconImage, IconMedia, IconPdf } from "../../icon";

const Bottom = () => {
  return (
    <div className="bottom-layout">
      <div className="bottom-layout--filter">
        <IconImage />
        <IconMedia></IconMedia>
        <IconPdf />
      </div>
    </div>
  );
};

export default Bottom;
