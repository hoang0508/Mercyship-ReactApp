import { useQuery } from "@apollo/client";
import React from "react";
import Layout from "../components/layout/Layout";
import { getCategories } from "../graphql-client/queries";

const CollectionPage = () => {
  const { loading, data } = useQuery(getCategories);
  console.log(
    "🚀 ~ file: CollectionPage.js ~ line 8 ~ CollectionPage ~ data",
    data
  );

  if (loading) return <div className="circle-loading"></div>;

  return <Layout>CollectionPage</Layout>;
};

export default CollectionPage;
