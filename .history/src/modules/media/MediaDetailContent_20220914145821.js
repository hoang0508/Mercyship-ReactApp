import React from "react";
import { v4 } from "uuid";
const MediaDetailContent = ({ dataMediaContent }) => {
  console.log(dataMediaContent);
  return (
    dataMediaContent.map((item) => (
        <div>
        <img src={item?.posts?.edges?.acfMedia?.image?.sourceUrl} alt="" />
        <h1>{item?.title}</h1>
      </div>

    ))
  
  );
};

export default MediaDetailContent;
