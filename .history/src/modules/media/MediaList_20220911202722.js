import React from "react";

const MediaList = ({ dataList }) => {
  console.log(
    "🚀 ~ file: MediaList.js ~ line 4 ~ MediaList ~ dataList",
    dataList
  );
  return (
    <div>
      <div>
        <img
          src={dataList?.node?.acfMediaCategory?.image || "/Mercy-default.jpg"}
          alt=""
        />
      </div>
      <h3>{dataList?.node?.name}</h3>
    </div>
  );
};

export default MediaList;
