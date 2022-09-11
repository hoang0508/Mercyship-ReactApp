import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { useMercyShip } from "../context/MercyshipContext";

const MediaListPage = () => {
  const { id } = useParams();
  const { dataCategory } = useMercyShip();
  const dataListMedia = dataCategory?.categories?.edges?.map(
    (item) => item?.node?.databaseId === id
  );
  console.log(
    "🚀 ~ file: MediaListPage.js ~ line 14 ~ MediaListPage ~ dataListMedia",
    dataListMedia
  );
  return <Layout>MediaListPage</Layout>;
};

export default MediaListPage;
