import React, { useEffect } from "react";
import { v4 } from "uuid";
import { useMercyShip } from "../../../context/MercyshipContext";

const TabCategory = () => {
  const { dataCategory, setDataItemCategory } = useMercyShip();
  const tabCategoryList = dataCategory?.categories?.edges;
  console.log(
    "🚀 ~ file: TabCategory.js ~ line 8 ~ TabCategory ~ tabCategoryList",
    tabCategoryList[0]
  );
  // useEffect(() => {
  //   const nameCate = tabCategoryList.filter(
  //     (item) => item?.node?.name === name
  //   );
  // }, [])
  if (!dataCategory) return <div className="circle-loading"></div>;

  const handleClickTabCate = (name) => {
    const nameItemCate = tabCategoryList.filter(
      (item) => item?.node?.name === name
    );
    setDataItemCategory(nameItemCate);
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
