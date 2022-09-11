import React from "react";

const MediaList = ({ dataListMedia }) => {
  console.log(
    "🚀 ~ file: MediaList.js ~ line 4 ~ MediaList ~ dataListMedia",
    dataListMedia
  );
  return (
    <div>
      <div>
        <img
          src={
            dataListMedia?.node?.acfMediaCategory?.image || "/Mercy-default.jpg"
          }
          alt=""
        />
      </div>
      <h3>{dataListMedia?.node?.name}</h3>
    </div>
  );
};

export default MediaList;
