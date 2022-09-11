import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";

const MediaListPage = () => {
  const { id } = useParams();
  console.log("🚀 ~ file: MediaListPage.js ~ line 6 ~ MediaListPage ~ id", id);

  return <Layout>MediaListPage</Layout>;
};

export default MediaListPage;
