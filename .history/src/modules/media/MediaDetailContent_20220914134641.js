import React from "react";

const MediaDetailContent = ({ dataMediaContent }) => {
  console.log(dataMediaContent);
  return (
    <>
    <div className="media-detail-content">
      {dataMediaContent.map((item) => (
        <img src={item?.node?.acfMedia?.image?.sourceUrl} alt=""></img>
      ))}
    </div>
    <div> </div>
    </>
  );
};

export default MediaDetailContent;
