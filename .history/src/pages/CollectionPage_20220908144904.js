import { useQuery } from "@apollo/client";
import React from "react";
import Layout from "../components/layout/Layout";
import { getCategories } from "../graphql-client/queries";

const CollectionPage = () => {
  const { loading, data } = useQuery(getCategories);

  if (loading) return <div className="circle-loading"></div>;

  const dataCollection = data?.categories?.edges;
  console.log(
    "🚀 ~ file: CollectionPage.js ~ line 16 ~ CollectionPage ~ dataCollection",
    dataCollection
  );

  return <Layout>CollectionPage</Layout>;
};

export default CollectionPage;
