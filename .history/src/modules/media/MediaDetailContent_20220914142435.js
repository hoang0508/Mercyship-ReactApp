import React from "react";
import { v4 } from "uuid";
const MediaDetailContent = ({ dataMediaContent }) => {
  console.log(dataMediaContent);
  return (
    dataMediaContent.map((item) => (
        <div>
        <img src={${...item?.posts?.edges?.acfMedia?.image?.sourceUrl}} alt="" />
      </div>

    ))
  
  );
};

export default MediaDetailContent;
