import React from "react";
import Layout from "../../components/layout/Layout";
import { useMercyShip } from "../../context/MercyshipContext";

const CategoriesList = () => {
  const { dataCategory } = useMercyShip();
  console.log(
    "🚀 ~ file: CategoriesList.js ~ line 7 ~ CategoriesList ~ dataCategory",
    dataCategory
  );
  return <Layout isTabCategory>CategoriesList</Layout>;
};

export default CategoriesList;
