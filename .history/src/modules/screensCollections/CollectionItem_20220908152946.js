import React from "react";
import { IconArrowRight } from "../../components/icon";

const CollectionItem = ({ data }) => {
  console.log(
    "🚀 ~ file: CollectionItem.js ~ line 5 ~ CollectionItem ~ data",
    data
  );

  return (
    <div className="collection-list--item">
      <div className="collection-list--content">
        <div className="collection-list--image">
          <img src={data?.acfMediaCategory?.image?.sourceUrl} alt="" />
        </div>
        <div className="collection-head">
          <h3 className="collection-title">{data?.name}</h3>
          <span className="collection-number">{data?.databaseId}</span>
        </div>
      </div>
      <div className="collection-list--icon">
        <IconArrowRight></IconArrowRight>
      </div>
    </div>
  );
};

export default CollectionItem;
