import React from "react";
import { v4 } from "uuid";
import Layout from "../../components/layout/Layout";
import { useMercyShip } from "../../context/MercyshipContext";
import CollectionItem from "../screensCollections/CollectionItem";
import "../screensCollections/./ScreenCollection.scss";

const CategoriesList = () => {
  const { dataItemCategory } = useMercyShip();
  console.log(
    "🚀 ~ file: CategoriesList.js ~ line 10 ~ CategoriesList ~ dataItemCategory",
    dataItemCategory
  );
  return (
    <Layout isTabCategory>
      <CollectionItem key={v4()} data={dataItemCategory?.node}></CollectionItem>
    </Layout>
  );
};

export default CategoriesList;
