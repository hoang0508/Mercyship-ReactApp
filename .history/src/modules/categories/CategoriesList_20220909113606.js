import React from "react";
import Layout from "../../components/layout/Layout";
import { useMercyShip } from "../../context/MercyshipContext";
import CollectionItem from "../screensCollections/CollectionItem";

const CategoriesList = () => {
  const { dataItemCategory } = useMercyShip();
  console.log(
    "🚀 ~ file: CategoriesList.js ~ line 7 ~ CategoriesList ~ dataItemCategory",
    dataItemCategory
  );
  return (
    <Layout isTabCategory>
      <CollectionItem data={dataItemCategory}></CollectionItem>
    </Layout>
  );
};

export default CategoriesList;
