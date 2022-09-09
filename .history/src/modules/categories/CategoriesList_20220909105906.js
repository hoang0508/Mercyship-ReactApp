import React from "react";
import Layout from "../../components/layout/Layout";
import { useMercyShip } from "../../context/MercyshipContext";

const CategoriesList = () => {
  const { dataCategory } = useMercyShip();
  if (!dataCategory) return <div className="circle-loading"></div>;

  const categoryList = dataCategory?.categories?.edges;
  console.log(
    "🚀 ~ file: CategoriesList.js ~ line 10 ~ CategoriesList ~ categoryList",
    categoryList
  );

  return <Layout isTabCategory>CategoriesList</Layout>;
};

export default CategoriesList;
