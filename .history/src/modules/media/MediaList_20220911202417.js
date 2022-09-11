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
      <h3>{dataListMedia?node
?.name}</h3>
    </div>
  );
};

export default MediaList;
