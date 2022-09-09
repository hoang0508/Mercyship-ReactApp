import React from "react";
import { useMercyShip } from "../../../context/MercyshipContext";

const TabCategory = () => {
  const { dataCategory } = useMercyShip();
  if (!dataCategory) return <div className="circle-loading"></div>;

  const categoryList = dataCategory?.categories?.edges;
  console.log(
    "🚀 ~ file: CategoriesList.js ~ line 10 ~ CategoriesList ~ categoryList",
    categoryList
  );
  return (
    <div className="tab">
      <div className="tab-category">TabCategory</div>
    </div>
  );
};

export default TabCategory;
