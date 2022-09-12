import React from "react";
import { v4 } from "uuid";
import Layout from "../../components/layout/Layout";
import { useMercyShip } from "../../context/MercyshipContext";
import CollectionItem from "../screensCollections/CollectionItem";
import "../screensCollections/./ScreenCollection.scss";

const CategoriesList = () => {
  const { dataItemCategory } = useMercyShip();
  return (
    <Layout isTabCategory>
      <CollectionItem key={v4()} data={dataItemCategory?.node}></CollectionItem>
    </Layout>
  );
};

export default CategoriesList;
