import React from "react";
import Layout from "../../components/layout/Layout";
import { useMercyShip } from "../../context/MercyshipContext";

const CategoriesList = () => {
  const { dataCategory } = useMercyShip();
  if (!dataCategory) return <div className="circle-loading"></div>;
  console.log(
    "🚀 ~ file: CategoriesList.js ~ line 7 ~ CategoriesList ~ dataCategory",
    dataCategory
  );
  return <Layout isTabCategory>CategoriesList</Layout>;
};

export default CategoriesList;
