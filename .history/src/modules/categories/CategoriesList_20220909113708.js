import React from "react";
import { v4 } from "uuid";
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
      {dataItemCategory &&
        dataItemCategory.length > 0 &&
        dataItemCategory.map((item) => (
          <CollectionItem key={v4()} data={item}></CollectionItem>
        ))}
    </Layout>
  );
};

export default CategoriesList;
