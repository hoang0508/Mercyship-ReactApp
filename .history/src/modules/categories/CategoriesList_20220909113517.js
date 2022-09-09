import React from "react";
import Layout from "../../components/layout/Layout";
import { useMercyShip } from "../../context/MercyshipContext";

const CategoriesList = () => {
  const { dataItemCategory } = useMercyShip();
  console.log(
    "🚀 ~ file: CategoriesList.js ~ line 7 ~ CategoriesList ~ dataItemCategory",
    dataItemCategory
  );
  return <Layout isTabCategory>CategoriesList</Layout>;
};

export default CategoriesList;
