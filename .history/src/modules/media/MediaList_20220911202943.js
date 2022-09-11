import React from "react";
import "./MediaList.scss";
const MediaList = ({ dataList }) => {
  console.log(
    "🚀 ~ file: MediaList.js ~ line 4 ~ MediaList ~ dataList",
    dataList
  );
  return (
    <div className="">
      <div>
        <img
          src={
            dataList?.node?.acfMediaCategory?.image?.sourceUrl ||
            "/Mercy-default.jpg"
          }
          alt=""
        />
      </div>
      <h3>{dataList?.node?.name}</h3>
    </div>
  );
};

export default MediaList;
