import React from "react";
import { useMercyShip } from "../../../context/MercyshipContext";

const TabCategory = () => {
  const { dataCategory } = useMercyShip();
  if (!dataCategory) return <div className="circle-loading"></div>;

  const tabCategoryList = dataCategory?.categories?.edges;

  const handleClickTabCate = () => {};
  return (
    <div className="tab">
      <div className="tab-category">
        {tabCategoryList &&
          tabCategoryList.length > 0 &&
          tabCategoryList.map((item) => (
            <span onClick={() => handleClickTabCate(item)}>
              {item?.node?.name}
            </span>
          ))}
      </div>
    </div>
  );
};

export default TabCategory;
