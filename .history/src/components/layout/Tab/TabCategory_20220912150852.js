import React, { useEffect } from "react";
import { v4 } from "uuid";
import { useMercyShip } from "../../../context/MercyshipContext";

const TabCategory = () => {
  const { dataCategory, setDataItemCategory } = useMercyShip();
  const tabCategoryList = dataCategory?.categories?.edges;
  useEffect(() => {
    const nameCate = tabCategoryList[0];
    console.log(
      "🚀 ~ file: TabCategory.js ~ line 10 ~ useEffect ~ nameCate",
      nameCate
    );
    setDataItemCategory(nameCate);
  }, [setDataItemCategory, tabCategoryList]);
  if (!dataCategory) return <div className="circle-loading"></div>;

  const handleClickTabCate = (item) => {
    // const nameItemCate = tabCategoryList.filter(
    //   (item) => item?.node?.name === name
    // );
    setDataItemCategory(item);
  };

  return (
    <div className="tab">
      <div className="tab-category">
        {tabCategoryList &&
          tabCategoryList.length > 0 &&
          tabCategoryList.map((item) => (
            <span key={v4()} onClick={() => handleClickTabCate(item)}>
              {item?.node?.name}
            </span>
          ))}
      </div>
    </div>
  );
};

export default TabCategory;
