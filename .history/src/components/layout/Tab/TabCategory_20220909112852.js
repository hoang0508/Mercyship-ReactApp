import React from "react";
import { v4 } from "uuid";
import { useMercyShip } from "../../../context/MercyshipContext";

const TabCategory = () => {
  const { dataCategory } = useMercyShip();
  if (!dataCategory) return <div className="circle-loading"></div>;

  const tabCategoryList = dataCategory?.categories?.edges;

  const handleClickTabCate = (name) => {
    const nameItemCate = tabCategoryList.filter(
      (item) => item?.node?.name === name
    );
    console.log(
      "🚀 ~ file: TabCategory.js ~ line 15 ~ handleClickTabCate ~ nameItemCate",
      nameItemCate
    );
  };
  return (
    <div className="tab">
      <div className="tab-category">
        {tabCategoryList &&
          tabCategoryList.length > 0 &&
          tabCategoryList.map((item) => (
            <span
              key={v4()}
              onClick={() => handleClickTabCate(item?.node?.name)}
            >
              {item?.node?.name}
            </span>
          ))}
      </div>
    </div>
  );
};

export default TabCategory;
