import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { useMercyShip } from "../context/MercyshipContext";

const MediaListPage = () => {
  const { id } = useParams();
  const { dataCategory } = useMercyShip();
  console.log(
    "🚀 ~ file: MediaListPage.js ~ line 9 ~ MediaListPage ~ dataCategory",
    dataCategory
  );
  return <Layout>MediaListPage</Layout>;
};

export default MediaListPage;
