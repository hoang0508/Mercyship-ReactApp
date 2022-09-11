import React from "react";

const MediaList = ({ dataListMedia }) => {
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
    </div>
  );
};

export default MediaList;
