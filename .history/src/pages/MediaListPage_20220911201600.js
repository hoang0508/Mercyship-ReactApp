import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { useMercyShip } from "../context/MercyshipContext";

const MediaListPage = () => {
  const { id } = useParams();
  console.log("🚀 ~ file: MediaListPage.js ~ line 8 ~ MediaListPage ~ id", id);
  const { dataCategory } = useMercyShip();
  const dataListMedia = dataCategory?.categories?.edges?.filter(
    (item) => item?.node?.databaseId === id
  );
  console.log(
    "🚀 ~ file: MediaListPage.js ~ line 14 ~ MediaListPage ~ dataListMedia",
    dataListMedia
  );
  return <Layout>MediaListPage</Layout>;
};

export default MediaListPage;
